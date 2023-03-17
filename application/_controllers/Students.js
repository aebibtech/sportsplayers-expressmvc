const BaseController = require('../../system/BaseController');
const student = require('../_models/Student');

class Students extends BaseController{
    index(request, response){
        if(request.session.studentId){
            response.redirect('/students/profile');
        }
        let loginError = '';
        let registerErrors = null;
        if(request.session.login_error){
            loginError = request.session.login_error;
            delete request.session.login_error;
        }
        if(request.session.register_errors){
            registerErrors = request.session.register_errors;
            delete request.session.register_errors;
        }
        response.render('students/index', {login_error: loginError, register_errors: registerErrors});
    }
    async profile(request, response){
        if(request.session.studentId){
            const studentProfile = await student.getStudentById(request.session.studentId);
            response.render('students/profile', {student: {
                first_name: studentProfile.first_name,
                last_name: studentProfile.last_name,
                email: studentProfile.email
            }});
        }else{
            response.redirect('/');
        }
    }
    async login(request, response){
        const result = await student.validate_login(request.body.login_email, request.body.login_password);
        if(result > 0){
            request.session.studentId = result;
            response.redirect('/students/profile');
        }else{
            request.session.login_error = result;
            response.redirect('/');
        }
    }
    async register(request, response){
        const result = student.validate_register(request.body);
        if(result === true){
            request.session.studentId = await student.addStudent(request.body);
            response.redirect('/students/profile');
        }else{
            request.session.register_errors = result;
            response.redirect('/');
        }
    }
    logoff(request, response){
        request.session.destroy();
        response.redirect('/');
    }
}

module.exports = new Students;