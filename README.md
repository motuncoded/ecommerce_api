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
https://ecommerce-api-one-pi.vercel.app/
```

### Endpoints

#### User registration and login

```
POST /api/user/register
```

- Register a user

Register users that want to check out products. This end points provides full details for each user

```
POST /api/user/login
```

- Login a user

Login users that want to check out products. This end points provides login details for each user

#### Product catalogue with categories

##### Products

```
POST /api/product
```

- Create a product(s)

- Get all products

```
GET /api/products
```

- Get a product

```
GET /api/product/:id
```

- Update a product

```
PUT /api/product/:id
```

- Delete a product

```
DELETE /api/product/:id
```

##### Catogory

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
PORT=5000
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
