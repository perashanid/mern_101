Product Management with MongoDB and Custom Authentication

This is a dynamic web application that allows users to manage a product catalog. The application provides functionality to add, remove, and edit products, including the ability to modify product prices. It features custom authentication using JWT tokens and uses MongoDB as the backend database for storing product information.

Features:

Product Management: Users can add, remove, and update product details, including product name, description, and price.

Custom Authentication: Secure authentication with JWT (JSON Web Tokens). Users need to sign up, log in, and can perform actions only if authenticated.

MongoDB Backend: Data is stored in a MongoDB database, making the application scalable and flexible for adding new product attributes.

RESTful API: The backend provides a set of API endpoints to manage products, using Express.js for routing.

User Authentication: Users can register, log in, and perform CRUD (Create, Read, Update, Delete) operations based on their authentication status.

Tech Stack:

Frontend: HTML, CSS, JavaScript (with front-end framework like React if needed)

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JSON Web Tokens (JWT), bcryptjs for password hashing

Environment Configuration: dotenv for environment variables

Additional Features: Error handling, validation, authentication middleware

### Setup .env file

```shell
MONGO_URI=your_mongo_uri
PORT=5000
```

### Run this app locally

```shell
npm run build
```

### Start the app

```shell
npm run start
```

### I'll see you in the next one! 🚀
