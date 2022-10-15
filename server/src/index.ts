import express, { Express, Response} from 'express';
import http from 'http';

const app: Express = express();
const port = process.env.port || 3000;
const server: http.Server = http.createServer(app);

app.get('*', (req, res: Response) => {
    res.send('HELLO');
  });
  

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })