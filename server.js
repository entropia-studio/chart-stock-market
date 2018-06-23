const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

require('dotenv').config();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/chart-stock-market'));

//Connect to DB
// setup our datastore
var datastore = require("./datastore");
datastore.connect();


app.get('/api/stocks',(req,res) => {
    //console.log("USER",process.env.PASS);
    try{
        datastore.getStocks()
            .then(response => {
                console.log(response);
                res.json(response);
            })
    }catch(e){
        handleError(e,res);
    }    
})


app.post('/api/company/add',(request,response) => {
    try{
        let urlStocksApi = 'https://api.iextrading.com/1.0/stock/'+ request.body.companyCode +'/batch?types=quote';
        app.get(urlStocksApi,(req,res) => {
            if (res.statusCode !== 404){
                datastore.addCompany(res)
                    .then(response => {
                        console.log(response);
                    });    
            }            
        })        
    }catch(e){
        handleError(e,res);
    }
})

/*
app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/chart-stock-market/index.html'));
});
*/


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

function handleError(err, response) {  
    response.status(500);  
    response.send(
      "<html><head><title>Internal Server Error!</title></head><body><pre>"
      + JSON.stringify(err, null, 2) + "</pre></body></pre>"
    );
  }