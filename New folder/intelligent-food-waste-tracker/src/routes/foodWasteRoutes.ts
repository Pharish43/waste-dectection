import { Router } from 'express';
import FoodWasteController from '../controllers/foodWasteController';

const router = Router();
const foodWasteController = new FoodWasteController();

export function setFoodWasteRoutes(app) {
    app.use('/api/food-waste', router);

    router.post('/add', foodWasteController.addFoodItem.bind(foodWasteController));
    router.get('/items', foodWasteController.getFoodItems.bind(foodWasteController));
    router.post('/track', foodWasteController.trackWaste.bind(foodWasteController));
}