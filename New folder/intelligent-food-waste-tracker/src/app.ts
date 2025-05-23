import express from 'express';
import bodyParser from 'body-parser';
import { setFoodWasteRoutes } from './routes/foodWasteRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
setFoodWasteRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});