const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    enrollmentData:{
        type:Date,
        default:Date.now
    },
    course:[{
        type:mongoose.Schema.Types.ObjectID,
        ref:"Course"
        }]
});

const courseSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    durationWeeks:{
        type:Number,
        required:true
    },
    instructor:{
        type:String,
        required:true
    }
});

const Student = mongoose.model('Student',studentSchema);
const Course = mongoose.model('Course',courseSchema);


module.exports = {Student, Course};