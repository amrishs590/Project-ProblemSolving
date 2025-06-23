// src/components/ProtectedRoute.jsx
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setAuthenticated(!!session?.user);
      setLoading(false);
    };
    checkSession();
  }, []);

  if (loading) return null; // Optional: loader

  return authenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
