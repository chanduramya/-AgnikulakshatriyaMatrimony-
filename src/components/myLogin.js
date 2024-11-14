import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setErrors] = useState({
 
  // });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true)
    const newUser = {  username:email, password:password };
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', newUser);
      console.log(response.data);  // Handle the response
    } catch (error) {
      console.error('Error registering user:', error.response.data);
    }
  
    console.log('Logging in:', { email, password });
  };
  if (isSubmitted) {
    return<Navigate to="/dashboard" />;
  }
  // // const validate = () => {
  // //   const errors = {};

  // //   // Email validation (required and valid email format)
  // //   if (!email.email) {
  // //     errors.email = 'Email is required';
  // //   } else if (!/\S+@\S+\.\S+/.test(email.email)) {
  // //     errors.email = 'Email address is invalid';
  // //   }

  // //   // Password validation (required)
  // //   if (!password.password) {
  // //     errors.password = 'Password is required';
  // //   }

  // //   setErrors(error);
  // //   return Object.keys(error).length === 0; // Return true if no errors
  // // };
  // // if (validate()) {
    
  // //   console.log('Form Submitted:', email);
  // //   // Here you can integrate an API call for login
  // //   // Simulate a successful login after a delay
  // //   setTimeout(() => {
  // //     // setIsSubmitting(false);
  // //     alert('Login successful');
  // //   }, 1000);
  // }

  return (
    <Container maxWidth="sm">
      <Box 
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: 4,
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}>
   
    <Typography variant="h5" component="h1" align="center" gutterBottom>
          Login
        </Typography>
      <TextField
        type="name"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
      {/* <Redirect to="/dashboard" />  */}
       Login
        </Button>
        {isSubmitted && (
          <Typography variant="body1" color="success.main" align="center" sx={{ mt: 2 }}>
            Login Successful!
          </Typography>
        )}
    </Box>
    </Container>
        
  );
};

export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { TextField, Button, Grid, Typography, Container, FormHelperText } from '@mui/material';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [errors, setErrors] = useState({
//     email: '',
//     password: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   // Validation function
//   const validate = () => {
//     const errors = {};

//     // Email validation (required and valid email format)
//     if (!formData.email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = 'Email address is invalid';
//     }

//     // Password validation (required)
//     if (!formData.password) {
//       errors.password = 'Password is required';
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0; // Return true if no errors
//   };

//   // Handle form submission
//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     try {
//            const response = await axios.post('http://localhost:5000/api/auth/login', formData);
//              console.log(response.data);  // Handle the response
//          } catch (error) {
//            console.error('Error registering user:', error.response.data);
//          }
        
//            console.log('Logging in:', { formData });
//        };
//     if (validate()) {
//       setIsSubmitting(true);
//       console.log('Form Submitted:', formData);
//       // Here you can integrate an API call for login
//       // Simulate a successful login after a delay
//       setTimeout(() => {
//         setIsSubmitting(false);
//         alert('Login successful');
//       }, 1000);
//     }


//   return (
//     <Container maxWidth="xs">
//       <Typography variant="h5" gutterBottom align="center">
//         Login
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={4}>
//           {/* Email */}
//           <Grid item xs={12}>
//             <TextField
//               label="Email"
//               variant="outlined"
//               fullWidth
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               error={Boolean(errors.email)}
//               helperText={errors.email}
//               required
//             />
//           </Grid>

//           {/* Password */}
//           <Grid item xs={12}>
//             <TextField
//               label="Password"
//               variant="outlined"
//               fullWidth
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               error={Boolean(errors.password)}
//               helperText={errors.password}
//               required
//             />
//           </Grid>

//           {/* Submit Button */}
//           <Grid item xs={12}>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? 'Logging in...' : 'Login'}
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );

// };
// export default Login;
