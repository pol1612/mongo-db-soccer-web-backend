
import express from 'express'
import { PORT, mongodbURL } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors'
import soccerPlayerRoutes from './routes/routes.js';
    

function startServer(){
    
    const app = express()

    app.use(cors())
    app.use(express.json());
        
    app.use(soccerPlayerRoutes);

    app.listen(PORT, () => {
        console.log(`Express app listening on port ${PORT}`)
    })
        
    async function connectToMongoDB() {
        try {
            await mongoose.connect((mongodbURL), { 
                useNewUrlParser: true, 
                useUnifiedTopology: true,
                dbName: 'db_soccer_players'
            });
            console.log('Express app connected to MongoDB');
                
        } catch (error) {
            console.error('Could not connect to MongoDB', error);
        }
    }    
        
    connectToMongoDB();

}

export default startServer;