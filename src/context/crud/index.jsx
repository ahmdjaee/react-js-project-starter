import { createContext, useContext, useReducer } from "react";
import { crudAction } from "./action";
import { crudReducer } from "./reducer";
import { INITIAL_STATE } from "./state";

const CrudContext = createContext({
  state: INITIAL_STATE,
  dispatch: () => {},
  crud: crudAction(() => {}),
});

function CrudContextProvider({ children }) {
  const [state, dispatch] = useReducer(crudReducer, INITIAL_STATE);

  return (
    <CrudContext.Provider
      value={{
        state,
        dispatch,
        crud: crudAction(dispatch),
      }}
    >
      {children}
    </CrudContext.Provider>
  );
}

function useCrudContext() {
  const context = useContext(CrudContext);
  if (context === undefined) {
    throw new Error("useCrudContext must be used within a CrudContextProvider");
  }

  const { state, dispatch, crud } = context;
  return { state, dispatch, crud };
}

export { CrudContextProvider, useCrudContext };
