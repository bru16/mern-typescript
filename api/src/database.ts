import mongoose, { ConnectionOptions } from 'mongoose'
import config from './config'

(async () => {
    try {
        const mongooseOptions: ConnectionOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, mongooseOptions);
        console.log('Database connected to: ', db.connection.name);
    } catch (error) {
        console.log(error);
    }
})(); //auto execute function.