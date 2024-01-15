import express from 'express';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();

app.use(express.static('assets'));
app.use(express.static('assets/scripts/'));
app.use(express.static('assets/styles/css'));

// Ruta del directorio actual en módulos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Extensión .hbs
app.engine('.hbs', engine({
  extname: '.hbs',
  defaultLayout: 'home',
  layoutsDir: path.join(__dirname, 'views/'),
  partialsDir: path.join(__dirname, 'views/partials')
}));

app.set('view engine', '.hbs'); // Extension .hbs para handlerbars
app.set('views', path.join(__dirname, 'views')); // Define la carpeta de las vistas

// Renderiza vista home de Handlebars (.hbs)
app.get('/', (req, res) => {
    res.render('home', { title: 'Tamplate with Handlebars for HTMX' });
});

// Ruta API de ejemplo HTMX
// app.get('/api/hello', (req, res) => {
//     res.json({ message: 'Hello World!' });
// });

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
