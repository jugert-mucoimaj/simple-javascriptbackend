import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'yourDatabaseName';

let db;

export const connectToDatabase = async () => {
  if (db) return db;

  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  db = client.db(dbName);
  console.log(`Connected to database: ${dbName}`);
  return db;
};

export const insertDocument = async (collectionName, document) => {
  const database = await connectToDatabase();
  const collection = database.collection(collectionName);
  const result = await collection.insertOne(document);
  return result;
};
