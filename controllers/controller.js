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


exports.editStudents = ( req, res ) => {

    let nama = req.body.nama;
    let nim = req.body.nim;
    let jurusan = req.body.jurusan;

    let sql = `UPDATE tbl_mahasiswa SET 
    nama = '${nama}',
    nim = '${nim}',
    jurusan = '${jurusan}'
    WHERE id = '${req.params.id}'
    `;

    db.query(sql, (err, rows) => {
        if(err){
            res.json({error: true, result: err});
        } else {
            res.json({error: false, result: rows});
        }
    })
}

exports.deleteStudents = ( req, res ) => {

   

    let sql = `DELETE FROM tbl_mahasiswa WHERE id = '${req.params.id}'
    `;

    db.query(sql, (err, rows) => {
        if(err){
            res.json({error: true, result: err});
        } else {
            res.json({error: false, result: rows});
        }
    })
}


