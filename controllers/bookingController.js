const Appointment = require('../models/appointment.js');

const viewAvailableSlots = async (req, res) => {
  const { professorId } = req.params;
  const availableSlots = await Appointment.find({ professor: professorId, isBooked: false });

  res.json(availableSlots);
};

const bookAppointment = async (req, res) => {
  const { appointmentId } = req.params;
  const studentId = req.user.userId;

  try {
    const appointment = await Appointment.findById(appointmentId);
    if (appointment.isBooked) return res.status(400).json({ message: 'Slot already booked' });

    appointment.isBooked = true;
    appointment.student = studentId;
    await appointment.save();

    res.status(200).json({ message: 'Appointment booked successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { viewAvailableSlots, bookAppointment };
