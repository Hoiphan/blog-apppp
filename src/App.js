import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseconfi";
import Student from "./pages/Student";
import Identify from "./pages/Identify";
import Teacher from "./pages/Teacher";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [isStudent, SetisStudent] = useState(localStorage.getItem("Student"));
  const [isTeacher, SetisTeacher] = useState(localStorage.getItem("Teacher"));
  const [isAdmin, SetisAdmin] = useState(localStorage.getItem("Admin"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      SetisStudent(false);
      SetisAdmin(false);
      SetisTeacher(false);
      window.location.pathname = "/";
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        {!isAuth && <Link to="/ideti">Login</Link>}
        {isAuth && (isAdmin || isTeacher) && (
          <Link to="/createpost">Create Post</Link>
        )}
        {(isTeacher || isAdmin) && isAuth && <Link to="/teacher">Teacher</Link>}

        {isAuth && (isStudent || isAdmin) && <Link to="/student">Student</Link>}

        {isAuth && (
          <>
            <button onClick={signUserOut} className="logout-button">
              Log Out
            </button>
          </>
        )}
      </nav>
      <Routes>
        <Route
          path="/ideti"
          element={
            <Identify
              SetisStudent={SetisStudent}
              SetisAdmin={SetisAdmin}
              SetisTeacher={SetisTeacher}
            />
          }
        />
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/student" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
      </Routes>
    </Router>
  );
}

export default App;
