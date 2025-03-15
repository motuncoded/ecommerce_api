![Axia Africa](/axia_africa.png)

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
https://api.example.com/v1
```

### Endpoints

##### User Authentication

#### Register a user
```
POST /register
```

#### Login a user

```
POST /login
```
#### Create a product

```
POST /product
```

##### Request Body

```json
{
  "title": "string",
  "description": "string",
  "due_date": "YYYY-MM-DD",
  "priority": "low | medium | high"
}
```

##### Response

```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "due_date": "YYYY-MM-DD",
  "priority": "low | medium | high",
  "status": "pending | completed",
  "created_at": "YYYY-MM-DDTHH:MM:SSZ",
  "updated_at": "YYYY-MM-DDTHH:MM:SSZ"
}
```

#### Update a Task

```
PUT /tasks/{id}
```

##### Request Body

```json
{
  "title": "string",
  "description": "string",
  "due_date": "YYYY-MM-DD",
  "priority": "low | medium | high",
  "status": "pending | completed"
}
```

##### Response

```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "due_date": "YYYY-MM-DD",
  "priority": "low | medium | high",
  "status": "pending | completed",
  "created_at": "YYYY-MM-DDTHH:MM:SSZ",
  "updated_at": "YYYY-MM-DDTHH:MM:SSZ"
}
```

#### Delete a Task

```
DELETE /tasks/{id}
```

##### Response

```json
{
  "message": "Task deleted successfully"
}
```

#### List Tasks

```
GET /tasks
```

##### Query Parameters

- `status` (optional): Filter tasks by status (`pending` or `completed`)
- `priority` (optional): Filter tasks by priority (`low`, `medium`, `high`)

##### Response

```json
[
  {
    "id": "string",
    "title": "string",
    "description": "string",
    "due_date": "YYYY-MM-DD",
    "priority": "low | medium | high",
    "status": "pending | completed",
    "created_at": "YYYY-MM-DDTHH:MM:SSZ",
    "updated_at": "YYYY-MM-DDTHH:MM:SSZ"
  }
]
```

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