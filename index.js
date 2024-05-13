import express from 'express';
import mongoose from 'mongoose'; //mongoose to form a structured database 
import router from './routes/product.route.js'; //routes
const app = express()
const port = 3000

app.use(express.json());//to enable the json data input in the postman 
app.use(express.urlencoded({ extended: false }));//to enable the form data input in the postman 

mongoose.connect("mongodb://localhost:27017/Crud_Api").then(() => {
    console.log("Connected to database")
})

app.listen(port, () => {
    console.log("Server running on port 3000")
});


app.get('/', (req, res) => {
    res.send("Response from backend !!!")
});

app.use('/api/products', router)//routes to the route.js file
