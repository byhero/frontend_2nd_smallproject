const express = require('express')
const app = express()
const port = 3000
//app.get('/', (req, res) => res.send('Hello World!'))

//app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(express.static('public'))
const path = require('path');
const router = express.Router();
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


router.get('/b_homepage', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/b_homepage.html'));
});

router.get('/b_signup', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/b_signup.html'));
});

app.use('/', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))