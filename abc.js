var router=require('./router');
var express = require('express');
var app = express();
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(bodyParser.json());
app.use('/router',router);

app.listen(4000,()=>{
console.log('server is running on port no 4000');

})