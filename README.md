# JSON Validator

A Node.js project that provides an API for validating JSON objects against a predefined schema.

## Features

*   Validates JSON objects against a schema.
*   Provides an API endpoint for validation.
*   Returns a JSON response indicating whether the JSON is valid or not.

## Project Structure


json-validator/
├── README.md
├── package.json
├── server.js
├── routes/
│   └── validationRoutes.js
├── controllers/
│   └── validationController.js
├── middlewares/
│   └── validateSchema.js
├── utils/
│   └── responseHandler.js
├── schemas/
│   └── exampleSchema.json


## Installation

1.  Clone the repository:

    
    git clone <repository-url>
    

2.  Install dependencies:

    
    npm install
    

## Usage

1.  Start the server:

    
    npm start
    

2.  Send a POST request to `/validate` with a JSON object and a schema in the request body.

    Example request:

    
    {
      "json": {
        "name": "John Doe",
        "age": 30
      },
      "schema": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "age": {
            "type": "integer"
          }
        },
        "required": [
          "name",
          "age"
        ]
      }
    }
    

    Example response:

    
    {
      "isValid": true
    }
    

## Technologies Used

*   Node.js
*   Express
*   Ajv (Another JSON Validator)
