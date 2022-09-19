import { faker } from '@faker-js/faker';
// import User from '../models/User.js';
import Products from '../models/Product.js'
import Product from '../models/Product.js';
import mongoose from 'mongoose';


const TYPES_TOTAL = 15;
const USERS_TOTAL = 1000;
const PRODUCT_TOTAL = 20000;
let user_count = 0;

export default async () => {
  try {
    // await User.deleteMany();
    await Product.deleteMany();

    // // create the user
    // Array.from({ length: USERS_TOTAL }).forEach(async (_, i) => {
    //   const user = await User.create({
    //     username: faker.name.firstName() + " " + faker.name.lastName(),
    //     email: faker.internet.email(),
    //     password: "password123",
    //     gender: faker.name.gender(true).toLowerCase(),
    //     avatar: faker.image.avatar(),
    //     flirtsCount: 0,
    //     likesCount: 0,
    //     commentsCount: 0,
    //     location: {
    //       city: faker.address.city().toLowerCase(),
    //       state: faker.address.state().toLowerCase(),
    //       zipcode: faker.address.zipCode(),
    //       country: faker.address.country().toLowerCase(),
    //       coordinates: {
    //         latitude: faker.address.latitude(),
    //         longitude: faker.address.longitude()
    //       }
    //     }
    //   });
    //   console.log("current", i, faker.image.avatar())

    //   // /* Create the types */
    //   // await Array.from({ length: TYPES_TOTAL }).forEach(async () => {
    //   //   return await Rate.create({
    //   //     type: faker.name.firstName() + " " + faker.commerce.color(),
    //   //     rate: faker.commerce.price(),
    //   //     user: user._id,
    //   //   });
    //   // });
    // });

    //create the product
    Array.from({ length: PRODUCT_TOTAL }).forEach(async (_, i) => {
      const user = await Product.create({
        "image": [
          {
            "src": faker.image.fashion(640,480,true)
          },
          {
            "src": faker.image.fashion(640,480,true)
          },
          {
            "src": faker.image.fashion(640,480,true)
          },
          {
            "src": faker.image.fashion(640,480,true)
          },
          {
            "src": faker.image.fashion(640,480,true)
          }
        ],
        "title": faker.commerce.productName(),
        "price": faker.commerce.price(),
        "storeName": faker.commerce.product(),
        "seller": "6315e9a0c85bea37fd2ee448",
        "keywords": faker.commerce.productMaterial(),
        "rating": faker.random.numeric(1,{ bannedDigits: ['6','7','8','9'] }) ,
      });
      console.log("current", i, faker.image.fashion(640,480,true))

      // /* Create the types */
      // await Array.from({ length: TYPES_TOTAL }).forEach(async () => {
      //   return await Rate.create({
      //     type: faker.name.firstName() + " " + faker.commerce.color(),
      //     rate: faker.commerce.price(),
      //     user: user._id,
      //   });
      // });
    });
  } catch (error) {
    console.log("ERROR", error);
  }
};

