import { useState, useEffect } from "react";
import { Routes, Link, NavLink, Route } from "react-router-dom";
import Issues from "./Components/Issues";
import NavButtons from "./Components/NavButtons";
import Issue from "./Components/Issue";
function App() {
  const [issues, setIssues] = useState([]);
  const [issue, setIssue] = useState({});
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
        <Route
          path="/issues"
          element={
            <Issues
              issue={(title, body, number, comments_url) =>
                setIssue({
                  title: title,
                  body: body,
                  number: number,
                  comments_url: comments_url,
                })
              }
              issues={issues}
            />
          }
        />
        <Route path="/issues/:number" element={<Issue issue={issue} />} />
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
