import * as express from 'express';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as favicon from 'serve-favicon';
import * as cors from 'cors';
import * as expressHandlebars from 'express-handlebars';
import {healthCheck} from './controllers/healthCheck';
import {cleaningHistory} from './controllers/cleaningHistory';
import {addCleaning} from './controllers/addCleaning';
import {signIn} from './controllers/sginIn';
import {checkPassword} from './middlewares/checkPasssword'
import {login} from './controllers/login'


export default () => {
  const app = express();

  // view engine
  app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
    layoutsDir: `${__dirname}/views/layouts`
  }));

  app.set('view engine', 'handlebars');
  app.set('views', `${__dirname}/views`);

  // uncomment after placing your favicon in /public
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());

  // Use CORS
  app.use(cors());
  // Static assets
  app.use('/static', express.static(`${__dirname}/public`));
  app.use(favicon(`${__dirname}/public/favicon.ico`));

  // Controllers
  app.get('/', (req, res) => res.render('home'));
  app.get('/health-check', healthCheck);
  app.get('/apartments/:id/history', cleaningHistory);
  app.post('/apartments/:id/history', addCleaning);

  // //Login
  app.post('/login', checkPassword, login);

  //Sign in
  app.post('/sign-in', signIn);

  return app;
};
