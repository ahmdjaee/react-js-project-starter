import { createContext, useContext, useReducer } from "react";
import { authAction } from "./action";
import { authReducer, INITIAL_STATE } from "./reducer";

const AuthContext = createContext({
  state: INITIAL_STATE,
  dispatch: () => {},
  auth: authAction(() => {}),
});

function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
        auth: authAction(dispatch),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }

  const { state, dispatch, auth } = context;
  return { state, dispatch, auth };
}

export { AuthContextProvider, useAuthContext };

