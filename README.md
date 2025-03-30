# E-commerce Platform

### <i>This handles the backend flow for E-commerce application</i>

This e-commerce platform allow users to browse products,
add them to a cart, and make purchases. Admin users are allow to manage product
listings, view orders, and update order statuses.

## 🚀 Features

➢ **User registration and login**
➢ **Product catalogue with categories**
➢ **Shopping cart**
➢ **Admin specific actions**

## 📚 API Documentation

### Base URL

```
https://ecommerce-api-one-pi.vercel.app
```

### Endpoints

#### User registration and login

| Endpoint            | Description                                                      | Method |
|---------------------|------------------------------------------------------------------|--------|
| /api/user/register  | Register users that want to check out products.                  | POST   |
| /api/user/login     | Login users that want to check out products.                     | POST   |
| /api/user/logout    | Users are allowed to logout.                                     | POST   |


#### Product catalogue with categories

##### Products


| Endpoint            | Description                                                      | Method |
|---------------------|------------------------------------------------------------------|--------|
| /api/product        | Creates a new product for user managed by the admin.             | POST   |
| /api/products       | Retrieves a list of all products.                                | GET    |
| /api/product/:id    | Retrieves a product.                                             | GET    |
| /api/product/:id    | Update a product.                                                | PUT    |
| /api/product/:id    | Delete a product.                                                | DELETE |

##### Category

| Endpoint            | Description                                                      | Method |
|---------------------|------------------------------------------------------------------|--------|
| /api/category       | Creates a category for product.                                  | POST   |
| /api/categories     | Retrieves a list of all categories.                              | GET    |
| /api/category/:id   | Retrieves a category.                                            | GET    |
| /api/category/:id   | Update a category.                                               | PUT    |
| /api/category/:id   | Delete a category.                                               | DELETE |


#### Shopping cart

| Endpoint            | Description                                                      | Method |
|---------------------|------------------------------------------------------------------|--------|
| /api/add            | Create an item in the cart. This initiates the cart with items created by the user. | POST   |
| /api/remove         | Remove an item in the cart. This initiates the removal of an item in the cart. | DELETE |
| /api/carts          | View cart. This shows all items present in the cart.             | GET    |
| /api/clear          | Clear cart. This clears all items present in the cart.           | DELETE |
| /api/update         | Update the cart. This updates the items present in the cart.     | PUT    |




#### Admin spcific actions

This applies to users who has the admin role to manage product
listings, view orders, and update order statuses.

##### Product Management



| Endpoint            | Description                                                      | Method |
|---------------------|------------------------------------------------------------------|--------|
| /api/product        | Creates a new product for user managed by the admin.             | POST   |
| /api/products       | Retrieves a list of all products.                                | GET    |
| /api/product/:id    | Retrieves a product.                                             | GET    |
| /api/product/:id    | Update a product.                                                | PUT    |
| /api/product/:id    | Delete a product.                                                | DELETE |


##### Category Management


##### Category

| Endpoint            | Description                                                      | Method |
|---------------------|------------------------------------------------------------------|--------|
| /api/category       | Creates a category for product.                                  | POST   |
| /api/categories     | Retrieves a list of all categories.                              | GET    |
| /api/category/:id   | Retrieves a category.                                            | GET    |
| /api/category/:id   | Update a category.                                               | PUT    |
| /api/category/:id   | Delete a category.                                               | DELETE |

##### Order Management

| Endpoint            | Description                                                      | Method |
|---------------------|------------------------------------------------------------------|--------|                                 
| /api/orders               | Retrieves a list of all orders.                                  | GET    |
| /api/order/:id/status     | Updates the status of an order.                                  | PUT    |
| /api/order/:id            | Deletes an order.                                                | DELETE |


## 🔧 Tech Stack

Backend: Node.js (Express.js)
Database: PostgreSQL
Authentication: JWT
Security: CORS
API Testing: Postman

## 🛠️ Setup & Installation

1. Clone the repository:

```sh
git clone https://github.com/motuncoded/ecommerce_api.git
```

2. Navigate to the project directory:

```sh
cd ecommerce_api
```

3. Install dependencies:

```sh
npm install
```

4. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add necessary environment variables (e.g., database connection strings).

```sh
PORT=5002
MONGODB=your_mongodb_url
JWT_SECRET=your_secret_key
```

5. Start the server:

```sh
npm start
```

## 🧪 Running Tests

Execute the following command to run tests:

```sh
npm test
```

## 🤝 Contributing

Contributions are welcome! Please create an issue or submit a pull request with your improvements.

## 📃 License

This project is licensed under the MIT License.
