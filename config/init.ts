import { sequelize } from "./database";
import { Product } from "../models/product.model";

const items = {
  name: "Xiaomi Redmi 9",
  brand: "Xiaomi",
  model: "Redmi 9",
  price: 10000,
  color: "Blue",
};

async function testDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    const instance = Product.build({});
    await instance.save();

    console.log("Instance has been saved successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  } finally {
    await sequelize.close();
  }
}

testDatabase();
