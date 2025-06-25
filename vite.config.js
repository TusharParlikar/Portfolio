import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { MongoClient } from 'mongodb'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode`
  const env = loadEnv(mode, process.cwd(), '')
  
  // MongoDB connection details from env
  const uri = env.VITE_MONGODB_URI || 'mongodb://localhost:27017/portfolio';
  const dbName = 'PortfolioCustomers';
  const collectionName = 'ClientRequirements';
  
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'mock-api',
        configureServer(server) {
        server.middlewares.use('/api/save-requirement', async (req, res) => {
          // Handle CORS
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
          res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
          
          if (req.method === 'OPTIONS') {
            res.writeHead(200);
            res.end();
            return;
          }
          
          if (req.method !== 'POST') {
            res.writeHead(405, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Method not allowed' }));
            return;
          }
          
          // Get request body
          const chunks = [];
          for await (const chunk of req) {
            chunks.push(chunk);
          }
          const formData = JSON.parse(Buffer.concat(chunks).toString());
          
          let client;
          try {
            // Connect to MongoDB
            client = new MongoClient(uri, {
              useUnifiedTopology: true,
            });
            
            await client.connect();
            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            
            // Prepare the document with timestamp and metadata
            const document = {
              ...formData,
              submittedAt: new Date(),
              timestamp: new Date().toISOString(),
              status: 'new',
              followUpRequired: true,
              source: 'Portfolio Website Dev Server'
            };
            
            // Insert the document
            const result = await collection.insertOne(document);
            
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
              success: true,
              insertedId: result.insertedId.toString(),
              message: 'Requirement saved successfully'
            }));
            
          } catch (error) {
            console.error('Error saving to MongoDB:', error);
            
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
              success: false,
              error: error.message,
              message: 'Failed to save requirement'
            }));
            
          } finally {
            if (client) {
              await client.close();
            }
          }
        });
      }
    }
  ],
  }
})
