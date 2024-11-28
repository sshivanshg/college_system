const express = require('express');

const { viewAvailableSlots, bookAppointment } = require('../controllers/bookingController');
const { addAvailability, cancelAppointment } = require('../controllers/professorController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/professor/availability', authMiddleware, addAvailability);

router.get('/professor/:professorId/slots', authMiddleware, viewAvailableSlots);

router.post('/appointment/:appointmentId/book', authMiddleware, bookAppointment);

router.delete('/appointment/:appointmentId/cancel', authMiddleware, cancelAppointment);

module.exports = router;
