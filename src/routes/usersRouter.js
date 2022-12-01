const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

//******Routes******

    // listar usuarios
    router.get("/", usersController.usersList)

    // Crear usuarios
    router.get("/addUser", usersController.addUser);  
    router.post("/addUser", usersController.create);

    // Editar Usuarios
    router.get("/editUser/:id", usersController.editUser);
    router.put("/editUser/:id", usersController.update);

    // Eliminar usuarios
    router.delete("/delete/:id", usersController.delete);


module.exports = router;    