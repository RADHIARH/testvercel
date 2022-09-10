var bodyParser = require("body-parser");
var mysql = require("mysql2");

//  configuration de la connection
var dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "reactjs!nodejs$ingenieurinformatique",
  database: "livraison",
});

// se connecter à la base de données
dbConn.connect();
// creer livreur_marchandise 
exports.create_livreur_marchandise = (req, res, next) => {
  const values = req.body;
  dbConn.query(
    "INSERT INTO livreur_marchandise (id_marchandise, id_livreur_vehicule) VALUES(?,?)",
    [values.id_marchandise, values.id_livreur],
    (err) => {
      if (!err) res.send("livreur_marchandise successfully added");
      else console.log(err);
    }
  );
};
// delete livreur_marchandise

exports.delete_livreur = (req, res) => {
  const id = req.params.id;
  dbConn.query(
    "DELETE FROM livreur_marchandise  WHERE id=?",
    id,
    function (error, results) {
      if (error) return error;
      return res.send({
        results: results,
        message: "livreur has been deleted successfully.",
      });
    }
  );
};

