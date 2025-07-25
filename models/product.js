const mongoose = require('mongoose');

// Définition du schéma du produit
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  inStock: { type: Boolean, default: true }
});

// Export du modèle
module.exports = mongoose.model('Product', productSchema);
