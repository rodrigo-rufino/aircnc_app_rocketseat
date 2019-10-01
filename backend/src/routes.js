const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');

const UserController = require("./controller/UserController");
const SpotController = require("./controller/SpotController");
const DashboardController = require("./controller/DashboardController");
const BookingController = require("./controller/BookingController");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', UserController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spot/:spot_id/bookings', BookingController.store)

module.exports = routes;