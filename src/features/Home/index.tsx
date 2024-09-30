import { useAuth } from "@pangeacyber/react-oauth";
import type { Profile } from "@pangeacyber/react-oauth";
import { getDateTime } from "../../utils";

const Home = () => {
  const { authenticated, user, error } = useAuth();
  const profile: Profile = user?.profile || {};
  const loginLoc = profile["Last-Login-City"] ? `${profile["Last-Login-City"]}, ${profile["Last-Login-Country"]}` : "Unknown"
  const loginIP = profile["Login-From"];
  const loginTime = getDateTime(profile["Login-Time"]);

  return (
    <div className="home">
      <h1>Home</h1>
      <div style={{ marginBottom: "16px" }}>
        {authenticated ?
          (<span className="success">Authenticated</span>) :
          (<span className="warn">Unauthenticated</span>)
        }
      </div>
      {!!user &&
        <div>
          <h5>Last Login</h5>
          <div>{loginTime}</div>
          {loginLoc && <div>{loginLoc}</div>}
          <div>{loginIP}</div>          
        </div>
      }
      {!!error &&
        <div>
          <h5>Error</h5>
          <div>{error}</div>
        </div>
      }
    </div>
  );
}

export default Home;