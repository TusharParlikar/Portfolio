import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';
const dbName = process.env.MONGODB_DB_NAME || 'PortfolioCustomers';
const collectionName = process.env.MONGODB_COLLECTION || 'ClientRequirements';

export default async function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let client;

  try {
    // Get form data from request body
    const formData = req.body;

    // Connect to MongoDB
    client = new MongoClient(uri, {
      useUnifiedTopology: true,
    });
    
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Prepare the document with timestamp and additional metadata
    const document = {
      ...formData,
      submittedAt: new Date(),
      timestamp: new Date().toISOString(),
      userAgent: formData.userAgent || 'Unknown',
      referrer: formData.referrer || 'Direct',
      status: 'new',
      followUpRequired: true,
      source: 'Portfolio Website',
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'Unknown'
    };

    // Insert the document
    const result = await collection.insertOne(document);

    return res.status(200).json({
      success: true,
      insertedId: result.insertedId.toString(),
      message: 'Requirement saved successfully to MongoDB'
    });

  } catch (error) {
    console.error('Error saving to MongoDB:', error);

    return res.status(500).json({
      success: false,
      error: error.message,
      message: 'Failed to save requirement to MongoDB'
    });

  } finally {
    if (client) {
      await client.close();
    }
  }
}
