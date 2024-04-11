import { NextApiRequest, NextApiResponse } from 'next';

import {
  deleteFromDynamoDb,
  updateItemProductQuantity,
  writeToDynamoDbOrders,
} from '../../../server/product/dynamoDbOperator';
import logger from '../../../server/logging';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if (req.method === 'POST') {
      const { 
        buyerEmail,
        name,
        Address,
        City,
        Postcode,
        EmailAddress,
        date,
        orderStatusDate,
        Phone,
        totalPrice,
        orderProducts,
        paymentId,
        shipmentStatus,
        State,
        orderId } =
        req.body;
      try {
        await writeToDynamoDbOrders(
            buyerEmail,
            name,
            Address,
            City,
            Postcode,
            State,
            date,
            orderStatusDate,
            EmailAddress,
            Phone,
            totalPrice,
            orderProducts,
            paymentId,
            shipmentStatus,
            orderId,
        );
        for (let i = 0; i < orderProducts.length; i++) {
          await updateItemProductQuantity(orderProducts[i]._id, orderProducts[i].totalCard);
        }
        res.status(200).json({ message: 'Successfully wrote to DynamoDB' });
      } catch (error) {
        console.log(error);
        logger.error({ message: 'Error writing to DynamoDB', error }, 'error');
        res.status(500).json({ error: 'Error writing to DynamoDB' });
      }
    } else if (req.method === 'DELETE') {
      const { entityType, entityId, createdAt } = req.query;
      if (entityType && entityId && createdAt) {
        try {
          await deleteFromDynamoDb(
            entityType.toString(),
            entityId.toString(),
            createdAt.toString()
          );
          res.status(200).json({ message: 'Successfully deleted from DynamoDB' });
        } catch (error) {
          logger.error({ message: 'Error deleting DynamoDB', error }, 'error');
          res.status(500).json({ error: 'Error deleting from DynamoDB' });
        }
      } else {
        res.status(400).json({ error: 'Missing parameters' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }