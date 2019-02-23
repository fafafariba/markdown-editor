const express = require('express'); //TODO make es6 notation work
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const port = process.env.API_PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



router.get('/', (req, res) => res.json({message: "Hello!"}));
app.use('/api', router);
app.listen(port, () => console.log(`Listening on port ${port}`));