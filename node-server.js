const http = require('http');
var fs =  require('file-system');
const port = 3000;

const createFile = (request) => {
    fs.writeFileSync('hello-world.txt', 'Hello to this greaat world!', 'utf8');
};

const server = http.createServer(createFile);

server.listen(port, (err) => {
    if(err){
        return console.log(`There was an error: ${err}`);
    }
    console.log(`server is listening on ${port}`);
});