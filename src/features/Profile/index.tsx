// import * as jose from "jose";
import { useAuth } from "@pangeacyber/react-oauth";
import { useEffect, useState } from "react";

const Profile = () => {
  const { user, refresh, getToken } = useAuth();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");

  const handleRefresh = async () => {
    setLoading(true);
    await refresh(true);
    setLoading(false);
  }
  
  useEffect(() => {
    const fetchToken = async () => {
      const _token = await getToken();
      if (_token !== undefined) {
        setToken(_token);
      }
    }
    fetchToken();
  }, [getToken]);

  return (
    <div className="profile">
      <h1>Profile</h1>
      <div>Username: {user?.username}</div>
      <div>Email: {user?.email}</div>
      {user?.profile?.first_name && <div>First Name: {user?.profile?.first_name}</div>}
      {user?.profile?.last_name && <div>Last Name: {user?.profile?.last_name}</div>}
      {user?.profile?.phone && <div>Phone: {user?.profile?.phone}</div>}

      { token?.length > 36 ? (
        <div style={{ paddingLeft: "12px" }}><pre>{JSON.stringify(user?.payload, null, 4)}</pre></div>
      ) :
      <div>{token}</div>
      }
      <p />
      <button onClick={(e) => handleRefresh()} disabled={loading}>Refresh Token</button>
    </div>
  );
}

export default Profile;