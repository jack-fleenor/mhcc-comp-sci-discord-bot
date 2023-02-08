import express from 'express';
import cors from 'cors';

const app = express();
var db = require("./Database.ts");
app.use(express.json())
app.use(cors());

app.get("/api/assignments", (req, res, next) => {
    var sql = "select * from assignments"
    var params: any = []
    db.all(sql, params, (err: { message: any; }, rows: any) => {
        if (err) {
          res.status(400).json({"error dick":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

app.post('/api/assignments/', (req, res, next) => {
    var data = {
        title: req.body.title,
        link: req.body.link,
        dueDate: req.body.dueDate,
        description: req.body.description
    }
    var sql ='INSERT INTO assignments (title, link, dueDate, description) VALUES (?,?,?,?)'
    var params =[data.title, data.link, data.dueDate, data.description]
    db.run(sql, params, function (err: { message: any; }, result: any) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : Math.floor(Math.random() * 50)
        })
    });
})

app.delete("/api/assignments/:id", (req, res, next) => {
    db.run(
        'DELETE FROM assignments WHERE id = ?',
        req.params.id,
        function (err: any, result: any) {
            if (err){
                res.status(400).json({"error": res})
                return;
            }
            res.json({"message":"deleted"})
    });
})

app.patch("/api/assignments/:id", (req, res, next) => {
    var data = {
        title: req.body.title,
        link: req.body.link,
        dueDate: req.body.dueDate,
        description: req.body.description
    }
    var sql = `UPDATE assignments set 
        title = coalesce(?,title), 
        link = coalesce(?,link), 
        dueDate = coalesce(?,dueDate),
        description = coalesce(?,description)
        WHERE id = ?`
    var params = [
        data.title, 
        data.link, 
        data.dueDate, 
        data.description,
        req.params.id
    ]
    db.run(
        sql,
        params,
        function (err: any, result: any) {
            if (err){
                res.status(400).json({"error": "error"})
                return;
            }
            res.json({
                "message": "success",
                "data": data
            })
    });
})

app.get("/api/assignments/:id", (req, res, next) => {
    var sql = "select * from assignments where id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err: { message: any; }, row: any) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
});

app.listen(5174, () => {
    console.log(`Server Started at ${5174}`)
})