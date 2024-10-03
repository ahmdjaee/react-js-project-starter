import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";
import { CrudContextProvider } from "./context/crud";
import { Toaster } from "./components/ui/toaster";
import { AuthContextProvider } from "./context/auth";

function App() {
  return (
    <AuthContextProvider>
      <CrudContextProvider>
        <RouterProvider router={router} />
        <Toaster />
      </CrudContextProvider>
    </AuthContextProvider>
  );
}

export default App;
