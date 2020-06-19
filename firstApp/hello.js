const express = require('express')
const app = express()
var cors = require('cors')
 
 

 //res.send('hello world');
 app.use(cors())
 var rp = require('request-promise'); 


 

    app.get('/',function(req,res){
  
         let Movie_name=req.query.s; 
    
          
           var options = {
           
             uri:'http://www.omdbapi.com/?apikey=45fc4b9f&s=' + Movie_name,

                    json: true // Automatically parses the JSON string in the response
            
            };
            // console.log(options);
            rp(options)
                .then(function(response){
                //console.log(res);
                res.send(response)
                
                })
            .catch(function(err) {
            });

    }); 


   
                
    
               
         



const port = process.env.PORT || 3000

app.listen(port , ()=> console.log(`listening in ${port}`));

    