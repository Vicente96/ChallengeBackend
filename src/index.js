const express = require("express"); 
const {connectToDb} = require("../src/database/conncetion");
const v1UserRouter = require("./v1/routes/userRoutes");
const app = express(); 
const { swaggerDocs: V1SwaggerDocs} = require ("./v1/routes/swagger");
const PORT = process.env.PORT || 3000; 

app.use(express.json());
app.use("/api/v1/users", v1UserRouter);

app.listen(PORT, async () => { 
    console.log(`API is listening on port ${PORT}`);
    V1SwaggerDocs(app, PORT);
    await connectToDb(); //C:\Users\Vicente\Documents\Challenge\ChallengeBackend\src\index.js
});