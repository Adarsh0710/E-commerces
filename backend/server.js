import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connetCloudinary from './config/cloudinary.js'
import userRouter from './routers/userRoute.js'
import productRouter from './routers/productRoute.js'
import cartRouter from './routers/cartRoute.js'
import orderRouter from './routers/orderRoute.js'
// import orderRouter from './routers/orderRoute.js'



// App Config

const app =express()
const port = process.env.PORT || 5000
connectDB()
connetCloudinary()

// Middleware

app.use(express.json())
app.use(cors())

// api endpoint 
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
// app.use('/api/order',orderRouter)
app.use('/api/order', orderRouter)




app.get('/',(req,res)=>{
    res.send("API WORKING")
})

app.listen(port, ()=> console.log('server on PORT : '+port))