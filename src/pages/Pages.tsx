import { Route, Routes } from "react-router-dom";
import LoginPage from "./Login";

const PageRoot = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default PageRoot;
