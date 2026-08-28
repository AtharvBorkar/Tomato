import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

export const authService = "http://localhost:5000";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="<647144605312-4htjhp50ug5jiaaogi0n4fk0863jnlt1.apps.googleusercontent.com>">
    <App />
    </GoogleOAuthProvider>;
  </StrictMode>,
)
