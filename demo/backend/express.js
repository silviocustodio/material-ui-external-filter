
const express = require('express');
const app = express();
const http = require('http')

app.set('port', process.env.PORT || 8080);
    const mysql = require('mysql');

    //Configuração MySQL
    const connection2 = mysql.createConnection({
        host: 'localhost',
        user: 'root',
       
        password: '',
        port: '',
        database: 'wint'
        
    },'request');
    
    
    connection2.connect(function(err){
        if(err){
            console.log("ERROR!!! \n"+err);
            throw err;
            
        }
        else
        console.log('YOU ARE CONNECTED IN THE DB BY EXPRESS!!!');
    });
    
    app.get('/otimizacao_rank', (req, res) =>
    
    
    connection2.query('SELECT * FROM rank_param', function(err, results) {
        if (err) throw err
        
        var a = {"b":results}
        
        return res.json(results)
        console.log(results)
        
    }))
    


http.createServer(app).listen(app.get('port'),
  function(){
    console.log("Express server listening on port " + app.get('port'));
});
    