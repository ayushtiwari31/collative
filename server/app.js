import express from "express";
import  bodyParser from 'body-parser';
import cors from 'cors'
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cors());

app.post('/', (req, res) => {

    const formData = req.body; // This contains the form data sent from the client
    console.log(formData); // Log the form data to the console

    // for (let [key, value] of Object.entries(formData)) {
    //     console.log(`${key}: ${value}`);
    // }

    console.log("form submitted successfully")

    //code for sending data to cloud


    res.status(200).send('Form data received successfully!');
});



app.post('/subscribe', (req, res) => {

    const formData = req.body; // This contains the form data sent from the client
    console.log(formData); // Log the form data to the console

    // for (let [key, value] of Object.entries(formData)) {
    //     console.log(`${key}: ${value}`);
    // }

    console.log("form submitted successfully")

    //code for sending data to cloud


    res.status(200).send('Form data received successfully!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});