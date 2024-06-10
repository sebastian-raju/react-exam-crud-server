const json_server = require('json-server');
const cors = require('cors');



const ServerApp = json_server.create();
const middleware = json_server.defaults();
const router = json_server.router('db.json');


ServerApp.use(cors());
ServerApp.use(middleware);
ServerApp.use(router);


const PORT = 5003;

ServerApp.listen(PORT, ()=>{
  console.log(`--------- server running on port :: ${PORT} ---------`);
})