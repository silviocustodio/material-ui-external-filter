
const express = require('express');
const app = express();
const http = require('http')

app.set('port', process.env.PORT || 8080);
    const mysql = require('mysql');
    
    //Configuração MySQL
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        //password: 'DeshTec3_0',
        password: '',
        port: '3306',
        database: 'wint'
        // user: 'node_app',
        // password: 'Desh_NodeApp',
        
    },'request');
    
    
    connection.connect(function(err){
        if(err){
            console.log("ERROR!!! \n"+err);
            throw err;
            
        }
        else
        console.log('YOU ARE CONNECTED IN THE DB BY EXPRESS!!!');
    });
    
    // const express = require('express');
    // const app = express();
    
    
    const cors = require('cors')
    app.use(cors())
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    
    app.get('/', (req, res) =>
    
    
    connection.query('SELECT * FROM CK09', function(err, results) {
        
        if (err) throw err
        
        var a = {"b":results}
        var min = 999999
        results.map(function(result) { 
            if (result.rank < min) min = result.rank
        })
        var results2 = results.map(function(result) { 
            
            if(result.rank === min) { 
                // var naosei = results.map(function (children, result) {{ if(children.father === result.ipv6) return "C"}})
                if (result.father == result.ipv6) result.route = "C" 
                else  
                result.route = "Erro: Pai não encontrado!"
                
            } else if (result.rank > min) {
                var route = findRoute (result, '', results)
                //   console.log(route + "abcde")
                result.route = route
            }
            return result;
        })
        return res.json(results2)
        
    }))
    function findRoute(elem, route, elements){
        if (elem.ipv6 == elem.father) 
        return route + "(C)"
        else {
            
            var that = this
            var father = null
            elements.filter(function(data) {
                if(data.ipv6 === elem.father) father = data
            }, that);
            
            if (father != undefined || father != null){
                
                route = elem.id + ' ' + route + ' '  + father.id

                return findRoute (father, route, elements)
                
                
            }
            
        }
        
    }
      
    //Configuração MySQL
    const connection2 = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        // password: 'DeshTec3_0',
        password: '',
        port: '3306',
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
    
    // app.listen(3080, () => console.log('Example app listening on port 3080!'));

http.createServer(app).listen(app.get('port'),
  function(){
    console.log("Express server listening on port " + app.get('port'));
});
    