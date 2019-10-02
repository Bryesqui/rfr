const express = require('express');
const path = require('path');

const app = express();
app.use('/public', express.static('public'));
app.get('rfrcontractors.com', function(req,res){
  res.sendFile(path.join(__dirname, '/rfr.html'));
});

app.listen(80);