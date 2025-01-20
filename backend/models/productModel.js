// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//     name : { type:String,  required:true},
//     description : { type:String,  required:true },
//     price : { type: Number, required: true},
//     image: { type: Array, required: true},
//     category : { type: String, required: true},
//     subCategory : { type: Number, required: true},
//     sizes : { type: Number, required: true},
//     bestseller :{ type : Boolean},
//     date : {type: Number ,required : true}


//  })

// const productModle = mongoose.models.product ||  mongoose.model("product",productSchema);

// export default productModle


import mongoose from "mongoose";

// Define the product schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: [String], required: true }, // Array of strings for image URLs
  category: { type: String, required: true }, // Fixed typo from "catgory"
  subCategory: { type: String, required: true }, // Fixed typo from "subCatgory" and changed type to String
  sizes: { type: [String], required: true }, // Array of strings for sizes (e.g., ["S", "M", "L"])
  bestseller: { type: Boolean, default: false },
  date: { type: Date, default: Date.now }, // Changed to Date type with default value
});



// Create the model
const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;




