let PORT = '8001';
let express = require('express');
let app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  app.use(express.static(__dirname + '/public'));
})

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
})