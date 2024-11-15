export const verifyToken = async (token) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/verify-token', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      if (data.isValid) {
        return { isValid: true, user: data.user };  // Return user data if token is valid
      } else {
        return { isValid: false };  // Return false if token is invalid
      }
    } catch (error) {
      console.error('Token verification failed:', error);
      return { isValid: false };
    }
  };
  