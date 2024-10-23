import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/Home";

const AppRouter = () => {
    return (
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
  
        {/* Rutas protegidas */}
        {/* <Route
          path="/HomeApp"
          element={
            <ProtectedRoute>
              <Homeapp />
            </ProtectedRoute>
          }
        />
        <Route
          path="/CinemaSelection/:id/:id_funcion"
          element={
            <ProtectedRoute>
              <CinemaSelection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ChooseSeat/:id_funcion"
          element={
            <ProtectedRoute>
              <ChooseSeat />
            </ProtectedRoute>
          }
        /> */}
        {/* Redireccionar cualquier otra ruta a Home */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    );
  };
  
  export default AppRouter;