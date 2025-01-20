import {v2 as cloudinary } from "cloudinary"
import productModel from "../models/productModel.js"



//fucion for add product
const addProduct = async (req, res) => {

    try {
        

        const {name, description, price, category, subCategory, sizes, bestseller} = req.body

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1,image2,image3,image4].filter((item)=> item !== undefined)

        let imageUrl = await Promise.all(
            images.map(async (item) => {
                // let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });

                return  result.secure_url 
            })
        )

        // console.log(name, description, pricr, category, subCategory, sizes, bestseller)
        // console.log(imageUrl)

        const productData = {
            name,
            description,
            category,
            price:Number(price),
            subCategory,
            bestseller : bestseller === "true" ? true : false,
            sizes: (() => {
                try {
                    return JSON.parse(sizes); // Safely parse sizes
                } catch (error) {
                    console.error("Invalid JSON for sizes:", sizes);
                    throw new Error("Sizes must be a valid JSON array (e.g., [\"S\", \"M\", \"L\"])");
                }
            })(),
            image:imageUrl,
            date: Date.now()
           

    }

      console.log(productData);
      const product =  new productModel(productData)
      await product.save()
    

        res.json({success:true, message:"Product Added"})
        // console.log(name,description,price,category,subCategory,sizes,bestseller);
        // console.log(image1,image2,image3,image4);
        // res.json({})
        
        
        

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

//fuction for list product 
const listProduct = async (req, res) => {

    try {
        
        const product = await productModel.find({});
        res.json({success:true,product})

    } catch (error) {
        console.log(error);
        
        res.json({success:false,message:error.message})
    }


    // try {
    //     const products = await productModel.find({}); // Fetch all products
    //     res.json({ success: true, product: products }); // Ensure consistent key structure
    //   } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ success: false, message: 'Failed to fetch product list' });
    //   }
}

// fuction for the remove the product
const removeProduct = async (req, res) => {
   
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Product Removed "})

    } catch (error) {
        console.log(error);
        
        res.json({success:false,message:error.message})
    }

}

// fuction for the singal product
const singalProduct = async (req, res) => {

    try {
        
        const { productId } = req.body
        const product = await productModel.findById(productId)
        res.json({success:true,product})

    } catch (error) {
        console.log(error);
        
        res.json({success:false,message:error.message})
    }

}

export { listProduct, addProduct, removeProduct, singalProduct }




// // import { v2 as cloudinary } from "cloudinary";
// // import productModel from "../models/productModel.js";

// // // Function for adding a product
// // const addProduct = async (req, res) => {
// //   try {
// //     const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

// //     const image1 = req.files.image1 && req.files.image1[0];
// //     const image2 = req.files.image2 && req.files.image2[0];
// //     const image3 = req.files.image3 && req.files.image3[0];
// //     const image4 = req.files.image4 && req.files.image4[0];

// //     const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

// //     const imageUrl = await Promise.all(
// //       images.map(async (item) => {
// //         const result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
// //         return result.secure_url;
// //       })
// //     );

// //     const productData = {
// //       name,
// //       description,
// //       category,
// //       price: Number(price),
// //       subCategory,
// //       bestseller: bestseller === "true",
// //       sizes: (() => {
// //         try {
// //           return JSON.parse(sizes); // Safely parse sizes
// //         } catch (error) {
// //           console.error("Invalid JSON for sizes:", sizes);
// //           throw new Error("Sizes must be a valid JSON array (e.g., [\"S\", \"M\", \"L\"])");
// //         }
// //       })(),
// //       image: imageUrl,
// //       date: Date.now(),
// //     };

// //     console.log(productData);
// //     const product = new productModel(productData);
// //     await product.save();

// //     res.json({ success: true, message: "Product Added" });
// //   } catch (error) {
// //     console.log(error);
// //     res.json({ success: false, message: error.message });
// //   }
// // };

