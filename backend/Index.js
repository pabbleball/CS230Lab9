import express from "express"
import mysql from "mysql"
import cors from "cors"


const app = express()
app.use(cors())
app.use(express.json())


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"2107PsBd!",
    database:"test"
})



app.get("/", (req,res)=>{
    res.json("hello this is the backend")
})

app.get("/games", (req,res)=>{
    const q = "SELECT * FROM games"
    db.query(q,(err,data)=>{
        if (err) {
            console.log(err)
            return res.json(err)
        }
        return res.json(data);
    })
})

app.post("/games", (req,res)=>{
    const q = "INSERT INTO games(`title`, `desc`, `cover`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
    ]

    db.query(q, [values], (err,data)=>{
        if(err) return res.send(err)
        return res.json(data)
    })
})

app.delete("/games/:id", (req, res) => {
    const gameId = req.params.id;
    const q = " DELETE FROM games WHERE id = ? ";
  
    db.query(q, [gameId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data)
    });
  });

app.put("/games/:id", (req, res) => {
    const gameId = req.params.id;
    const q = "UPDATE games SET `title`= ?, `desc`= ?, `cover`= ? WHERE id = ?";


    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
    ]
  
    db.query(q, [...values,gameId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });


app.listen(8800, () =>{
    console.log("This is the backend")
})