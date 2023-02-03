var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err: { message: any; }) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE assignments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title text,
            link text, 
            dueDate Date, 
            description text
            )`,
        (err: any) => {
            if (err) {
                // Table already created
            }
            // else{
            //     // Table just created, creating some rows
            //     var insert = 'INSERT INTO assignments (title, link, dueDate, description) VALUES (?,?,?,?)'
            //     db.run(insert, ["Week One WorkSheet","www.google.com","2023-11-12", "This is the description for week one's work sheet."])
            //     db.run(insert, ["Week Two WorkSheet","www.google.com","2023-12-12", "This is the description for week Two's work sheet."])
            //   }
        });  
    }
});


module.exports = db
