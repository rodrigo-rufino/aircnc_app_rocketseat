const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');

const UserController = require("./controller/UserController");
const SpotController = require("./controller/SpotController");
const DashboardController = require("./controller/DashboardController");
const BookingController = require("./controller/BookingController");
const ApprovalController = require('./controller/ApprovalController');
const RejectionController = require('./controller/RejectionController');
const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', UserController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spot/:spot_id/bookings', BookingController.store)

routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
routes.post('/bookings/:booking_id/rejections', RejectionController.store);

module.exports = routes;