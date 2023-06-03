const express = require("express");
const{ getItems, postItems, getSingleItem, deleteItem, updateItem }= require("../controllers/itemsControllers");

/*Router */
const router = express.Router();

/*====================== get all itens ===========================*/
router.get("/",getItems);
/*====================== get  a item ===========================*/
router.get("/:id", getSingleItem);
/*====================== post  a item ===========================*/
router.post("/", postItems);
/*====================== delete  a item ===========================*/
router.delete("/:id",deleteItem);
/*====================== update a item ===========================*/
router.patch("/:id", updateItem);


module.exports = router;
