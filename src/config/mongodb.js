const MONGODB_URI =
  'mongodb+srv://ntrungnghiajob-trello:jyrmqScvl9WLJGzi@cluster-trungnghai.trl2h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-TrungNghai';
const NAME_DB = 'trello-db';

import { MongoClient, ServerApiVersion } from 'mongodb';

let trelloDatabaseInstance = null;

// tạo đối tương connect tới mongodb
const mongoClientInstace = new MongoClient(MONGODB_URI, {
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
  trelloDatabaseInstance = mongoClientInstace.db(NAME_DB);
};

// nhiệm vụ là để export Trello Database Instance sau khi đã connect đến database
export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Hãy kết nối đến database!');
  return trelloDatabaseInstance;
};
