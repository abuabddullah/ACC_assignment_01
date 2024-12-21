/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from 'express';
import config from './app/config';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: [config.frontEnd_url as string] }));

// application routes
app.use('/api/v1', router);

/* create a default api for / or base route */
app.get('/', (req, res) => {
  res.send('Welcome to the base route');
});
/* create a unmatch route and return html type response which gives a vive of frontend*/
app.get('*', (req, res) => {
  res.status(404).send(`
  <html>
    <head>
      <title>404 Not Found</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          background-color: #f8f9fa;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        h1 {
          font-size: 3em;
          margin-bottom: 0.5em;
        }
        p {
          font-size: 1.2em;
          margin-bottom: 1em;
        }
        a {
          color: #007bff;
          text-decoration: none;
          font-weight: bold;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>404 Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p><a href="/">Go back to Home</a></p>
      </div>
    </body>
  </html>
`);
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