// // // Function for listing products
// // const listProduct = async (req, res) => {
// //   try {
// //     const products = await productModel.find({});
// //     res.json({ success: true, products });
// //   } catch (error) {
// //     console.log(error);
// //     res.json({ success: false, message: error.message });
// //   }
// // };

// // // Function for removing a product
// // const removeProduct = async (req, res) => {
// //   try {
// //     await productModel.findByIdAndDelete(req.body.id);
// //     res.json({ success: true, message: "Product Removed" });
// //   } catch (error) {
// //     console.log(error);
// //     res.json({ success: false, message: error.message });
// //   }
// // };

// // // Function for fetching a single product
// // const singalProduct = async (req, res) => {
// //   try {
// //     const { productId } = req.body;
// //     const product = await productModel.findById(productId);
// //     res.json({ success: true, product });
// //   } catch (error) {
// //     console.log(error);
// //     res.json({ success: false, message: error.message });
// //   }
// // };

// // export { listProduct, addProduct, removeProduct, singalProduct };






// // // import { v2 as cloudinary } from "cloudinary";
// // // import productModel from "../models/productModel.js";
// // // import dotenv from "dotenv";

// // // // Load environment variables
// // // dotenv.config();

// // // // Configure Cloudinary
// // // cloudinary.config({
// // //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// // //   api_key: process.env.CLOUDINARY_API_KEY,
// // //   api_secret: process.env.CLOUDINARY_API_SECRET,
// // // });

// // // if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
// // //     throw new Error("Missing Cloudinary API keys. Check your .env file.");
// // //   }
  

// // // // Function to add a product
// // // const addProduct = async (req, res) => {
// // //   try {
// // //     const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

// // //     const image1 = req.files?.image1?.[0];
// // //     const image2 = req.files?.image2?.[0];
// // //     const image3 = req.files?.image3?.[0];
// // //     const image4 = req.files?.image4?.[0];

// // //     const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

// // //     const imageUrls = await Promise.all(
// // //       images.map(async (item) => {
// // //         const result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
// // //         return result.secure_url;
// // //       })
// // //     );

// // //     const productData = {
// // //       name,
// // //       description,
// // //       category,
// // //       price: Number(price),
// // //       subCategory,
// // //       bestseller: bestseller === "true",
// // //       sizes: (() => {
// // //         try {
// // //           return JSON.parse(sizes);
// // //         } catch (error) {
// // //           console.error("Invalid JSON for sizes:", sizes);
// // //           throw new Error("Sizes must be a valid JSON array (e.g., [\"S\", \"M\", \"L\"])");
// // //         }
// // //       })(),
// // //       image: imageUrls,
// // //       date: Date.now(),
// // //     };

// // //     console.log(productData);

// // //     const product = new productModel(productData);
// // //     await product.save();

// // //     res.json({ success: true, message: "Product Added" });
// // //   } catch (error) {
// // //     console.error(error);
// // //     res.status(500).json({ success: false, message: error.message });
// // //   }
// // // };

// // // // Function to list all products
// // // const listProduct = async (req, res) => {
// // //   try {
// // //     const products = await productModel.find({});
// // //     res.json({ success: true, products });
// // //   } catch (error) {
// // //     console.error(error);
// // //     res.status(500).json({ success: false, message: error.message });
// // //   }
// // // };

// // // // Function to remove a product
// // // const removeProduct = async (req, res) => {
// // //   try {
// // //     await productModel.findByIdAndDelete(req.body.id);
// // //     res.json({ success: true, message: "Product Removed" });
// // //   } catch (error) {
// // //     console.error(error);
// // //     res.status(500).json({ success: false, message: error.message });
// // //   }
// // // };

// // // // Function to get a single product
// // // const singalProduct = async (req, res) => {
// // //   try {
// // //     const { productId } = req.body;
// // //     const product = await productModel.findById(productId);
// // //     res.json({ success: true, product });
// // //   } catch (error) {
// // //     console.error(error);
// // //     res.status(500).json({ success: false, message: error.message });
// // //   }
// // // };

// // // export { listProduct, addProduct, removeProduct, singalProduct };
