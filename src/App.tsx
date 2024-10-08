import { useNavigate } from "react-router-dom";
import { AuthProvider, AppState, ClientConfig } from "@pangeacyber/react-oauth";

import Router from "@src/components/Router";
import './scss/styles.scss';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || "";
const METADATA_URL = process.env.REACT_APP_METADATA_URL || "";

const App = () => {
  const navigate = useNavigate();

  const handleLogin = (appData: AppState) => {
    navigate(appData.returnPath);
  };

  const authConfig: ClientConfig = {
    clientId: CLIENT_ID,
    metadataUrl: METADATA_URL,
    callbackUri: "http://localhost:3001",
    onLogin: handleLogin,
    loadMetadata: true,
  };

  if (!authConfig.clientId || !authConfig.metadataUrl) {
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
        tokenCookieName: "pangea-sample",        
      }}
    >
      <Router />
    </AuthProvider>
  );
};

export default App;
