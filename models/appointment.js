const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({

  professor: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },

  student: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  },

  timeSlot: { 
    type: String, 
    required: true 
  },

  isBooked: { 
    type: Boolean, 
    default: false 
  },

});

module.exports = mongoose.model('Appointment', appointmentSchema);
