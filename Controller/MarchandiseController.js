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
// ajouter une  nouvelle marchandise  (utilisateur de type  client)
exports.creer_marchandise = (req, res, next) => {
  const values = req.body;

  dbConn.query(
    "INSERT INTO utilisateur_marchandise (title_marchandise, description_marchandise, poids_marchandise, dimension_marchandise, type_marchandise,id_utilisateur, date_enlevement, heure_enlevement,id_type,id_vehicule_type) VALUES(?,?,?,?,?,?,?,?,?)",
    [
      values.title_mar,
      values.descr,
      values.poids,
      values.dimension,
      values.typemarch,
      values.id_user,
      values.date_enle,
      values.heure_enl,
      values.id_vehicule_type,
    ],
    function (err, data) {
      if (err) return err;
      res.status(201).json({
        data: data,
        message: " added!",
      });
    }
  );
};
// Supprimer marchandise 
exports.delete_marchandise=(req,res)=>{
   dbConn.query(
     "DELETE FROM utilisateur_marchandise  WHERE id=?",
     req.params.id,
     function (error, results) {
       if (error) return error;
       return res.send({
         results: results,
         message: "user has been deleted successfully.",
       });
     }
   );
  
}

// modifier marchandise 
exports.update_marchandise=(req,res)=>{
  const id=req.params.id;
  const values=req.body;
   dbConn.query(
     "UPDATE utilisateur_marchandise  SET title_marchandise = ? ,description_marchandise=?,poids_marchandise=?,dimension_marchandise=? , date_enlevement=?, heure_enlevement=?, type_marchandise=?,id_type =?, id_vehicule_type=? WHERE id = ?",
     [
       values.titre,
       values.description,
       values.poids,
       values.dimension,
       values.date_enl,
       values.heure_enl,
       values.type_marchandise,
       values.id_type,
       values.id_vehicule,
       id,
     ],
     function (error, results) {
       if (error) return error;
       return res.send({
         results: results,
         message: "marchandise has been updated successfully.",
       });
     }
   );
}
// supprimer marchandise 
exports.delete_marchandise=(req,res)=>{
  const id=req.params.id;
  dbConn.query(
    "DELETE FROM utilisateur_marchandise  WHERE id=?",
    id,
    function (error, results) {
      if (error) return error;
      return res.send({
        results: results,
        message: "marchandise has been deleted successfully.",
      });
    }
  );
}
// accepter une marchandise (utilsateur de type  livreur )
exports.changer_etat_marchandise = (req, res) => {
  dbConn.query(
    " UPDATE etat_marchandise SET id_etat =(select id_etat from etat where title_etat='accepted')  WHERE id = ?",
    [req.params.id],
    function (err, data) {
      if (err) return err;
      res.status(201).json({
        data:data,
        message: " added!",
      });
    }
  );
};



exports.creer_adresse=(req,res)=>{
  const values=req.body;
  console.log(values.country);
  console.log(values.city);
  console.log(values.postale_code);
  console.log(values.id_user);
  dbConn.query(
    "INSERT INTO adresse (city,state,country,postale_code,id_utilisateur) VALUES(?,?,?,?,?)",
    [values.city,values.state,values.county,values.postale_code,values.id_user],
    function (err) {
      if (err) return err;
      res.status(201).json({
        status: "success",
        message: " added!",
      });
    }
  );
}
exports.creer_adresse_marchandise=(req,res)=>{
const values=req.body;
 dbConn.query(
   "INSERT INTO adresse_marchandise (from_adress, to_adress,id_marchandise) VALUES(?,?,?)",
   [
   values.from,
   values.to,
   values.id_marchandise

   ],
   function (err, data, fields) {
     if (err) return err;
     res.status(201).json({
       status: "success",
       message: " added!",
     });
   }
 );

}