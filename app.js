const express = require('express');
const lego = require('./lego.json');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index', {
        title:'Homepage',
        models: lego.models
    });
});

app.get('/model', (req, res) => {
  const model = lego.models.find((m) => m.id === req.query.id);
  res.render('model', {
    title: `About ${model.nome}`,
    model,
  });
});

app.listen(3000, function () {
  console.log('listing...');
});