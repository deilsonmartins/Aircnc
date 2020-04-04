import { Router } from 'express';

import multer from 'multer';

import multerConfig from '../config/multer';

import ProfileController from '../controllers/ProfileController';

import SessionController from '../controllers/SessionController';

import SpotController from '../controllers/SpotController';

import BookingController from '../controllers/BookingController';

const upload = multer(multerConfig);

const Routes = Router();

Routes.post('/sessions', SessionController.store);

Routes.post('/spots', upload.single('thumbnail'), SpotController.store);

Routes.get('/spots', SpotController.index);

Routes.get('/profile', ProfileController.index);

Routes.post('/spots/:spot_id/bookings', BookingController.store);
export default Routes;
