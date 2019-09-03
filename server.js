let http = require('http');
let users = [
    {name:'Allen',value:3},
    {name:'Json',value:2},
    {name:'Topson',value:13}
];
let server = http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","content-type");
    res.setHeader("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    
    if(req.url === '/api/users'){
        res.end(JSON.stringify(users));
    }else{
        res.end('Not Found');
    }
});
server.listen(3000,()=>{
    console.log('Listen 3000');
});