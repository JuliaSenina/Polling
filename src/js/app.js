import API from './api';
import Controller from './controller';
import Layout from './layout';

const app = new Controller(new Layout(), new API());
app.init();
