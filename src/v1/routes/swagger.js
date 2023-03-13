const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//Metadata info about our API
const options = {
    definition: {
        openapi: "3.0.0",
        info: { title: 'Challenge API', version: '1.0.0'},
        paths: {
            "/api/v1/users/login/{email}/{password}": {
                get: {
                    description: "User authentication by email & password.",
                    parameters: [
                        {
                          name: "email",
                          in: "path",
                          description: "User email",
                          required: true,
                          type: "string"
                        },
                        {
                            name: "password",
                            in: "path",
                            description: "User password",
                            required: true,
                            type: "string"
                          }
                      ],
                      "responses": [
                        {}
                      ]
                }
            },
            "/api/v1/users": {
                get: {
                    description: "Enlist all users.",
                    parameters: [
                        {
                          in: "header",
                          name: "auth-token",
                          description: "Authorization by Token",
                          required: true,
                          type: "string"
                        }
                      ],
                      "responses": [
                        {}
                      ]
                }
            },
            "/api/v1/users/{email}": {
                get: {
                    description: "Enlist one user",
                    parameters: [
                        {
                          in: "path",
                          name: "email",
                          description: "Email user",
                          required: true,
                          type: "string"
                        },
                        {
                            in: "header",
                            name: "auth-token",
                            description: "Authorization by Token",
                            required: true,
                            type: "string"
                        }
                      ],
                      "responses": [
                        {}
                      ]
                }
            },
            "/api/v1/users/": {
                post: {
                    description: "Create a new user",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            description: "Create a new user",
                            required: true,
                            schema:{
                                "$ref": "#definitions/User"
                            } 
                          },
                          {
                            in: "header",
                            name: "auth-token",
                            description: "Authorization by Token",
                            required: true,
                            type: "string"
                        }
                      ],
                      "responses": [
                        {}
                      ]
                }
            },
            "/api/v1/users/{email}": {
                get: {
                    description: "Enlist one user",
                    parameters: [
                        {
                          in: "path",
                          name: "email",
                          description: "Email user",
                          required: true,
                          type: "string"
                        },
                        {
                            in: "header",
                            name: "auth-token",
                            description: "Authorization by Token",
                            required: true,
                            type: "string"
                        }
                      ],
                      "responses": [
                        {}
                      ]
                }
            },
        },
        "definitions":{
            "User": {
                "properties": {
                  "name": {
                    "type": "string"
                  },
                  "englishLevel": {
                    "type": "string"
                  },
                  "knowledge": {
                    "type": "string"
                  },
                  "idRole": {
                    "type": "integer"
                  },
                  "email": {
                    "type": "string"
                  },
                  "password": {
                    "type": "string"
                  }
                }
            }
        }

    },
    apis: ["src/v1/routes/userRoutes.js"],
};

//Docs JSON Format
const swaggerSpec = swaggerJSDoc(options);
//Function to setup our docs
const swaggerDocs = (app, port) => {
    app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get("/api/v1/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
};
module.exports = { swaggerDocs };