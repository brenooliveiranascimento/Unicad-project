import App from '.';
import 'dotenv/config';

const PORT = process.env.APP_PORT || 3001;

new App().start(PORT);
