require('dotenv').config();
const mongoose = require('mongoose');

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                useMongoClient: true,
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };  


var MONGODB_URI = 'mongodb://'+process.env.USER_DB+':'+process.env.PASS+'@'+process.env.HOST+':'+process.env.DB_PORT+'/'+process.env.DB;

var companyStockSchema = mongoose.Schema({      
    name: {type: String, required: true, unique: true},
    code: {type: String, required: true, unique: true}    
  })
  
const Company = mongoose.model('Company',companyStockSchema);  

function connect(){
    return new Promise((resolve,reject) => {
      try{
        mongoose.connect(MONGODB_URI,options);
      }catch(e){
        reject(new DataStoreUnknowException("connect",null,e))
      }
    })
  }

  function addCompany(response){
    return new Promise((resolve,reject) => {
      try{
        const companyCode = response.quote.symbol;
        const companyName = response.quote.companyName;
        companyExists(companyCode).then(response => {
          if (exists) reject(new DataStoreFieldValidationException(companyCode,"Company code already exists"))
          let company = new Company(
                            {
                             name: companyName,
                             code: companyCode                             
                            })
        
          company.save((error, result) => {
            if (error) reject (new DataStoreUnknowException("insert",companyCode,error))
            resolve(result);
          })
        })    
        
      }catch(e){
        reject(new DataStoreUnknowException("insert",companyCode,e));
      }
    })
  }

  // Check if the company code exists on the DB
  function companyExists(companyCode){
    return new Promise((resolve, reject)=>{
      try{      

        Company.find({code: companyCode})
            .exec((error,result) => {            
               if (error) reject(error);
               resolve(result.length > 0 ? true : false);
        })
      }catch(e){
        reject(new DataStoreFieldValidationException("company",companyCode,e));
      }
    })
  }

  function getStocks(){
      return new Promise((resolve,reject) => {
        try{
            Company.find({})
            .exec((error,result) => {
                if (error) reject(error);
                resolve(result);
            })
        }catch(e){
            reject(new DataStoreUnknowException ("GET",args,e));
        }        
      })
  }
  

  // Exception objects

function DataStoreUnknowException (method,args,error) {
    this.type = this.constructor.name;
    this.description = 'Error happening during operation: ' + method;
    this.method = method;
    this.args = args;
    this.error = error;
  }
  function DataStoreFieldValidationException(field, error) {
    this.type = this.constructor.name;
    this.description = 'Error during proccesing field: ' + field;  
    this.error = error;
  }

  module.exports = {
    connect,
    addCompany,    
    getStocks
  }