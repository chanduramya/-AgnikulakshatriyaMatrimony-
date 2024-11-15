// import React, { useState } from 'react';
// import axios from 'axios';
// import { TextField, Button, Typography, Container, Box } from '@mui/material';
// import { Navigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // const [error, setErrors] = useState({
 
//   // });
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [errors, setErrors] = useState({});
//    const [loading, setLoading] = useState(false);

//   const history = useHistory(); 

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'email') {
//       setEmail(value);
//     } else if (name === 'password') {
//       setPassword(value);
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     // Check if email is provided and is in a valid format
//     if (!email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = 'Email is invalid';
//     }

//     // Check if password is provided
//     if (!password) {
//       newErrors.password = 'Password is required';
//     }

//     setErrors(newErrors);

//     // Return true if no errors
//     return Object.keys(newErrors).length === 0;
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitted(true)
//     const newUser = { email:email, password:password };
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', newUser);
     
//       console.log(response.data);  // Handle the response
//     } 
//     const data = await response.json();

//     if (data.token) {
//       // Store JWT token in localStorage
//       localStorage.setItem('token', data.token);

//       // Redirect to dashboard page
//       history.push('/dashboard');
//     }
//     else {
//       alert(data.message || 'Login failed');
//     }
//     catch (error) {
//       console.error(err);
//         alert('Login failed');
//       console.error('Error registering user:', error.response.data);
//     }
  

//     console.log('Logging in:', { email, password });
//     if (validateForm()) {
//       // Handle login (e.g., call API to authenticate)
//       console.log('Login successful:', { email, password });
//       // Reset form after successful submission
//       setEmail('');
//       setPassword('');
//     }
//   };

  
//   return (
//     <Container maxWidth="sm">
//       <Box 
//       component="form"
//       onSubmit={handleSubmit}
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         gap: 2,
//         padding: 4,
//         border: '1px solid #ccc',
//         borderRadius: '8px',
//       }}>
   
//     <Typography variant="h5" component="h1" align="center" gutterBottom>
//           Login
//         </Typography>
//       <TextField
//         type="name"
//         placeholder="Email"
//         value={email}
//         name="email"

//         onChange={handleChange}
//         required
//       />
//        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
//       <TextField
//         type="password"
//         placeholder="Password"
//          name="password"
//         value={password}
//         onChange={handleChange}
//         required
//       />
//           {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
//       <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
//       {/* <Redirect to="/dashboard" />  */}
//        Login
//         </Button>
//         {isSubmitted && (
//           <Typography variant="body1" color="success.main" align="center" sx={{ mt: 2 }}>
//             Login Successful!
//           </Typography>
//         )}
//     </Box>
//     </Container>
        
//   );
// };

// export default Login;


// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { TextField, Button, Grid, Typography, Container, FormHelperText } from '@mui/material';

// // const Login = () => {
// //   const [formData, setFormData] = useState({
// //     email: '',
// //     password: ''
// //   });

// //   const [errors, setErrors] = useState({
// //     email: '',
// //     password: ''
// //   });

// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   // Handle input changes
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value
// //     });
// //   };

// //   // Validation function
// //   const validate = () => {
// //     const errors = {};

// //     // Email validation (required and valid email format)
// //     if (!formData.email) {
// //       errors.email = 'Email is required';
// //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// //       errors.email = 'Email address is invalid';
// //     }

// //     // Password validation (required)
// //     if (!formData.password) {
// //       errors.password = 'Password is required';
// //     }

// //     setErrors(errors);
// //     return Object.keys(errors).length === 0; // Return true if no errors
// //   };

// //   // Handle form submission
// //   const handleSubmit = async(e) => {
// //     e.preventDefault();
// //     try {
// //            const response = await axios.post('http://localhost:5000/api/auth/login', formData);
// //              console.log(response.data);  // Handle the response
// //          } catch (error) {
// //            console.error('Error registering user:', error.response.data);
// //          }
        
// //            console.log('Logging in:', { formData });
// //        };
// //     if (validate()) {
// //       setIsSubmitting(true);
// //       console.log('Form Submitted:', formData);
// //       // Here you can integrate an API call for login
// //       // Simulate a successful login after a delay
// //       setTimeout(() => {
// //         setIsSubmitting(false);
// //         alert('Login successful');
// //       }, 1000);
// //     }


// //   return (
// //     <Container maxWidth="xs">
// //       <Typography variant="h5" gutterBottom align="center">
// //         Login
// //       </Typography>
// //       <form onSubmit={handleSubmit}>
// //         <Grid container spacing={4}>
// //           {/* Email */}
// //           <Grid item xs={12}>
// //             <TextField
// //               label="Email"
// //               variant="outlined"
// //               fullWidth
// //               type="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               error={Boolean(errors.email)}
// //               helperText={errors.email}
// //               required
// //             />
// //           </Grid>

// //           {/* Password */}
// //           <Grid item xs={12}>
// //             <TextField
// //               label="Password"
// //               variant="outlined"
// //               fullWidth
// //               type="password"
// //               name="password"
// //               value={formData.password}
// //               onChange={handleChange}
// //               error={Boolean(errors.password)}
// //               helperText={errors.password}
// //               required
// //             />
// //           </Grid>

// //           {/* Submit Button */}
// //           <Grid item xs={12}>
// //             <Button
// //               type="submit"
// //               fullWidth
// //               variant="contained"
// //               color="primary"
// //               disabled={isSubmitting}
// //             >
// //               {isSubmitting ? 'Logging in...' : 'Login'}
// //             </Button>
// //           </Grid>
// //         </Grid>
// //       </form>
// //     </Container>
// //   );

// // };
// // export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();  // Using useNavigate for navigation

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Form validation function
  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) return; // If validation fails, don't proceed

    setLoading(true); // Show loading spinner or message
    setIsSubmitted(false); // Reset submission message

    const newUser = { email, password };

    try {
      // Send login request to the backend
      const response = await axios.post('http://localhost:5000/api/auth/login', newUser);
      const data = response.data;

      if (data.token) {
        // Store JWT token in localStorage
        localStorage.setItem('token', data.token);

        // Redirect to dashboard page
        navigate('/dashboard');  // Use navigate for redirection
      } else {
        // If login fails, show alert or message
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      alert('Login failed');
    } finally {
      setLoading(false); // Hide loading spinner/message
    }
  };

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
        }}
      >
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Login
        </Typography>

        <TextField
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          fullWidth
          required
          error={Boolean(errors.email)}
          helperText={errors.email}
        />

        <TextField
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          fullWidth
          required
          error={Boolean(errors.password)}
          helperText={errors.password}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
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
