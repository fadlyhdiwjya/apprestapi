const db = require('../config/connection');


exports.index = (req, res) => {
    let query = `SELECT * FROM tbl_mahasiswa`;
    db.query(query, (err, rows) => {
        if(err) throw err
         res.json({error: false, result: rows});
    })
}

