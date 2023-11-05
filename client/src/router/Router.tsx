import { Route, Routes } from "react-router-dom";
import Page404 from "src/pages/Page404";
import LoginPage from "src/pages/auth/LoginPage";
import RegisterPage from "src/pages/auth/RegisterPage";

export default function Router() {
  return (
    <Routes>
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/register"} element={<RegisterPage />} />
      <Route path={"*"} element={<Page404 />} />
    </Routes>
  );
}
