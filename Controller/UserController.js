var bodyParser = require("body-parser");
var mysql = require("mysql2");

//  configuration de la connection
var dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "reactjs!nodejs$ingenieurinformatique",
  database: "livraison",
  multipleStatements: true,
});

// se connecter à la base de données
dbConn.connect();

// retourner la liste de tous les utilsateurs
exports.getAllusers = async (req, res) => {
  dbConn.query("SELECT * FROM user", function (err, results, fields) {
    if (err) return err;
    res.status(200).json({
      results: results,
    });
  });
};
// ajouter un nouveau utilisateur

exports.createuser = (req, res) => {
  const user = req.body;
  console.log(user.type);
  if (user.type === "Client") {
    dbConn.query(
      "insert into user (nom,email,password,telephone,id_type,account_validation) values(?,?,?,?,(SELECT id_type from type_utilisateur where is_client=true),true)",
      [user.nom, user.email, user.password, user.telephone],
      (err, fields) => {
        if (!err) res.send("User successfully added");
        else console.log(err);
      }
    );
  } else  if(user.type==="Livreur") {
    dbConn.query(
      "insert into user (nom,email,password,telephone,id_type,account_validation) values(?,?,?,?,(SELECT id_type from type_utilisateur where is_livreur=true),false)",
      [user.nom, user.email, user.password, user.telephone, user.type],
      (err) => {
        if (!err) res.send("User successfully added");
        else console.log(err);
      }
    );
  }
  else 
  dbConn.query(
    "insert into user (nom,email,password,telephone,id_type,account_validation) values(?,?,?,?,(SELECT id_type from type_utilisateur where is_commercant=true),false)",
    [user.nom, user.email, user.password, user.telephone, user.type],
    (err) => {
      if (!err) res.send("User successfully added");
      else console.log(err);
    }
  );
};

//mettre à jour  les données d'un utilisateur
exports.update_user = (req, res) => {
  const user_id = req.params.id;
  const user = req.body;
  console.log(user_id);
  dbConn.query(
    "UPDATE user SET nom = ? ,email=?,password=?,telephone=? WHERE id = ?",
    [user.nom, user.email, user.password, user.telephone, user_id],
    function (error, results) {
      if (error) return error;
      return res.send({
        results: results,
        message: "user has been updated successfully.",
      });
    }
  );
};
// se connecter
exports.login = (req, res) => {
  const passw = req.body.password;
  const email = req.body.email;
  dbConn.query(
    "select * from user  where email=? && password =?",
    [email, passw],
    function (error, results, fields) {
      if (error) return error;
      return res.send({
        results: results[0],
      });
    }
  );
};
// supprimer  un utilisateur

exports.delete_user = (req, res) => {
  let user_id = req.params.id;
  dbConn.query(
    "DELETE FROM user  WHERE id=?",
    user_id,
    function (error, results) {
      if (error) return error;
      return res.send({
        results: results,
        message: "user has been deleted successfully.",
      });
    }
  );
};

// valider compte utilisateur (utilisateur de type client ou intermediaire )
exports.validate_account = (req, res) => {
  let user_id = req.params.id;
  dbConn.query(
    "UPDATE user SET account_validation=true WHERE id = ?",
    user_id,
    function (error, results, fields) {
      if (error) return error;
      return res.send({
        results: results,
        message: "user account has been validate successfully.",
      });
    }
  );
};
//  retourner la liste de comptes non validées par l'administrateur
exports.getUnvalidate_accounts = (req, res) => {
  dbConn.query(
    "SELECT * FROM user where account_validation=false ",
    function (err, results) {
      if (err) return err;
      res.status(200).json({
        results: results,
      });
    }
  );
};
// retourner la liste de tous les clients
exports.getlistClient = (req, res) => {
  dbConn.query(
    "SELECT * FROM user where id_type=(select id_type from type_utilisateur where is_client=true)  ",
    function (err, results) {
      if (err) return err;
      res.status(200).json({
        results: results,
      });
    }
  );
};
// retourner la liste de tous les livreurs
exports.getLivreurs = (req, res) => {
  dbConn.query(
    "SELECT * FROM user where id_type=(select id_type from type_utilisateur where is_livreur=true)  ",
    function (err, results) {
      if (err) return err;
      res.status(200).json({
        results: results,
      });
    }
  );
};
// retourner la liste de tous les commercants
exports.getCommercants = (req, res) => {
  dbConn.query(
    "SELECT * FROM user where id_type=(select id_type from type_utilisateur where is_commercant=true)   ",
    function (err, results) {
      if (err) return err;
      res.status(200).json({
        results: results,
      });
    }
  );
};
// trouver un utisateur
exports.getoneuser = (req, res) => {
  const id = req.params.id;
  console.log(id);
  dbConn.query("select * from user where id=?", id, function (error, results) {
    if (error) return error;
    res.status(200).json({
      results: results[0],
    });
  });
};
// noter un client
exports.noter = (req, res) => {
  const values = req.body;
  dbConn.query(
    "insert into note (note_text,note_number,id_client,id_utilisateur) values(?,?,?,?)",
    [values.note1, values.note2, values.id_user1, values.id_user2],
    (err) => {
      if (!err) res.send("note successfully added");
      else console.log(err);
    }
  );
};
