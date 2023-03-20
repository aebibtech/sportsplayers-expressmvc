const chai = require('chai');
const expect = chai.expect;

describe("Student.validate_login()", function(){
    const studentModel = require('../Student');
    it("Given a valid input it should return the student id.", async function(){
        const studentId = await studentModel.validate_login('paul@gmail.com', 'c123!@#1');
        expect(studentId).to.equal(2);
    });
    it("Given a valid email and wrong password, it should return 'Invalid email address or password'.", async function(){
        const loginErrorMessage = await studentModel.validate_login('paul@gmail.com', 'c1231231');
        expect(loginErrorMessage).to.equal('Invalid email address or password');
    });
    it("Given a wrong email and valid password, it should return 'Invalid email or password'.", async function(){
        const loginErrorMessage = await studentModel.validate_login('pauls@gmail.com', 'c123!@#1');
        expect(loginErrorMessage).to.equal('Invalid email address or password');
    });
});

describe("Student.validate_register()", function(){
    const studentModel = require('../Student');
    it("Given all inputs are valid, it should return true.", function(){
        const input = {
            first_name: 'Trexchy Mae',
            last_name: 'Camano',
            register_email: 'mae059@gmail.com',
            register_password: '12345678',
            register_cpassword: '12345678'
        }
        const result = studentModel.validate_register(input);
        expect(result).to.equal(true);
    });
    it("Given password and confirm password are not equal, it should return the array of errors.", function(){
        const input = {
            first_name: 'Trexchy Mae',
            last_name: 'Camano',
            register_email: 'mae059@gmail.com',
            register_password: '12345678',
            register_cpassword: '1234567228'
        }
        const result = studentModel.validate_register(input);
        expect(result).to.have.same.members(['Passwords do not match.']);
    });
    it("Given that the first name and last name are blank, it should return the array of errors.", function(){
        const input = {
            first_name: '',
            last_name: '',
            register_email: 'mae059@gmail.com',
            register_password: '12345678',
            register_cpassword: '12345678'
        }
        const result = studentModel.validate_register(input);
        expect(result).to.have.same.members(['First name should be at least 2 characters.', 'Last name should be at least 2 characters.']);
    });
});