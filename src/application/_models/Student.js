const BaseModel = require('../../system/BaseModel');

class Student extends BaseModel{
    async getStudentById(id){
        return await this.fetch_record('SELECT * FROM students WHERE id = ?', [id]);
    }
    async getStudentByEmail(email){
        return await this.fetch_record('SELECT * FROM students WHERE email = ?', [email]);
    }
    async addStudent(studentData){
        const bcrypt = require('bcryptjs');
        const query = 'INSERT INTO students (email, password, first_name, last_name, created_at, updated_at) VALUES (?,?,?,?,NOW(),NOW())';
        const values = [
            studentData.register_email,
            bcrypt.hashSync(studentData.register_password, 10),
            studentData.first_name,
            studentData.last_name,
        ];
        return await this.insert(query, values);
    }
    async validate_login(email, password){
        let result = 'Invalid email address or password';
        const student = await this.getStudentByEmail(email);
        if(student){
            const bcrypt = require('bcryptjs');
            if(bcrypt.compareSync(password, student.password)){
                result = student.id;
            }
        }
        return result;
    }
    validate_register(studentData){
        const emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const errors = [];
        if(studentData){
            if(studentData.first_name.length < 2){
                errors.push('First name should be at least 2 characters.');
            }
            if(studentData.last_name.length < 2){
                errors.push('Last name should be at least 2 characters.');
            }
            if(!emailRegEx.test(studentData.register_email)){
                errors.push('Invalid e-mail address format.');
            }
            if(studentData.register_password.length < 8){
                errors.push('Password must be at least 8 characters.');
            }
            if(studentData.register_password != studentData.register_cpassword){
                errors.push('Passwords do not match.');
            }
        }
        return errors.length > 0 ? errors : true;
    }
}

module.exports = new Student;