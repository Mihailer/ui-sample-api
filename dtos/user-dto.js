module.exports = class UserDto {
    email;
    id;
    isActivated;
    userData;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
        
    }
}
