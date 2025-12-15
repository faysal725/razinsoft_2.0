import { NextResponse } from 'next/server';

// 1. Define Constants
// These must match the keys you used in lib/utils/cookieSync.js
const TOKEN_COOKIE_KEY = 'auth_token'; 
const PROTECTED_PATHS = ['/dashboard'];
const LOGIN_PATH = '/login';

export function middleware(request) {

  // 2. Read the Token from the request cookies
  // The token is automatically sent by the browser in the request headers
  const token = request.cookies.get(TOKEN_COOKIE_KEY)?.value;
  const path = request.nextUrl.pathname;

  // 3. Determine if the current path requires protection
  const isProtectedPath = PROTECTED_PATHS.some(route => path.startsWith(route));

  // 4. Primary Security Check (The Gate)
  // If the user tries to access a protected path AND they do not have a token
  if (isProtectedPath && !token) {
    console.log(`Middleware: Unauthorized access to ${path}. Redirecting.`);
    
    // Construct the URL for redirection
    const loginUrl = new URL(LOGIN_PATH, request.url);
    
    // Add a 'from' query parameter so the user can be returned after a successful login
    loginUrl.searchParams.set('from', path);
    
    // Server-side redirect (CRITICAL)
    return NextResponse.redirect(loginUrl);
  }

  console.log(path.startsWith(LOGIN_PATH) , token)
  // 5. Optional: Redirect authenticated users away from the login page
  // This prevents logged-in users from seeing the login form unnecessarily.
  if (path.startsWith(LOGIN_PATH) && token) {
    console.log('Middleware: User is authenticated. Redirecting from login page.');
    
    // Redirect to a default authenticated page (e.g., /dashboard)
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // 6. Allow the request to continue to the target route
  return NextResponse.next();
}

// 7. Configuration: Specify which paths the middleware should run on
// This is important for performance and security.
export const config = {
  matcher: [
    // Include all protected paths and the login path
    '/dashboard/:path*',
    '/login',
  ],
};