import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 

app.get('/', (req, res)=> {
    res.render('index', {
        name:'prakhar Mishra'
    });
});

app.listen(3000, ()=>{
    console.log('server is running on port 3000');
});