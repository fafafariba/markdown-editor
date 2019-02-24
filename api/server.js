const express = require('express'); //NodeJS not currently supporting ES6 imports & exports
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const port = process.env.API_PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



router.get('/', (req, res) => res.send("Hello!"));
router.get('/notes', (req, res) => res.json({notes: "List of notes show up here"}));
router.get('/notes/:id', (req, res) => res.json({id: `${req.params.id}`}));



app.use('/api', router);
app.listen(port, () => console.log(`Listening on port ${port}`));