const express = require('express');
const app = express()
const cors = require('cors');
app.use(cors());



const Port = process.env.Port || 5000;


app.get("/", (req, res) => {

    res.send('server is running')
})

const courses = require('./data/courses.json');

app.get("/courses", (req, res) =>{
    res.send(courses);
})

app.get("/course/:id", (req, res) => {
    const id = req.params.id;
    const getSingleCourse = courses?.find(c => c.id == id);
    if(!getSingleCourse){
        res.send('NO data found!')
    }
    res.send(getSingleCourse);
})








app.listen(Port, () => {

    console.log("server is running, port:", Port)
})