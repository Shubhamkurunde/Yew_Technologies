const jwt = require("jsonwebtoken");

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

const mysql = require("mysql");
const { threadId } = require("worker_threads");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "comm_clientbillto",
});

connection.connect((err) => {
  if (err) {
    console.log("error connecting: " + err.stack);
  } else {
    console.log("Connected to database: " + threadId);
  }
});

app.post("/add_data", (req, res) => {
  const RowId = req.body.RowId;
  const Code = req.body.Code;
  const Name = req.body.Name;
  const Address = req.body.Address;
  const CountryId = req.body.CountryId;
  const StateId = req.body.StateId;
  const CityId = req.body.CityId;
  const Pincode = req.body.Pincode;
  const MobileNo = req.body.MobileNo;
  const Email = req.body.Email;
  const GSTNO = req.body.GSTNO;
  const PANNO = req.body.PANNO;
  const Latitude = req.body.Latitude;
  const Longitude = req.body.Longitude;
  const Location = req.body.Location;
  const Remark = req.body.Remark;
  const GSTFileName = req.body.GSTFileName;
  const GSTFile = req.body.GSTFile;
  const PANFileName = req.body.PANFileName;
  const CurrencyId = req.body.CurrencyId;
  const AddDAte = req.body.AddDAte;
  const AddBy = req.body.AddBy;
  const ModDate = req.body.ModDate;
  const ModBy = req.body.ModBy;
  const IsActDCT = req.body.IsActDCT;
  const DeleteRemark = req.body.DeleteRemark;
  const DeleteAttachment = req.body.DeleteAttachment;
  const DeleteFile = req.body.DeleteFile;
  const add_data_query = `INSERT INTO Comm_ClientBillTo (RowId, Code, Name, Address, CountryId, StateId, CityId, Pincode, MobileNo, Email, GSTNO, PANNO, Latitude, Longitude, Location, Remark, GSTFileName, GSTFile, PANFileName, CurrencyId, AddDAte, AddBy, ModDate, ModBy,IsActDCT, DeleteRemark, DeleteAttachment, DeleteFile) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  connection.query(
    add_data_query,
    [
      RowId,
      Code,
      Name,
      Address,
      CountryId,
      StateId,
      CityId,
      Pincode,
      MobileNo,
      Email,
      GSTNO,
      PANNO,
      Latitude,
      Longitude,
      Location,
      Remark,
      GSTFileName,
      GSTFile,
      PANFileName,
      CurrencyId,
      AddDAte,
      AddBy,
      ModDate,
      ModBy,
      IsActDCT,
      DeleteRemark,
      DeleteAttachment,
      DeleteFile,
    ],
    (err, data) => {
      if (err) {
        console.log(err);
        res.send({
          success: false,
          message: err.sqlMessage,
          data: [],
        });
      } else {
        res.send({
          success: true,
          message: "Data Added Scucessfully",
          data: data,
        });
      }
    }
  );
});

app.put("/update_data/:RowId", (req, res) => {
  const RowId = req.params.RowId;
  const Code = req.body.Code;
  const Name = req.body.Name;
  const Address = req.body.Address;
  const CountryId = req.body.CountryId;
  const StateId = req.body.StateId;
  const CityId = req.body.CityId;
  const Pincode = req.body.Pincode;
  const MobileNo = req.body.MobileNo;
  const Email = req.body.Email;
  const GSTNO = req.body.GSTNO;
  const PANNO = req.body.PANNO;
  const Latitude = req.body.Latitude;
  const Longitude = req.body.Longitude;
  const Location = req.body.Location;
  const Remark = req.body.Remark;
  const GSTFileName = req.body.GSTFileName;
  const GSTFile = req.body.GSTFile;
  const PANFileName = req.body.PANFileName;
  const CurrencyId = req.body.CurrencyId;
  const AddDAte = req.body.AddDAte;
  const AddBy = req.body.AddBy;
  const ModDate = req.body.ModDate;
  const ModBy = req.body.ModBy;
  const IsActDCT = req.body.IsActDCT;
  const DeleteRemark = req.body.DeleteRemark;
  const DeleteAttachment = req.body.DeleteAttachment;
  const DeleteFile = req.body.DeleteFile;
  const update_data_query = `UPDATE Comm_ClientBillto SET Code = ?, Name = ?, Address = ?, CountryId = ?, StateId = ?, CityId = ?, Pincode = ?, MobileNo = ?, Email = ?, GSTNO = ?, PANNO = ?, Latitude = ?, Longitude = ?, Location = ?, Remark = ?, GSTFileName = ?, GSTFile = ?, PANFileName = ?, CurrencyId = ?, AddDAte = ?, AddBy = ?, ModDate = ?, ModBy = ?,IsActDCT = ?, DeleteRemark = ?, DeleteAttachment = ?, DeleteFile =? WHERE RowId = ?`;
  connection.query(
    update_data_query,
    [
      Code,
      Name,
      Address,
      CountryId,
      StateId,
      CityId,
      Pincode,
      MobileNo,
      Email,
      GSTNO,
      PANNO,
      Latitude,
      Longitude,
      Location,
      Remark,
      GSTFileName,
      GSTFile,
      PANFileName,
      CurrencyId,
      AddDAte,
      AddBy,
      ModDate,
      ModBy,
      IsActDCT,
      DeleteRemark,
      DeleteAttachment,
      DeleteFile,
      RowId
    ],
    (err, data) => {
      if (err) {
        res.send({
          success: false,
          message: err.sqlMessage,
          data: [],
        });
      } else {
        res.send({
          success: true,
          message: "Data Updated",
          data: data,
        });
      }
    }
  );
});


app.get('/get_all_list',(req,res)=>{
    const query=`SELECT * FROM Comm_ClientBillto`;
    connection.query(query,(err,data)=>{
        if(err){
            res.send({
                success:false,
                error:sqlMessage,
                data:[]
            })
        }else {
            res.send({
                succes:true,
                error:'',
                data:data
            })
        }
    })
})

const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
