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
// ajouter un livreur_vehicule
exports.addliv_vehicule = (req, res) => {
  const livreur = req.body;
  dbConn.query(
    "insert into livreur_vehicule (id_type_vehicule,id_dimension,id_poids,id_type_marchandise,id_utilisateur) values (?,?,?,?,?)",
    [
      livreur.id_vehicule,
      livreur.id_dimension,
      livreur.id_poids,
      livreur.id_type_marchandise,
      livreur.id_user,
    ],
    (err) => {
      if (!err) res.send("livreur_vehicule successfully added");
      else console.log(err);
    }
  );
};


