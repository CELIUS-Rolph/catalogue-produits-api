const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Définition des routes CRUD
router.post('/', productController.createProduct); // Créer un produit
router.get('/', productController.getAllProducts); // Liste des produits
router.get('/:id', productController.getProductById); // Produit par ID
router.put('/:id', productController.updateProduct); // Mettre à jour un produit
router.delete('/:id', productController.deleteProduct); // Supprimer un produit

module.exports = router;