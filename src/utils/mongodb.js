import { MongoClient } from 'mongodb';

const uri = import.meta.env.VITE_MONGODB_URI || 'mongodb://localhost:27017/portfolio';
const dbName = import.meta.env.MONGODB_DB_NAME || 'PortfolioCustomers';
const collectionName = import.meta.env.MONGODB_COLLECTION || 'ClientRequirements';

let client;
let db;

export const connectToMongoDB = async () => {
  try {
    if (!client) {
      client = new MongoClient(uri, {
        useUnifiedTopology: true,
      });
      await client.connect();
      console.log('Connected to MongoDB');
    }
    
    if (!db) {
      db = client.db(dbName);
    }
    
    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

export const saveClientRequirement = async (formData) => {
  try {
    const database = await connectToMongoDB();
    const collection = database.collection(collectionName);
    
    // Prepare the document with timestamp and additional metadata
    const document = {
      ...formData,
      submittedAt: new Date(),
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer || 'Direct',
      status: 'new',
      followUpRequired: true
    };
    
    const result = await collection.insertOne(document);
    console.log('Document inserted with ID:', result.insertedId);
    
    return {
      success: true,
      insertedId: result.insertedId
    };
  } catch (error) {
    console.error('Error saving to MongoDB:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

export const getClientRequirements = async () => {
  try {
    const database = await connectToMongoDB();
    const collection = database.collection(collectionName);
    
    const requirements = await collection.find({}).sort({ submittedAt: -1 }).toArray();
    return {
      success: true,
      data: requirements
    };
  } catch (error) {
    console.error('Error fetching from MongoDB:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

export const updateClientRequirement = async (id, updateData) => {
  try {
    const database = await connectToMongoDB();
    const collection = database.collection(collectionName);
    
    const result = await collection.updateOne(
      { _id: id },
      { 
        $set: {
          ...updateData,
          updatedAt: new Date()
        }
      }
    );
    
    return {
      success: true,
      modifiedCount: result.modifiedCount
    };
  } catch (error) {
    console.error('Error updating MongoDB document:', error);
    return {
      success: false,
      error: error.message
    };
  }
};
