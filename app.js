//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let items = ['Run', 'Read', 'Work'];
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  let today = new Date();

  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };
  let day = today.toLocaleDateString('en-us', options);
  res.render('list', { kindOfDay: day, newListItem: items });
});

app.post('/', (req, res) => {
  let item = req.body.newItem;
  items.push(item);
  res.redirect('/');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running at port 3000');
});