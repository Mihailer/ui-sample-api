const ClientModel = require('../models/client-model.js')

class ClientController {
    async create(req, res) {
        try {
            console.log( req.body );
            const {
                client_number,
                client_name,
                client_tel_number,
                client_reason,
                client_device_type,
                client_device_manufacturer,
                client_device_model,
                client_approximate_cost_service,
                client_approximate_return_date,
                client_prepayment_amount,
                client_prepayment_method,
                client_interview,
                client_comment
            } = req.body

            console.log( client_tel_number )

            const newClient = await ClientModel.create({
                client_number,
                client_name,
                client_tel_number,
                client_reason,
                client_device_type,
                client_device_manufacturer,
                client_device_model,
                client_approximate_cost_service,
                client_approximate_return_date,
                client_prepayment_amount,
                client_prepayment_method,
                client_interview,
                client_comment
            });
            
            res.json( newClient )
        } catch (e) {
            console.log( 'broke' );
            res.status(500).json(e)
        }
    }

    async getAllClients(req, res) {
        try {
            const client = await ClientModel.find({}, ' -_id -__v') ;
            return res.json(client);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async updateClient(req, res) {
        try {
            const {id: _id} = req.params
            const {
                client_number,
                client_name,
                client_tel_number,
                client_reason,
                client_device_type,
                client_device_manufacturer,
                client_device_model,
                client_approximate_cost_service,
                client_approximate_return_date,
                client_prepayment_amount,
                client_prepayment_method,
                client_interview,
                client_comment 
            } = req.body
            const newClient = {
                client_number,
                client_name,
                client_tel_number,
                client_reason,
                client_device_type,
                client_device_manufacturer,
                client_device_model,
                client_approximate_cost_service,
                client_approximate_return_date,
                client_prepayment_amount,
                client_prepayment_method,
                client_interview,
                client_comment 
            }

            await ClientModel.findByIdAndUpdate(
                _id,
                newClient,
                (err, updatedClient) => {
                  if (err) {
                    res.json({
                      newClient,
                      success: false,
                      msg: 'Failed to update client'
                    })
                  } else {
                    res.json({newClient, success: true, 
                        client_number,
                        client_name,
                        client_tel_number,
                        client_reason,
                        client_device_type,
                        client_device_manufacturer,
                        client_device_model,
                        client_approximate_cost_service,
                        client_approximate_return_date,
                        client_prepayment_amount,
                        client_prepayment_method,
                        client_interview,
                        client_comment 
                    })
                }
            })
        } catch (e) {
            res.status(500).json(e);
        }
    }
    
    async deleteClient(req, res) {
        try {
            const {id} = req.params
            console.log(id);
            const client = await ClientModel.findByIdAndDelete(id)
            return res.json(client)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

module.exports = new ClientController();