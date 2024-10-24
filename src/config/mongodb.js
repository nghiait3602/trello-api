import { MongoClient, ServerApiVersion } from 'mongodb';
import { env } from '~/config/environment';

let trelloDatabaseInstance = null;

// tạo đối tương connect tới mongodb ->  doc mongodbco
const mongoClientInstace = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// kết nối vs database
export const CONECT_DB = async () => {
  await mongoClientInstace.connect();
  //   kết nối thành công thì lấy database gán ngược lại vào biến trelloDatabaseInstance
  trelloDatabaseInstance = mongoClientInstace.db(env.DATABASE_NAME);
};

// đóng kết nối đến db khi cần
export const CLOSE_DB = async () => {
  await mongoClientInstace.close();
};

// nhiệm vụ là để export Trello Database Instance sau khi đã connect đến database
export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Hãy kết nối đến database!');
  return trelloDatabaseInstance;
};
