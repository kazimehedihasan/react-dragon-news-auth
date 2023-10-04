import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);


export const AuthContext = createContext(null);

const AuthProvidor = ({ childern }) => {
    const [user, setUser] = useState(null);

    const createUser= (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        user,
        createUser,

    }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {childern}
        </AuthContext.Provider>
    </div>
  );
};

export default AuthProvidor;
