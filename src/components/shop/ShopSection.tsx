"use client";
import React, { useState, useEffect } from "react";
import ShopSidebarCategories from "./ShopSidebarCategories";
import FlashBanner from "../elements/product/FlashBanner";
import GridIcon from "@/svg/GridIcon";
import ListIcon from "@/svg/ListIcon";
import Pagination from "../elements/product/Pagination";
import axios from "axios";
import GridViewProduct from "./GridViewProduct";
import ListViewProduct from "./ListViewProduct";
import useGlobalContext from "@/hooks/use-context";
import ProductModal from "./ProductModal";
import PaginationTwo from "../elements/product/PaginationTwo";
import ShopPreloader from "@/preloaders/ShopPreloader";
// import Sudoku from "./SudoKu";
const ShopSection = () => {
  const {
    products, 
    setProducts,
    setotalPages,
    totalPages,
    setcurrentPage,
    currentPage,
    limit,
    page,
    setPage,
    prodcutLoadding,
    setProdcutLoadding,
  } = useGlobalContext();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChange = (e:any) => {
    setSearchValue(e.target.value);
  }

  const handleInputKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleInputChange(e);
    }
  }

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setProdcutLoadding(true);
    const url = '/api/shop';

    axios.get(url, {
      params: {
        page,
        limit,
        search: searchValue
      }
    })
      .then((res) => {
        setProducts(res.data.products);
        setotalPages(res.data.totalPages);
        setcurrentPage(res.data.currentPage);
        setProdcutLoadding(false);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    setProdcutLoadding(true);
    const url = '/api/shop';
    axios.get(url, {
      params: {
        page,
        limit,
      }
    }).then((res) => {
      setProducts(res.data.products);
      setotalPages(res.data.totalPages);
      setcurrentPage(res.data.currentPage);
      setProdcutLoadding(false);
    }).catch((e) => console.log(e));

  }, [
    page,
    limit,
    setProducts,
    setotalPages,
    setcurrentPage,
    setProdcutLoadding,
  ]);

  // useEffect(() => {
  //   setProdcutLoadding(true);
  //   async function fetchData() {
  //     try {
  //       const toAdd = [
  //         {
  //         _id: ("64c9e4632383b6b5dd5b16ae"),
  //         categoryName: 'Fresh Fruits',
  //         oldPrice: 12,
  //         price: 10,
  //         productDetails: 'Experience the captivating aroma and delicate texture of Basmati Rice, a treasured grain that hails from the lush fields of India. Renowned for its long, slender grains and distinctive fragrance, our Basmati Rice',
  //         productImages: [
  //           'https://i.ibb.co/qFhJR0F/New-Project-2.png',
  //           'https://i.ibb.co/Fqk0HjY/b-2.png',
  //           'https://i.ibb.co/g4rFhdm/b-3.png',
  //           'https://i.ibb.co/hyP0Y1Y/b-4.png'
  //         ],
  //         productName: 'Organic Banana',
  //         productQuantity: 145,
  //         subcategoryName: 'Stone Fruits',
  //         img: 'https://i.ibb.co/dt20McC/product-03.png',
  //         date: '08/02/23 11:06 am',
  //         offer: true,
  //         offerPersent: 14,
  //         rettings: [ 2, 4, 4 ],
  //         productStatus: 'new',
  //         __v: 0
  //       },
  //       {
  //         _id: ("64c78ae33fe946438df057f8"),
  //         categoryName: 'Staple Foods',
  //         oldPrice: 18,
  //         price: 16,
  //         productDetails: 'Discover the nutritional power and vibrant appeal of Red Rice, a wholesome grain that stands out with its rich red hue and robust flavor. Harvested with care, our Red Rice offers a delightful nutty taste and a range of health benefits, making it a versatile and eye-catching addition to your culinary repertoire.',
  //         productImages: [
  //           'https://i.ibb.co/ZGJVCmN/product-01.png',
  //           'https://i.ibb.co/8MnH78Z/labu-1.png',
  //           'https://i.ibb.co/Rv5691k/labu-2.png',
  //           'https://i.ibb.co/4frn07K/labu-3.png',
  //           'https://i.ibb.co/VvdjZQ1/labu-4.png',
  //           'https://i.ibb.co/khD0hZC/labu-5.png'
  //         ],
  //         productName: 'Kach Kogozi Labu',
  //         productQuantity: 59,
  //         subcategoryName: 'rice',
  //         img: 'https://i.ibb.co/ZGJVCmN/product-01.png',
  //         date: '07/31/23 04:20 pm',
  //         offer: true,
  //         offerPersent: 10,
  //         rettings: [],
  //         productStatus: 'new',
  //         __v: 0,
  //         retting: 0
  //       },
  //       {
  //         _id: ("64c78a873fe946438df057f5"),
  //         categoryName: 'Staple Foods',
  //         oldPrice: 20,
  //         price: 17,
  //         productDetails: 'Experience the captivating aroma and delicate texture of Basmati Rice, a treasured grain that hails from the lush fields of India. Renowned for its long, slender grains and distinctive fragrance, our Basmati Rice is a culinary gem that adds an exquisite touch to your meals, making it the preferred choice for rice connoisseurs worldwide.',
  //         productImages: [
  //           'https://i.ibb.co/6RrnXjC/product-02.png',
  //           'https://i.ibb.co/g4kq57s/brokoli-2.png',
  //           'https://i.ibb.co/rp77zSz/brokoli-4.png',
  //           'https://i.ibb.co/ck9Fbfg/brokoli-5.png'
  //         ],
  //         productName: 'Broccoli standing',
  //         productQuantity: 50,
  //         subcategoryName: 'rice',
  //         img: 'https://i.ibb.co/6RrnXjC/product-02.png',
  //         date: '07/31/23 04:17 pm',
  //         offer: true,
  //         offerPersent: 14,
  //         rettings: [],
  //         productStatus: 'new',
  //         __v: 0
  //       },{
  //         _id: ("64c789cb3fe946438df057f1"),
  //         categoryName: 'Fruit & Vegetables',
  //         oldPrice: 22,
  //         price: 19,
  //         productDetails: 'Embrace the warm and aromatic essence of Ground Cinnamon, a beloved spice that adds a touch of cozy indulgence to your culinary creations. Carefully ground from premium-quality cinnamon sticks, our ground cinnamon offers a distinctive flavor profile that elevates both sweet and savory dishes, making it a cherished pantry essential for any kitchen.',
  //         productImages: [
  //           'https://i.ibb.co/RCxXycd/product-04.png',
  //           'https://i.ibb.co/Z8XdS8p/onion-1.png',
  //           'https://i.ibb.co/q03S3jL/onion-2.png',
  //           'https://i.ibb.co/1zSGKyX/onion-3.png'
  //         ],
  //         productName: 'Red Onion Large Size',
  //         productQuantity: 4,
  //         subcategoryName: 'Citrus Fruits',
  //         img: 'https://i.ibb.co/RCxXycd/product-04.png',
  //         date: '07/31/23 04:15 pm',
  //         offer: true,
  //         offerPersent: 10,
  //         rettings: [],
  //         productStatus: 'new',
  //         __v: 0
  //       },{
  //         _id: ("64c7896e3fe946438df057ee"),
  //         categoryName: 'Grocery & Staples',
  //         oldPrice: 10,
  //         price: 7,
  //         productDetails: 'Enhance your culinary creations with the exquisite taste and texture of Flaky Sea Salt, a premium salt that elevates the flavors of your dishes to new heights. Meticulously crafted and harvested from the purest seawater, our flaky sea salt offers a delicate and delightful crunch that adds a finishing touch of sophistication to any recipe',
  //         productImages: [
  //           'https://i.ibb.co/0fmgS0s/product-05.png',
  //           'https://i.ibb.co/CQwzrwn/prome-1.png',
  //           'https://i.ibb.co/jMQhyGW/prome-2.png',
  //           'https://i.ibb.co/HB91m1M/prome-3.png'
  //         ],
  //         productName: 'Pomegranate Kg',
  //         productQuantity: 96,
  //         subcategoryName: 'Salt and Sugar',
  //         img: 'https://i.ibb.co/0fmgS0s/product-05.png',
  //         date: '07/31/23 04:14 pm',
  //         offer: true,
  //         offerPersent: 22,
  //         rettings: [],
  //         productStatus: 'new',
  //         __v: 0
  //       },{
  //         _id: ("64c787ff3fe946438df057e8"),
  //         categoryName: 'Grocery & Staples',
  //         oldPrice: 24,
  //         price: 21,
  //         productDetails: 'Experience the allure of classic Italian cuisine with our Spaghetti Pasta, a timeless and beloved pasta shape that embodies the essence of Italian comfort food. Crafted with precision and passion, our spaghetti pasta offers the perfect balance of texture and taste, making it a versatile and delightful choice for a wide range of pasta dishes.',
  //         productImages: [
  //           'https://i.ibb.co/bP75XXR/product-15.png',
  //           'https://i.ibb.co/nkB9PqX/razma-1.png',
  //           'https://i.ibb.co/WpPD2M8/razma-2.png'
  //         ],
  //         productName: 'Razma Chawal',
  //         productQuantity: 74,
  //         subcategoryName: 'Rice',
  //         img: 'https://i.ibb.co/C220kBp/product-15.png',
  //         date: '07/31/23 04:07 pm',
  //         offer: true,
  //         offerPersent: 10,
  //         rettings: [],
  //         productStatus: 'new',
  //         __v: 0
  //       },{
  //         _id: ("64c787693fe946438df057e5"),
  //         categoryName: 'Organic Food',
  //         oldPrice: 28,
  //         price: 25,
  //         productDetails: 'Delight in the traditional Italian pasta experience with our Fettuccine Noodles, a classic and versatile choice that embodies the essence of authentic Italian cuisine. Crafted with care and expertise, our fettuccine noodles offer the perfect balance of texture and flavor, making them an ideal canvas for a variety of delicious pasta dishes.',
  //         productImages: [
  //           'https://i.ibb.co/L8TCD6w/product-07.png',
  //           'https://i.ibb.co/yy4kGWz/orange-1.png',
  //           'https://i.ibb.co/WpfkGG6/orange-2.png',
  //           'https://i.ibb.co/FwW7kg5/orange-3.png',
  //           'https://i.ibb.co/bgDXcMZ/orange-4.png'
  //         ],
  //         productName: 'Toronja Rosada Organica',
  //         productQuantity: 81,
  //         subcategoryName: 'Organic Stoneless Fruits',
  //         img: 'https://i.ibb.co/L8TCD6w/product-07.png',
  //         date: '07/31/23 04:04 pm',
  //         offer: false,
  //         offerPersent: 0,
  //         rettings: [ 5, 5 ],
  //         productStatus: 'new',
  //         __v: 0
  //       },{
  //         _id: ("64c786f53fe946438df057e2"),
  //         categoryName: 'Fruit & Vegetables',
  //         oldPrice: 35,
  //         price: 30,
  //         productDetails: 'Experience the versatility and quality of our Premium All-Purpose Flour, a kitchen essential that meets the highest standards of baking and cooking. Meticulously crafted from the finest wheat, our all-purpose flour offers exceptional performance, ensuring your culinary creations turn out perfectly every time.',
  //         productImages: [
  //           'https://i.ibb.co/tCfk53s/product-08.png',
  //           'https://i.ibb.co/7ysWKRh/product-09.png',
  //           'https://i.ibb.co/RCxXycd/product-04.png',
  //           'https://i.ibb.co/0fmgS0s/product-05.png'
  //         ],
  //         productName: 'Cauliflower Kg',
  //         productQuantity: 90,
  //         subcategoryName: 'Tropical Fruits',
  //         img: 'https://i.ibb.co/tCfk53s/product-08.png',
  //         date: '07/31/23 04:03 pm',
  //         offer: false,
  //         offerPersent: 0,
  //         rettings: [],
  //         productStatus: 'new',
  //         __v: 0
  //       },{
  //         _id: ("64c786753fe946438df057df"),
  //         categoryName: 'Grocery & Staples',
  //         oldPrice: 30,
  //         price: 25,
  //         productDetails: 'Embrace the essence of Mediterranean goodness with our Pure Olive Oil, a versatile and nutritious oil that has been cherished for centuries. Extracted from premium-quality olives using a cold-press process, our olive oil offers a pristine taste and natural goodness, making it an essential ingredient in your kitchen and a staple in a healthy lifestyle.',
  //         productImages: [
  //           'https://i.ibb.co/7ysWKRh/product-09.png',
  //           'https://i.ibb.co/tCfk53s/product-08.png',
  //           'https://i.ibb.co/0fmgS0s/product-05.png',
  //           'https://i.ibb.co/vPDpGSm/product-11.png'
  //         ],
  //         productName: 'Ergon Radish Bunch',
  //         productQuantity: 64,
  //         subcategoryName: 'Cooking Oils',
  //         img: 'https://i.ibb.co/7ysWKRh/product-09.png',
  //         date: '07/31/23 04:00 pm',
  //         offer: false,
  //         offerPersent: 0,
  //         rettings: [ 5 ],
  //         productStatus: 'new',
  //         __v: 0
  //       },{
  //         _id: ("64c786003fe946438df057db"),
  //         categoryName: 'Fruit & Vegetables',
  //         oldPrice: 24,
  //         price: 20,
  //         productDetails: "Introduce your little one to the delightful taste of summer with our Organic Melon Baby Food Puree, a gentle and nourishing option designed especially for growing infants. Made from certified organic melons, this puree offers a natural and wholesome way to introduce the delicious flavors of melons to your baby's developing palate.",
  //         productImages: [
  //           'https://i.ibb.co/bsBZnPn/product-10.png',
  //           'https://i.ibb.co/vPDpGSm/product-11.png',
  //           'https://i.ibb.co/fkYyHSF/product-12.png',
  //           'https://i.ibb.co/0yyjtWD/product-13.png'
  //         ],
  //         productName: 'Milk Depositphotos',
  //         productQuantity: 57,
  //         subcategoryName: 'Tropical Fruits',
  //         img: 'https://i.ibb.co/bsBZnPn/product-10.png',
  //         date: '07/31/23 03:59 pm',
  //         offer: true,
  //         offerPersent: 15,
  //         rettings: [ 5 ],
  //         productStatus: 'new',
  //         __v: 0
  //       },{
  //         _id: "64c7856b3fe946438df057d8",
  //         categoryName: 'Organic Food',
  //         oldPrice: 25,
  //         price: 20,
  //         productDetails: 'Immerse yourself in the luscious essence of summer with our Organic Cantaloupe Chunks, a naturally sweet and juicy delight that captures the full flavor of ripe cantaloupes. Sourced from certified organic farms, these cantaloupe chunks offer a wholesome and refreshing treat that is both satisfying and nutritious.',
  //         productImages: [
  //           'https://i.ibb.co/vPDpGSm/product-11.png',
  //           'https://i.ibb.co/fkYyHSF/product-12.png',
  //           'https://i.ibb.co/0yyjtWD/product-13.png',
  //           'https://i.ibb.co/vZnTC5Y/product-14.png'
  //         ],
  //         productName: 'Kosher Sour Cream',
  //         productQuantity: 59,
  //         subcategoryName: 'Organic Stoneless Fruits',
  //         img: 'https://i.ibb.co/vPDpGSm/product-11.png',
  //         date: '07/31/23 03:56 pm',
  //         offer: false,
  //         offerPersent: 0,
  //         rettings: [],
  //         productStatus: 'new',
  //         __v: 0
  //       },{
  //         _id: ("64c784db3fe946438df057d5"),
  //         categoryName: 'Organic Food',
  //         oldPrice: 30,
  //         price: 21,
  //         productDetails: 'Savor the pure essence of summer with our Organic Honeydew Melon Wedges, a refreshing and naturally sweet delight that captures the juicy goodness of ripe honeydew melons. Harvested from organic farms, these melon wedges offer a guilt-free indulgence, packed with vitamins and hydration to keep you refreshed on sunny days',
  //         productImages: [
  //           'https://i.ibb.co/fkYyHSF/product-12.png',
  //           'https://i.ibb.co/0yyjtWD/product-13.png',
  //           'https://i.ibb.co/bsBZnPn/product-10.png',
  //           'https://i.ibb.co/vZnTC5Y/product-14.png'
  //         ],
  //         productName: 'Chocolate Milk Splash',
  //         productQuantity: 94,
  //         subcategoryName: 'Organic Melons',
  //         img: 'https://i.ibb.co/fkYyHSF/product-12.png',
  //         date: '07/31/23 03:54 pm',
  //         offer: false,
  //         offerPersent: 0,
  //         rettings: [],
  //         productStatus: 'new',
  //         __v: 0
  //       },{
  //         _id: ("64c784703fe946438df057d1"),
  //         categoryName: 'Fruit & Vegetables',
  //         oldPrice: 20,
  //         price: 17,
  //         productDetails: 'Experience a delightful fusion of flavors with our Strawberry Shortcake Cookie Sandwiches, a scrumptious treat that combines the sweetness of strawberries with the buttery goodness of shortbread cookies. Indulge in these delectable delights that are sure to satisfy your dessert cravings and leave you craving more.',
  //         productImages: [
  //           'https://i.ibb.co/0yyjtWD/product-13.png',
  //           'https://i.ibb.co/fkYyHSF/product-12.png',
  //           'https://i.ibb.co/vPDpGSm/product-11.png',
  //           'https://i.ibb.co/7ysWKRh/product-09.png'
  //         ],
  //         productName: 'Chocolate milk',
  //         productQuantity: 93,
  //         subcategoryName: 'Tropical Fruits',
  //         img: 'https://i.ibb.co/0yyjtWD/product-13.png',
  //         date: '07/31/23 03:52 pm',
  //         offer: true,
  //         offerPersent: 12,
  //         rettings: [ 4, 5 ],
  //         productStatus: 'new',
  //         __v: 0
  //       },{
  //         _id: ("64c7840b3fe946438df057ce"),
  //         categoryName: 'Biscuits & Snacks',
  //         oldPrice: 23,
  //         price: 17,
  //         productDetails: 'Indulge in the timeless delight of our Classic Vanilla Cream Sandwich Biscuits, a delightful combination of buttery biscuits and luscious vanilla cream filling. Crafted with the finest ingredients, these biscuits are a nostalgic treat that will evoke cherished memories while satisfying your taste buds with every bite',
  //         productImages: [
  //           'https://i.ibb.co/vZnTC5Y/product-14.png',
  //           'https://i.ibb.co/RCxXycd/product-04.png',
  //           'https://i.ibb.co/tCfk53s/product-08.png',
  //           'https://i.ibb.co/7ysWKRh/product-09.png'
  //         ],
  //         productName: 'shoping basket',
  //         productQuantity: 91,
  //         subcategoryName: 'Sandwich Biscuits',
  //         img: 'https://i.ibb.co/vZnTC5Y/product-14.png',
  //         date: '07/31/23 03:50 pm',
  //         offer: false,
  //         offerPersent: 0,
  //         rettings: [],
  //         productStatus: 'new',
  //         __v: 0
  //       },{
  //         _id: ("65def92e55f00bd7714e1956"),
  //         categoryName: 'Grocery & Staples',
  //         oldPrice: 0,
  //         price: 25,
  //         productDetails: 'Indulge in the rich and bold flavor of our Artisan Cold Brew Coffee Concentrate. Made from carefully selected coffee beans, this concentrate is cold-brewed to perfection, resulting in a smooth and full-bodied brew with low acidity. Each bottle contains 32 ounces of concentrate, yielding up to 8 servings when diluted with water or milk. Enjoy it over ice or mixed with your favorite creamer for a refreshing pick-me-up',
  //         productImages: [
  //           'https://i.ibb.co/YLBP2vM/chphy-l-1.png',
  //           'https://i.ibb.co/Yy8rhWF/chphy-l-2.png'
  //         ],
  //         productName: 'Artisan Cold Brew Coffee Concentrate',
  //         productQuantity: 1420,
  //         subcategoryName: 'Salt and Sugar',
  //         img: 'https://i.ibb.co/PrDgh74/cophy-1.png',
  //         date: '02/28/24 03:12 pm',
  //         offer: false,
  //         offerPersent: 0,
  //         rettings: [],
  //         productStatus: 'new',
  //         __v: 0
  //       },{
  //         _id: ("65def3e6e7d8974fa9d67488"),
  //         categoryName: 'Staple Foods',
  //         oldPrice: 0,
  //         price: 12,
  //         productDetails: 'Made of high-quality ceramic material. Typically holds around 12 ounces of liquid, suitable for a standard cup of coffee,Features a classic cylindrical shape with a comfortable handle for easy gripping.',
  //         productImages: [
  //           'https://i.ibb.co/mqQ33qb/cup-1.png',
  //           'https://i.ibb.co/c3VDrHX/cup-2.png',
  //           'https://i.ibb.co/Kj5WxK7/cup-3.png',
  //           'https://i.ibb.co/g7yTNkZ/cup-4.png'
  //         ],
  //         productName: 'Ceramic Coffee Mug',
  //         productQuantity: 700,
  //         subcategoryName: 'rice',
  //         img: 'https://i.ibb.co/hXHCSTY/cup-1.png',
  //         date: '02/28/24 02:49 pm',
  //         offer: false,
  //         offerPersent: 0,
  //         rettings: [],
  //         productStatus: 'new',
  //         __v: 0
  //       },{
  //         _id: ("65dedd18c3dbc61c052c9b3b"),
  //         categoryName: 'Staple Foods',
  //         oldPrice: 0,
  //         price: 9,
  //         productDetails: 'Thinly sliced potatoes that are deep-fried or baked until crispy. Original, Salt & Vinegar, Sour Cream & Onion, Barbecue, Jalapeno, Cheddar Cheese, BBQ Ranch, Salt & Pepper, etc .Triangular-shaped chips made from corn or flour tortillas, fried or baked until crispy',
  //         productImages: [
  //           'https://i.ibb.co/5vP7P9Y/chips-d-3.png',
  //           'https://i.ibb.co/r7NdFgZ/chips-d-2.png',
  //           'https://i.ibb.co/jr47qcM/chips-d-1.png'
  //         ],
  //         productName: 'Triangular shaped chips',
  //         productQuantity: 500,
  //         subcategoryName: 'rice',
  //         img: 'https://i.ibb.co/frxhbyk/chips-1.png',
  //         date: '02/28/24 01:12 pm',
  //         offer: false,
  //         offerPersent: 0,
  //         rettings: [],
  //         productStatus: 'new',
  //         __v: 0
  //       },{
  //         _id: ("65dedd18c3dbc61c063b6a7a"),
  //         categoryName: 'Fresh Fruits',
  //         oldPrice: 0,
  //         price: 3,
  //         productDetails: 'An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are ... The skin of ripe apples is generally red, yellow, green, pink, or russetted, though many bi- or tri-colored cultivars may be found.',
  //         productImages: [
  //           'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/Apples.jpg',
  //           'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/573/apple-2.png',
  //           'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/574/apple.png',
  //           'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/736/apple-2.png'
  //         ],
  //         productName: 'Fresh Apples',
  //         productQuantity: 1000,
  //         subcategoryName: 'fruit',
  //         img: 'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/Apples.jpg',
  //         date: '03/28/24 02:24 pm',
  //         offer: false,
  //         offerPersent: 0,
  //         rettings: [],
  //         productStatus: 'new',
  //         __v: 0
  //       }
  //     ];
  //       setProdcutLoadding(false);
  //       const url = '/api/shop';
  //     console.log(toAdd);
  //     const promises = toAdd.map(item => axios.post(url, {
  //       ...item
  //     }));
  //     await Promise.all(promises);
  //     const response = await axios.get(
  //       `${process.env.BASE_URL}product/${apiEndPoint}`
  //     );
  //     setProducts(response.data);
  //     setProdcutLoadding(false);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setProdcutLoadding(false);
  //     }
  //   }

  //   fetchData();
  // }, []);

  return (
    <>
      <section className="bd-shop__area pt-55 pb-85">
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-xl-4 col-lg-4">
              <div className="bd-sidebar__widget-warpper mb-60">
                <div className="bd-product__filters">
                  <ShopSidebarCategories />
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-8 col-lg-8">
              <div className="row">
                <div className="col-xl-6">
                  <div className="bd-top__filter-search p-relative mb-30">
                    <form className="bd-top__filter-input" action="#">
                      <input
                        type="text"
                        placeholder="Search keyword..."
                        value={searchValue}
                        onKeyDown={handleInputKeyDown}
                        onChange={handleSearchInputChange}
                      />
                      <button>
                        <i className="fa-regular fa-magnifying-glass" onClick={handleInputChange}></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-xl-6" >
                  <div className="bd-filter__tab-inner mb-30" style={{
                        height: '60px'
                      }}>
                    <div className="bd-top__filter">
                      <div className="bd-Product__tab pl-5">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="home-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#home"
                              type="button"
                              role="tab"
                              aria-controls="home"
                              aria-selected="true"
                            >
                              <GridIcon />
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="shop-filter-bar"
                              data-bs-toggle="tab"
                              data-bs-target="#profile"
                              type="button"
                              role="tab"
                              aria-controls="profile"
                              aria-selected="false"
                            >
                              <ListIcon />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {!prodcutLoadding ?  <div className="row">
                <div className="col-xl-12">
                  <div className="bd-shop__wrapper">
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div className="bd-trending__item-wrapper">
                          <div className="row">
                            <GridViewProduct
                              products={products}
                              limit={limit}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="shop-filter-bar"
                      >
                        <div className="row">
                          <div className="col-xxl-12">
                            <ListViewProduct
                              products={products}
                              limit={limit}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> : <ShopPreloader end={7} />}

              {products?.length >= limit ? (
                <div className="row justify-content-center">
                  <div className="col-xxl-12">
                    <Pagination
                      totalPages={totalPages}
                      currentPage={currentPage}
                      setPage={setPage}
                      Pagination_space="d-flex justify-content-center mt-40  mb-45"
                    />
                  </div>
                </div>
              ) : (
                <>
                   <div className="row justify-content-center">
                  <div className="col-xxl-12">
                    <PaginationTwo
                      totalPages={1}
                      currentPage={1}
                      setPage={setPage}
                      Pagination_space="d-flex justify-content-center mt-40  mb-45"
                    />
                  </div>
                </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <ProductModal />
    </>
  );
};

export default ShopSection;
