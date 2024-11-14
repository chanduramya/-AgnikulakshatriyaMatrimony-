import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { Navigate } from 'react-router-dom';

const Register = () => {
  const[name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[confpassword,setconfPassword]=useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitted(true)
  //   const newUser = {name,  email, password, confpassword};
  //   try {
  //     const response = await axios.post('http://localhost:5000/api/auth/register', newUser);
  //     console.log(response.data);  // Handle the response
  //   } catch (error) {
  //     console.error('Error registering user:', error.response.data);
  //   }
  
  //   console.log('Register in:', { name, email, password, confpassword});
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true)
    const newUser = {username : name,  email : email, password : password }
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", newUser);
  
      // axios automatically parses the response to JSON, so you can access 'data' directly
      if (response && response.data) {
        console.log("Success:", response.data);
      } else {
        console.error("Data not found in response:", response);
      }
  
    } catch (error) {
      console.error("Error during form submission:", error);
    }
    console.log('Register in:', { name, email, password, confpassword});
  };
  if (isSubmitted) {
    return<Navigate to="/login" />;
  }
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
          Register
        </Typography>
        <TextField
        type="name"
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        type="email"
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
        <TextField
        type="password"
        placeholder="Confirm Password"
        value={confpassword}
        onChange={(e) => setconfPassword(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
       Register
        </Button>
        {isSubmitted && (
          <Typography variant="body1" color="success.main" align="center" sx={{ mt: 2 }}>
            Register Successful!
          </Typography>
        )}
    </Box>
    </Container>
        
  );
};

export default Register;





// // src/components/RegisterForm.js
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerRequest } from '../redux/actions';
// import { TextField, Button, Typography, Box, CircularProgress,Container } from '@mui/material';

// const RegisterForm = () => {
//   const dispatch = useDispatch();
//   // const { loading, error } = useSelector((state) => state.auth);

//   const[name, setName] = useState('');
//   const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');
//   const[confpassword,setconfPassword]=useState('');
//    const [isSubmitted, setIsSubmitted] = useState(false);

//    const handleSubmit = async(e) => {
//        e.preventDefault();
//        setIsSubmitted(true)
//        const newUser = {username : name,  email : email, password : password }

//     e.preventDefault();
//     dispatch(registerRequest(newUser)); // Dispatch the register request action
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box 
//       component="form"
//        onSubmit={handleSubmit}
//        sx={{
//          display: 'flex',
//         flexDirection: 'column',
//          gap: 2,
//         padding: 4,
//         border: '1px solid #ccc',
//         borderRadius: '8px',
//       }}>
   
//     <Typography variant="h5" component="h1" align="center" gutterBottom>           Register
//         </Typography>
//        <TextField
//         type="name"
//         placeholder="Username"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />
//       <TextField
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <TextField
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//         <TextField
//         type="password"
//         placeholder="Confirm Password"
//         value={confpassword}
//         onChange={(e) => setconfPassword(e.target.value)}
//         required
//       />
//       <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
//           Register
//         </Button>
//         {isSubmitted && (
//           <Typography variant="body1" color="success.main" align="center" sx={{ mt: 2 }}>
//             Register Successful!
//           </Typography>
//         )}    </Box>
//     </Container>
        
//   );
// };

// export default RegisterForm;
