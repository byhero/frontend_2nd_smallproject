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
<<<<<<< HEAD
router.get('/a_homepage', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/a_homepage.html'));
});
router.get('/a_notice', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/a_notice.html'));
});
router.get('/a_signup', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/a_signup.html'));
});
router.get('/homepage_search', function (req, res) {
    console.log(req.query);
    res.send('Request parameters : '+req.query.search)
});
router.get('/notice_question', function (req, res) {
    console.log(req.query);
    res.send('Request parameters : '+req.query.question)
});
router.get('/notice_write', function (req, res) {
    console.log(req.query);
    res.send('Request parameters : '+req.query.write)
});
router.get('/signup', function (req, res) {
    console.log(req.query);
    res.send('Request parameters : '+req.query.name+', '+req.query.birth+','+req.query.id+','+req.query.pwd+','+req.query.email)
});
=======


router.get('/b_homepage', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/b_homepage.html'));
});

router.get('/b_signup', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/b_signup.html'));
});

>>>>>>> 43e04b5408b8672c8345ea42f4c3fb84f8080c85
app.use('/', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))