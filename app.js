const express = require('express');
const app = express();
const nodemailer = require("nodemailer"); 
const PORT = process.env.PORT || 3000;
var mongo = require('mongodb');


app.use(express.static('public'));
app.use(express.json());

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://riddhi1998:riddhi1998@cluster0.c70ci.mongodb.net/myFirstDatabase";


app.get('/' , (req,res)=> {
    res.sendFile(__dirname + '/public/index.html' )
});

app.post('/', (req,res) => {

    let result = 0;
    MongoClient.connect(url, async function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var myobj = { 
            fname: req.body.fname,
            lname: req.body.lname,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email,
            comment: req.body
         };
       

        await dbo.collection("feedbacks").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
          });

          

          result = await  dbo.collection("feedbacks").countDocuments({});
          
          let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'riddhideshmukh1998@@gmail.com',
                pass: 'wngdilulsfcrqhol' 
               }});
       
               let mailOptions = {
                   
                   from: 'Riddhi Deshmukh <riddhideshmukh1998@gmail.com>', // sender address
                   to: req.body.email, // list of receivers
                   subject: 'Form Submission', // Subject line
                   text: `Hello ${req.body.fname}, Thank you for your feedback! -From Riddhi. You are my ${result} customer`, // plain text body
               };
               console.log("hello")
               transporter.sendMail(mailOptions, (error, info) => {
                   if (error) {
                           return console.log(error);
                   }
                   console.log('Message %s sent: %s', info.messageId, info.response);
                       res.render('index');
               });

          db.close();
      });





    console.log(req.body)

    
        
           
})

app.listen(PORT , () => {
    console.log('Server Started') 
});