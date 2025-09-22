

import { RouterProvider } from "react-router-dom";
import { myRoutes } from "./routes/MyRouter";

 import { AuthProvider } from "./context/AuthProvider";
  


const App = () => {
  return (
   
      <AuthProvider>
        <div className="app bg-[#d5dee6]">
          <RouterProvider router={myRoutes} />
          
        </div>
      </AuthProvider>
  
  );
};

export default App;
