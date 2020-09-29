//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
const app = express();

let items = ['Run', 'Read', 'Work'];
let workItems = [];
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  let day = date();
  res.render('list', { listTitle: day, newListItem: items });
});

app.post('/', (req, res) => {
  let item = req.body.newItem;

  if (req.body.list === 'Work') {
    workItems.push(item);
    res.redirect('/work');
  } else {
    items.push(item);
    res.redirect('/');
  }
});

app.get('/work', (req, res) => {
  res.render('list', { listTitle: 'Work List', newListItem: workItems });
});

app.get('/about', (req, res) => {
  res.render('about');
});



app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running at port 3000');
});
