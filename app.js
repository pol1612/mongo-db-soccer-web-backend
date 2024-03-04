import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import soccerPlayerRoutes from './routes/routes.js';
    

function startServer(){

    dotenv.config();

    const PORT = process.env.PORT;
    const MONGO_DB_URI = process.env.MONGO_DB_URI;
    const DBNAME = process.env.DBNAME;
    
    const app = express()


    app.use(cors())
    app.use(express.json());
    app.use(express.static('public'));
        
    app.use(soccerPlayerRoutes);

    app.listen(PORT, () => {
        console.log(`Express app listening on port ${PORT}`)
    })
        
    async function connectToMongoDB() {
        try {
            await mongoose.connect((MONGO_DB_URI), { 
                useNewUrlParser: true, 
                useUnifiedTopology: true,
                dbName: DBNAME
            });
            console.log('Express app connected to MongoDB');
                
        } catch (error) {
            console.error('Could not connect to MongoDB', error);
        }
    }    
        
    connectToMongoDB();

}

export default startServer;