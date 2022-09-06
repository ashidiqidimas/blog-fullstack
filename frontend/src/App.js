import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import DetailPostPage from "./pages/DetailPostPage";
import EditPostPage from "./pages/EditPostPage";
import CreatePostPage from "./pages/CreatePostPage";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/blogs/:postId" element={<DetailPostPage />} />
            <Route path="/blogs/edit/:postId" element={<EditPostPage />} />
            <Route path="/blogs/create" element={<CreatePostPage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
