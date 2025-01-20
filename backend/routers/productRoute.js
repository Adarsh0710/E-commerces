import express from 'express'
import { listProduct, addProduct, removeProduct, singalProduct } from '../controllers/productController.js'
import upload from '../middleware/mullter.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

// productRouter.post('/add',adminAuth,upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addProduct);
// productRouter.post('/removed',adminAuth,removeProduct);
// productRouter.post('/singal',singalProduct);
// productRouter.get('/list',listProduct);

productRouter.post('/add',adminAuth,upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addProduct);
productRouter.post('/removed',adminAuth,removeProduct);
productRouter.post('/singal',singalProduct);
productRouter.get('/list',listProduct);

export default productRouter


// import express from 'express';
// import {
//   listProduct,
//   addProduct,
//   removeProduct,
//   singalProduct,
// } from '../controllers/productController.js';
// import upload from '../middleware/mullter.js';
// import adminAuth from '../middleware/adminAuth.js';

// const productRouter = express.Router();

// // Add a product with image upload
// productRouter.post(
//   '/add',
//   adminAuth,
//   upload.fields([
//     { name: 'image1', maxCount: 1 },
//     { name: 'image2', maxCount: 1 },
//     { name: 'image3', maxCount: 1 },
//     { name: 'image4', maxCount: 1 },
//   ]),
//   addProduct
// );

// // Remove a product
// productRouter.post('/remove', adminAuth, removeProduct);

// // Get a single product
// productRouter.post('/single', singalProduct);

// // List all products
// productRouter.get('/list', listProduct);

// export default productRouter;
