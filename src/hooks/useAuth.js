import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/auth";

const useAuth = () => { 
  const context = useContext(AuthContext);

  return {
    ...context    
  }; 
};

export default useAuth;
