const Appointment = require('../models/appointment.js');

const addAvailability = async (req, res) => {
  const { timeSlots } = req.body; // array of available time slots
  const professorId = req.user.userId;

  try {
    const appointments = timeSlots.map(timeSlot => ({
      professor: professorId,
      timeSlot,
    }));

    await Appointment.insertMany(appointments);
    res.status(201).json({ message: 'Availability added successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const cancelAppointment = async (req, res) => {
  const { appointmentId } = req.params;

  try {
    await Appointment.findByIdAndDelete(appointmentId);
    res.status(200).json({ message: 'Appointment cancelled successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addAvailability, cancelAppointment };
