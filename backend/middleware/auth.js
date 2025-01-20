// import jwt from 'jsonwebtoken'

// const authUser = async (req, res, next ) => {

//     const {token } = req.body

//     if (!token) {
//         return res.json({success: false, message: 'Not Authorized Login Again'})
//     }

//     try {
//         const token_decode = jwt.verify({token}, process.env.JWT_SECRET)
//         req.body.userId = token_decode.id 
//         next()

//     } catch (error) {
//         console.log(error)
//         res.json({ success: false, message: error.message })
        
//     }
// }

// export default authUser

// // const authUser = (req, res, next) => {
// //     const authHeader = req.headers.authorization;
// //     const token = authHeader && authHeader.split(' ')[1];
  
// //     if (!token) {
// //       return res.status(401).json({ success: false, message: 'Not Authorized. Login Again.' });
// //     }
  
// //     try {
// //       const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //       req.userId = decoded.id;
// //       next();
// //     } catch (error) {
// //       console.log('Token verification error:', error.message);
// //       return res.status(403).json({ success: false, message: 'Invalid Token' });
// //     }
// //   };
// // export default authUser  





// // import jwt from 'jsonwebtoken';

// // const authUser = (req, res, next) => {
// //     const authHeader = req.headers.authorization;
// //     const token = authHeader && authHeader.split(' ')[1]; // Extract the token from the Authorization header

// //     if (!token) {
// //         return res.status(401).json({ success: false, message: 'Not Authorized. Login Again.' });
// //     }

// //     try {
// //         const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token with the secret key
// //         req.userId = decoded.id; // Attach the decoded user ID to the request
// //         next(); // Proceed to the next middleware
// //     } catch (error) {
// //         console.log('Token verification error:', error.message);
// //         return res.status(403).json({ success: false, message: 'Invalid Token' });
// //     }
// // };

// // export default authUser;








// // import jwt from 'jsonwebtoken';

// // const authUser = (req, res, next) => {
// //     const authHeader = req.headers.authorization;
// //     const token = authHeader && authHeader.split(' ')[1];

// //     if (!token) {
// //         return res.status(401).json({ success: false, message: 'Not Authorized. Login Again.' });
// //     }

// //     try {
// //         const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //         req.userId = decoded.id;
// //         next();
// //     } catch (error) {
// //         console.log('Token verification error:', error.message);
// //         return res.status(403).json({ success: false, message: 'Invalid Token' });
// //     }
// // };

// // export default authUser



// // import userModel from '../models/userModel';

// // import jwt from 'jsonwebtoken';

// // const authUser  = async (req, res, next) => {
// //     const { token } = req.body;

// //     if (!token) {
// //         return res.json({ success: false, message: 'Not Authorized. Login Again' });
// //     }

// //     try {
// //         // Pass the token directly to jwt.verify
// //         const token_decode = jwt.verify({token}, process.env.JWT_SECRET);
// //         req.body.userId = token_decode.id; // Assuming the token contains an 'id' field
// //         next();
// //     } catch (error) {
// //         console.log(error);
// //         res.json({ success: false, message: error.message });
// //     }
// // };

// // export default authUser ; 


// // import jwt from 'jsonwebtoken';

// // const authUser = async (req, res, next) => {
// //     // You can log the incoming authorization header to confirm if the token is being passed correctly
// //     console.log('Authorization Header:', req.headers.authorization);

// //     const token = req.headers.authorization && req.headers.authorization.split(' ')[1]; // Extract token from "Bearer <token>"

// //     if (!token) {
// //         return res.status(401).json({ success: false, message: 'Not Authorized. Login Again.' });
// //     }

// //     // For debugging, replace the token with a hardcoded one (only for testing)
// //     const tokenForTest = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ODUzOGY1YWJjZTg0YWVhY2Q2OWYyYiIsImlhdCI6MTczNjc4NzkyNn0.M1u_B1P7gnrwBYchV4InAFezmJiAPEBdK4TqHsb6lZQ'; // Replace with an actual token you get after logging in
// //     try {
// //         // Try to decode the hardcoded token for testing purposes
// //         const decoded = jwt.verify(tokenForTest, process.env.JWT_SECRET);
// //         console.log('Decoded Token:', decoded); // Check if token is decoded correctly
// //         req.userId = decoded.id; // Attach the user ID to the request
// //         next(); // Proceed to the next middleware
// //     } catch (error) {
// //         console.error('Token verification error:', error.message); // Log the error if token verification fails
// //         return res.status(403).json({ success: false, message: 'Invalid Token' });
// //     }
// // };

// // export default authUser;


/////////////////////////////////////////this is nice one down one /////////////////////


import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // Extract token

    if (!token) {
        return res.status(401).json({ success: false, message: 'Not Authorized. Login Again.' });
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id; // Attach userId to req.body
        next();
    } catch (error) {
        console.log('Auth Error:', error.message);
        return res.status(403).json({ success: false, message: 'Invalid Token' });
    }
};

export default authUser;










// import jwt from 'jsonwebtoken';

// const authUser = (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.split(' ')[1];
//     if (!token) {
//       return res.status(401).json({ success: false, message: 'Unauthorized' });
//     }

//     const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = decodedToken.id; // Attach user ID to request
//     next();
//   } catch (error) {
//     res.status(401).json({ success: false, message: 'Invalid token' });
//   }
// };

// export default authUser;
