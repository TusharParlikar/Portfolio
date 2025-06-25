// src/api/mongodb-middleware.js
import { MongoClient } from 'mongodb';

// Get MongoDB URI from environment variables
const uri = import.meta.env.VITE_MONGODB_URI || 'mongodb://localhost:27017/portfolio';
const dbName = 'PortfolioCustomers';
const collectionName = 'ClientRequirements';

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  
  cachedClient = client;
  cachedDb = db;
  
  return { client, db };
}

export async function saveFormData(formData) {
  try {
    const { client, db } = await connectToDatabase();
    const collection = db.collection(collectionName);
    
    // Prepare the document with timestamp and metadata
    const document = {
      ...formData,
      submittedAt: new Date(),
      timestamp: new Date().toISOString(),
      status: 'new',
      followUpRequired: true,
      source: 'Portfolio Website'
    };
    
    const result = await collection.insertOne(document);
    return { 
      success: true, 
      insertedId: result.insertedId.toString(),
      message: 'Requirement saved successfully'
    };
  } catch (error) {
    console.error('Error saving to MongoDB:', error);
    return { 
      success: false,
      error: error.message,
      message: 'Failed to save requirement'
    };
  }
}
