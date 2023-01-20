import { useState, useEffect } from "react";
function App() {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const pageNum = 1;
  useEffect(() => {
    fetch(
      `https://api.github.com/repos/rails/rails/issues?page=${pageNum}&per_page=30`
    )
      .then((response) => response.json())
      .then((json) => {
        setIssues(json);
      })
      .catch(() => alert("Request Failed"));
  }, [pageNum]);

  return (
    <div>
      {issues.map((data) => {
        return (
          <ul>
            <li>{data.title}</li>
            <li>{data.body}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
