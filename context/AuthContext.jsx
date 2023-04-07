import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [authToken, setAuthToken] = useState(null);

  const login = async () => {
    try {
      setLoading(true);
      await AsyncStorage.setItem('userToken', "newToken")
      setTimeout(async () => {
        const value = await AsyncStorage.getItem('userToken')
        setAuthToken(value);
        setLoading(false);

      }, 500)
    } catch (e) {
      setLoading(false);
      console.log("user token set error");
    }

  };

  const logout = async () => {
    try {
      setLoading(true);
      await AsyncStorage.removeItem('userToken')
      setAuthToken(null);
      setLoading(false);
    } catch (e) {
      console.log("user token set error");
      // saving error
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const value = await AsyncStorage.getItem('userToken')
        if (value !== null) {
          setAuthToken(value);
        }
        setLoading(false)
      } catch (e) {
        setLoading(false)
        console.log("error loggedin", e);
      }
    }
    fetchData();
  }, []);



  return (
    <AuthContext.Provider value={{ loading, authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
