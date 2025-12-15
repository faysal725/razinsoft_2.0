// lib/utils/cookieSync.js
import Cookies from 'js-cookie';

const TOKEN_KEY = 'auth_token';
const TOKEN_NO_KEY = 'token_no';

// Function to set the cookies on login/register success
export function setAuthCookies(token, tokenNo) {
  // Options for security and expiration (7 days)
  const options = { 
    expires: 7, 
    secure: process.env.NODE_ENV === 'production', 
    sameSite: 'Strict' 
  };
  Cookies.set(TOKEN_KEY, token, options);
  Cookies.set(TOKEN_NO_KEY, tokenNo, options);
}

// Function to clear the cookies on logout
export function removeAuthCookies() {
  Cookies.remove(TOKEN_KEY);
  Cookies.remove(TOKEN_NO_KEY);
}