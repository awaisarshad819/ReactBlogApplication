import { useDispatch } from "react-redux";
import "./App.css";
import { login, logout } from "./store/auth/authSlice";
import authService from "./api/authService";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Home, About, Blogs, Dashboard, BlogsDashboard } from "./pages";
import {
  Header,
  Footer,
  Error,
  Login,
  Signup,
  Stats,
  Profile,
  BlogForm,
  BlogTable,
} from "./components";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((res) => {
        dispatch(login(res));
      })
      .catch((err) => {
        dispatch(logout());
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <Header />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Stats />} />
          <Route path="/dashboard/blogs" element={<BlogTable />} />
          <Route path="/dashboard/blogs/edit/:id" element={<BlogForm />} />
          <Route path="/dashboard/blogs/addNew/" element={<BlogForm />} />
          <Route path="/dashboard/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
