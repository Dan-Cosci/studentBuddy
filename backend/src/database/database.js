import mysql from 'mysql2';

const con = mysql.createConnection({
    host: 'localhost',
    user: 'myusername',
    password: 'mypassword',
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
});
export default con;