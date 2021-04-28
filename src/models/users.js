const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  email: {
    type: String,
    pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    trim: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  phone:{
      type: String,
      trim: true,
      required: true,
      minLength: 10,
      maxLength: 10
  },
  age: {
      type: Number,
      required: true,
      min: 16,
      max: 99
  },
  gender:{
      type: String,
      trim: true,
      required: true
  },
 hobbie:{
      type: String,
      trim: true,
      maxLength: 50
  },
  registerDate:{
    type: Number,
    required: 50
}

})
/*
• Nombre-
• Correo-
• Teléfono-
• Contraseña-
• Edad-
• Género-
• Pasatiempo-
• Fecha de registro-
*/
module.exports = mongoose.model('users', schema)

