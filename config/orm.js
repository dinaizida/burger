var connection = require("./connection.js");

var orm = {
    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    insertOne: function(table, colName, colValue, callback) {
        var query = "INSERT INTO ?? (??) VALUES (?);";
        connection.query(query, [table, colName, colValue], function(err, result) {
            if (err) throw err;
            console.log("Burger added: " + colName + " : " +colValue);
            callback(result);
        });
    },
    updateOne: function(table, colName, colValue, idCol, idValue, callback) {
        var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?;";
        connection.query(query, [table, colName, colValue, idCol, idValue], function(err, result) {
            if (err) throw err;
            console.log("Burger updated : " + colName + " : " + colValue + ", " + idCol + " :" + idValue);
            callback(result);
        });
    },
    deleteOne: function(table, idCol, idValue, callback) {
      var query = "DELETE FROM ?? WHERE ?? = ?;"
      connection.query(query, [table, idCol, idValue], function(err, result) {
        if (err) throw err;
        console.log("Burger deleted number: " + idValue);
        callback(result);
      })
    }
};

module.exports = orm;
