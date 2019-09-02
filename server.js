let http = require('http');
let users = [
    {name:'Allen',value:11}
];
let server = http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.setHeader("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
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