var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// set port
app.listen(3001, function () {
  console.log("Node app is running on port 3001");
});
app.get("/", (req, res) => {
  res.send("hello world");
});
// require routes
// retourner un utilisateur
const user = require("./Routes/Utilisateur/oneuser");
// login
const login = require("./Routes/Utilisateur/login");
// crud utilisateur
const ajouter_utilisateur = require("./Routes/Utilisateur/creer_utilisateur");
const modifier_utilsateur = require("./Routes/Utilisateur/modifier_utilisateur");
const supprimer_utilsateur = require("./Routes/Utilisateur/supprimer_utilisateur");
// valider compte utilisateur (de type livreur ou commerçant)
const valider_compte = require("./Routes/Utilisateur/valider_compte");
// les listes
const liste_utilisateurs = require("./Routes/Utilisateur/liste_utilisateurs");
const comptes_nonvalides = require("./Routes/Utilisateur/comptes_nonvalides");
const liste_clients = require("./Routes/Utilisateur/liste_clients");
const liste_livreurs = require("./Routes/Utilisateur/liste_livreurs");
const liste_commercants = require("./Routes/Utilisateur/list_commercants");
// accepter marchandise
const changer_etat = require("./Routes/Marchandise/changer_etat");
const ajouter_livreur_marchandise = require("./Routes/LivreurMarchandise/add_livreur_marchandise");
// supprimer livreur-marchandise
const delete_livreur_marchandise=require("./Routes/LivreurMarchandise/delete")
// ajouter livreur vehicule
const ajouter_livreur_vehicule = require("./Routes/LivreurVehicule.js/addLivreurVehicule");
// crud marchandise
const ajouter_marchandise = require("./Routes/Marchandise/creer_marchandise");
const supprimer_marchandise=require("./Routes/Marchandise/delete");
const modifier_marchandise=require("./Routes/Marchandise/edit")
const adresse = require("./Routes/Marchandise/adresse");
const adresse_marchandise = require("./Routes/Marchandise/adresse_marchandise");
// ajouter note
const note = require("./Routes/Utilisateur/note");


// ajouter nouveau utilisateur
app.use("/nouveau_utilisateur", ajouter_utilisateur);
// se connecter
app.use("/login", login);
// liste des utilisateurs
app.use("/liste-utilisateurs", liste_utilisateurs);
// retourner un seul utilisateur
app.use("/utilisateurs", user);
//valider compte utilisateur(de type livreur ou commercant)
app.use("/valider/compte", valider_compte);
// liste des comptes non validés par l'admin
app.use("/comptes/nonvalides", comptes_nonvalides);
// liste des  utilisateurs de type clients 
app.use("/liste/clients", liste_clients);
// liste des  utilisateurs de type livreurs 
app.use("/liste/livreurs", liste_livreurs);
// liste des  utilisateurs de type commerçants 
app.use("/liste/commercants", liste_commercants);
// supprimer un utilisateur
app.use("/supprimer/utilisateur", supprimer_utilsateur);
// modifier un utilisateur
app.use("/modifier/utilisateur", modifier_utilsateur);
// ajouter une marchandise
app.use("/nouveau/marchandise", ajouter_marchandise);
// ajouter une adresse non existante
app.use("/ajouter/adresse", adresse);
// ajouter une adresse marchandise 
app.use("/ajouter/adresse/marchandise", adresse_marchandise);
//supprimer une marchandise 
app.use("supprimer/marchandise",supprimer_marchandise);
// modifier une machandise 
app.use("modifier/marchandise",modifier_marchandise);
// ajouter un livreur vehicule
app.use("/ajouter/livreur/vehicule", ajouter_livreur_vehicule);
// accepter une marchandise =changer etat à accepter +créer un livreurmarchandise 
app.use("/accepter/marchandise/changer/etat", changer_etat);
app.use("/accepter/marchandise/ajouter/livreur_marchandise",ajouter_livreur_marchandise);
// supprimer un livreur marchandise si la livraison est annulée
app.use("/supprimer/livreur_marchandise",delete_livreur_marchandise);
// ajouter une note par le client
app.use("/ajouter/note", note);
