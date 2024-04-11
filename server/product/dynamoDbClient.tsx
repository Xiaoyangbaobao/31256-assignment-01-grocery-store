import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
// import { fromTokenFile } from '@aws-sdk/credential-providers';

export async function createDynamoClient(): Promise<DynamoDBClient> {
//   const credentials = await resolveAWSCredentials();

  return new DynamoDBClient({
    endpoint: process.env.DYNAMO_DB_ENDPOINT,
    region: process.env.DYNAMO_DB_AWS_REGION,
  });
}

// export async function resolveAWSCredentials() {
//   const { AWS_ROLE_ARN, AWS_WEB_IDENTITY_TOKEN_FILE } = process.env;

//   if (AWS_ROLE_ARN && AWS_WEB_IDENTITY_TOKEN_FILE) {
//     return fromTokenFile({
//       roleArn: AWS_ROLE_ARN,
//       webIdentityTokenFile: AWS_WEB_IDENTITY_TOKEN_FILE,
//     });
//   } else {
//     throw new Error('No AWS_ROLE_ARN or AWS_WEB_IDENTITY_TOKEN_FILE');
//   }
// }

export async function getDynamoDBClient() {
  return await createDynamoClient();
}
