const {Schema, model} = require('mongoose');

const userSchema = Schema({
    name: {
        type: String,
        required: [true, 'Please enter name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    email: {
        type: String,
        reqired: true
    },
    phone: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    avater: {
        type: String,
        required: false
    }

}, { timestamps: true, versionKey: false }
);



const User = model('User', userSchema, 'User');
module.exports = User;