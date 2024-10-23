/* eslint-disable no-console */
import express from 'express';
import exitsHook from 'async-exit-hook';
import { CONECT_DB, CLOSE_DB } from '~/config/mongodb';
import { env } from '~/config/environment';

const START_SERVER = () => {
  const app = express();

  app.get('/', async (req, res) => {
    res.end('<h1>Hello World!</h1><hr>');
  });

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    // eslint-disable-next-line no-console
    console.log(
      `Hello ${env.AUTHOR}, I am running at ${env.APP_HOST}:${env.APP_PORT}/ `
    );
  });

  // đóng kết nối, thực hiện các tác vụ cleanup trước khi dừng server
  exitsHook(() => {
    console.log('Disconnect DB');
    CLOSE_DB();
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
