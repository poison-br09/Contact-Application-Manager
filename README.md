# Contact Application Manager

**Contact Application Manager** is a backend project that allows users to register, create, edit, and delete contacts. The app is built using **Express** for the backend server and **MongoDB** as the database for storing user and contact data.

## Features

- **User Authentication**: Register and log in securely using JWT.
- **Contact Management**: Create, view, edit, and delete contacts.
- **MongoDB Integration**: All user and contact data is stored in a MongoDB database.

## Tech Stack

- **Express.js**: Backend framework for building RESTful APIs.
- **MongoDB**: NoSQL database to store user and contact data.
- **Node.js**: Runtime environment to run JavaScript on the backend.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/poison-br09/Contact-Application-Manager.git
   cd contact-application-manager
   ```

2. Install the required dependencies:
   `npm install`

3. Set up the environment variables by creating a _.env_ file in the root directory:

4. Run the application
   `npm start`

The API should now be running at http://localhost:5001.

## API Endpoints

```
**User Registration**: POST /api/register
**User Login**: POST /api/auth/login
**Create Contact**: POST /api/contacts
**Get All Contacts**: GET /api/contacts
**Get Single Contact**: GET /api/contacts/:id
**Edit Contact**: PUT /api/contacts/:id
**Delete Contact**: DELETE /api/contacts/:id
```

## Folder Structure

The project structure is as follows:

```
.
├── model
│ └── user.model.js # MongoDB user model
│ └── contact.model.js # MongoDB contact model
├── routes
│ ├── user.routes.js # Routes for authentication
│ └── contact.routes.js # Routes for contact management
├── middleware
│ ├── errorHandler.middleware.js
│ └── validateTokenHandler.middleware.js
├── utils
│ └── dbConnect.utils.js # MongoDB connection utility
├── constant.js # Contains error code
└── server.js # Main Express server file
```
