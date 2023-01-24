import { useState, useEffect } from "react";
import { Routes, Link, NavLink, Route } from "react-router-dom";
import Issues from "./Components/Issues";
import NavButtons from "./Components/NavButtons";
function App() {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(
      `https://api.github.com/repos/rails/rails/issues?page=${page}&per_page=15`
    )
      .then((response) => response.json())
      .then((json) => {
        setIssues(json);
      })
      .catch(() => alert("Request Failed"));
  }, [page]);

  return (
    <div>
      <div>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
          })}
        >
          Home
        </NavLink>
        <br></br>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
          })}
          to="/issues"
        >
          Issues
        </NavLink>
      </div>
      <Routes>
        <Route index />
        <Route path="/issues" element={<Issues issues={issues} />} />
      </Routes>
      <NavButtons
        page={page}
        navNext={() => setPage(page + 1)}
        navPrev={() => setPage(page - 1)}
      />
    </div>
  );
}

export default App;
