const express = require('express')
const app = express()
const port = 3000
const bodyparser = require('body-parser')
const db = require ("./connection")
const response = require('./response')

app.use(bodyparser.json())

app.get('/', (req, res) => {
  response(200, "API v1 ready to go", "Success",res)
})
app.get('/mahasiswa', (req, res) => {
  const sql = `SELECT * FROM mahasiswa`
  db.query(sql, (err,fields)=>{
    if(err) throw err
    response(200,fields,'mahasiswa get list', res)
  })
})
app.get('/mahasiswa/:nim', (req, res) => {
  const nim = req.params.nim
  const sql = `SELECT * FROM mahasiswa WHERE nim = ${nim}`
  db.query(sql, (err, fields)=>{
    response(200,fields,'get details mahasiswa', res)
  })
})

app.post('/mahasiswa', (req, res) => {
  const {nim, nama_lengkap, kelas, alamat}= req.body
  console.log(req.body);
  const sql = `INSERT INTO mahasiswa (nim, nama_lengkap, kelas, alamat) VALUES (${nim},'${nama_lengkap}', '${kelas}', '${alamat}')`
  
  db.query(sql, (err, fields)=>{
    if (err) response(500, "invalid", "error", res)
    if(fields?.affectedRows){
      const data = {
        isSuccess: fields.affectedRows,
        id: fields.insertId
      }
      response(200, data ,'Data add succesfully', res)
    }
  })
})


app.put('/mahasiswa', (req, res) => {
  const {nim, nama_lengkap, kelas, alamat} = req.body
  const sql = `UPDATE mahasiswa SET nama_lengkap = '${nama_lengkap}', kelas = '${kelas}', alamat = '${alamat}' WHERE nim = ${nim}`
  db.query(sql, (err, fields)=>{
    if (err) response(500, "invalid", "error", res)
    if(fields?.affectedRows){
      const data ={
        isSuccess: fields.affectedRows,
        message : fields.message
      }
      response(200, data ,'succesfully  update data', res)
    }else{
      response(400, 'user not found' ,'error', res)
    }
  })
})

app.delete('/mahasiswa', (req, res) => {
  const {nim, nama_lengkap, kelas, alamat } = req.body
  const sql = `DELETE FROM mahasiswa WHERE nim = ${nim}`
  db.query(sql, (err, fields)=>{
    if(err)response(500, "invalid", "error", res)
      if (fields.affectedRows) {
        const data ={
          isDeleted: fields.affectedRows,
        }
        response(200, data, "deleted successfully", res)
      }else{
        response(400, 'user not found' ,'error', res)
      }
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})