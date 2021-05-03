import express from 'express'
import morgan from 'morgan'
import videosRoutes from './routes/videos.routes'
import cors from 'cors'
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', videosRoutes);

export default app;