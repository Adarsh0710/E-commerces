// import jwt from 'jsonwebtoken'

// const adminAuth = async (req,res,next) =>{
//     try {
//         const { token } = req.headers
//         if (!token) {
//             return res.json({success : false, message:"Not Authorized Login Again"})
            
//         }
//         const token_decode = jwt.verify(token,process.env.JWT_SECRET);
//         if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASS) {
//             return res.json({success : false, message:"Not Authorized Login Again"})
//         }
//         next()
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:error.message})
//     }
// }

// export default adminAuth






import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Check if the Authorization header exists
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Not Authorized, Login Again' });
    }

    // Extract the token
    const token = authHeader.split(' ')[1];

    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log('Decoded token:', decoded); // Log the decoded token for debugging

    // Check if the decoded token matches admin credentials
    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({ success: false, message: 'Forbidden, Admin Access Only' });
    }

    next();
  } catch (error) {
    console.error('Token validation error:', error);
    res.status(401).json({ success: false, message: 'Token is invalid or expired' });
  }
};

export default adminAuth;
