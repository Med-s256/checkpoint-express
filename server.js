const express = require('express')
const app = express()
const port = 5000
function login(req, res, next){
    let date= new Date();
    if(date.getDay()>=1 && date.getDay()<6 && date.getHours()>=9 && date.getHours()<=17){
    next();
    } else{
        res.send('data is not available now')
    }
}
app.use('/', login);
// app.get('/',(req,res)=>{
//     res.sendFile(__dirname + "/public/index.html")
// })

// app.get('/services', (req,res)=>{
//     res.sendFile(__dirname + "/public/services/services.html")
// })

// app.get('/contact', (req,res)=>{
//     res.sendFile(__dirname + "/public/contact/contact.html")
// })
// app.get('/css/style.css',(req,res)=>{
//     res.sendFile(__dirname + "/public/css/style.css")
// })
app.use(express.static(__dirname + '/public'))
app.listen(port, ()=>{
    console.log(`this server is running on : ${port}`);
})