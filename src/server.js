/* eslint-disable no-console */
import express from 'express';
import { CONECT_DB, GET_DB } from '~/config/mongodb';

const START_SERVER = () => {
  const app = express();
  const hostname = 'localhost';
  const port = 8017;
  app.get('/', async (req, res) => {
    console.log(await GET_DB().listCollections().toArray());
    res.end('<h1>Hello World!</h1><hr>');
  });

  app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Hello , I am running at ${hostname}:${port}/`);
  });
};

(async () => {
  try {
    console.log('1.Connecting to Mongodb');
    await CONECT_DB();
    console.log('2.Connecting to Mongodb');
    // khởi động Server BE sau khi kết nối vs DB
    START_SERVER();
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
})();

// CONECT_DB()
//   .then(() => console.log('Đã connect'))
//   .then(() => START_SERVER())
//   .catch((error) => {
//     console.log(error);
//     process.exit(0);
//   });
