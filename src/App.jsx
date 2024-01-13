import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import AuthPage from "./page/AuthPage/AuthPage";
import PageLayout from "./components/Layouts/PageLayout/PageLayout";
import ProfilePage from "./page/ProfilePage/ProfilePage";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
