const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    userData: {type: Object , default: {
            
        user_registration_date: new Date(),
        user_name: '',
        user_age: '',
        user_country: '',
        user_city: '',
        user_tel_number: '',
        user_contact_email: ''
    }}
})

module.exports = model('User', UserSchema);
