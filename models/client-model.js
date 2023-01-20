const mongoose = require('mongoose');

const ClientModel = new mongoose.Schema({
    client_number: { type: Number },
    client_name: { type: String, required: true },
    client_tel_number: { type: String },

    client_reason: { type: String },
    client_device_type: { type: String },
    client_device_manufacturer: { type: String },
    client_device_model: { type: String },

    client_approximate_cost_service: { type: Number },
    client_approximate_return_date: { type: String },

    client_prepayment_amount: { type: Number },
    client_prepayment_method: { type: String },
        
    client_interview: { type: String },
    client_comment: { type: String }
});

module.exports = mongoose.model('ClientModel', ClientModel);