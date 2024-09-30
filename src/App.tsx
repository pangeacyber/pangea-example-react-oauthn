import { useNavigate } from "react-router-dom";
import { AuthProvider, AppState } from "@pangeacyber/react-oauth";

import Router from "@src/components/Router";
import './scss/styles.scss';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || "";
const PROJECT_DOMAIN = process.env.REACT_APP_PROJECT_DOMAIN || "";

const App = () => {
  const navigate = useNavigate();

  const handleLogin = (appData: AppState) => {
    console.log('handle login', appData.returnPath)
    navigate(appData.returnPath);
  };

  const authConfig = {
    clientId: CLIENT_ID,
    domain: PROJECT_DOMAIN,
    redirectUri: "http://localhost:3001",
    onLogin: handleLogin,
  };

  if (!authConfig.clientId || !authConfig.domain) {
    return (
      <html lang="en">
        <head />
        <body style={{ padding: "40px", textAlign: "center" }}>
          <h2>
            Please configure your environment variables. See the README for
            more details...
          </h2>
        </body>
      </html>
    );
  }

  return (
    <AuthProvider
      config={authConfig}
      cookieOptions={{
        useCookie: true,
        cookieName: "pangea-sample"
      }}
    >
      <Router />
    </AuthProvider>
  );
};

export default App;
