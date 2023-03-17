const BaseModel = require('./BaseModel');
const bcrypt = require('bcryptjs');
let bm = new BaseModel();

bm.fetch_all('SELECT * FROM students').then(function(res){
    console.log(res);
}).catch(function(err){
    console.log(err);
});

let values = [
    'mae@mailx.com',
    bcrypt.hashSync('11111111', 10),
    'Mae2',
    'Camano2'
];

bm.insert('INSERT INTO students (email, password, first_name, last_name, created_at, updated_at) VALUES ($1,$2,$3,$4,NOW(),NOW()) RETURNING id', values).then(function(res){
    console.log(res);
}).catch(function(err){
    console.log(err);
});