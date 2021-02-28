const db = require('../config/connection');


exports.index = (req, res) => {
    let query = `SELECT * FROM tbl_mahasiswa`;
    db.query(query, (err, rows) => {
        if(err) throw err
         res.json({error: false, result: rows});
    })
}

exports.getStudentsById = (req, res) => {

    let id = req.params.id;

    let query = `SELECT * FROM tbl_mahasiswa WHERE id = ${id}`;
    db.query(query, (err, result, fields) => {
        if(err) throw err;
         res.json({error: false, result: result});
    })
}

exports.addStudents = ( req, res, next ) => {

    let form = {
        nama: req.body.nama,
        nim : req.body.nim,
        jurusan: req.body.jurusan
    }

    let sql = `INSERT INTO tbl_mahasiswa ( id, nama, nim, jurusan) VALUES (null, ?,?,?)`;
    db.query(sql, [form.nama, form.nim, form.jurusan], (err, result) => {
        if(err) {
            res.json({error: true, result: err});
        } else {
            res.json({error: false, result: result});
        }
    });
}

