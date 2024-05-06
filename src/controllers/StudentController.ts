import express from 'express'
import { StudentModel } from '../db/student'

class StudentController {

    getAllStudents = async(request: express.Request, response: express.Response) => {
try {
    const students = await StudentModel.find()
    return response.status(200).json({data: students})
} catch (error) {
    return response.sendStatus(400)
}
    }

    getStudent = async(request: express.Request, response: express.Response) => {
        try {
            const {id} = request.params;
            const student = await StudentModel.findById(id) 
            return response.status(200).json({data: student})
        } catch (error) {
            return response.sendStatus(400)
        }
            }

    createStudent = async(request: express.Request, response: express.Response)  =>{
try {
    const {name, email, mobile} = request.body
    const student = new StudentModel({
        name, email, mobile
    })
    await student.save()
    return response.status(200).json({message: 'Student added', data: student})
} catch (error) {
    return response.sendStatus(400)
}
    }

    updateStudent = async(request: express.Request, response: express.Response) => {
        try {
            const {id} = request.params
            const {name, email,mobile} = request.body

            const student = await StudentModel.findById(id)
            if(student){
                student.name = name;
                student.email = email;
                student.mobile = mobile;

                await student.save();
                return response.status(200).json({message: 'Student Updated', data: student})
            }
            return response.sendStatus(400)
        } catch (error) {
            return response.sendStatus(400)
        }
            }

    deleteStudent = async(request: express.Request, response: express.Response) => {
        try {
            const {id} = request.params;
            await StudentModel.findByIdAndDelete({_id: id})
            return response.status(200).json({message: 'Student deleted'})
        } catch (error) {
            return response.sendStatus(400)
        }
            }
    

}

export default new StudentController;