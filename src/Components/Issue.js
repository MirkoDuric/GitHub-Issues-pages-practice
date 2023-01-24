import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
export default function Issue({ issue }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(issue.comments_url)
      .then((response) => response.json())
      .then((json) => setComments(json));
    console.log(comments);
  }, []);

  return (
    <div>
      <h2>{issue.title}</h2>
      <ReactMarkdown children={issue.body} />
      <hr />
      <h3>Comments section</h3>
      {comments.length ? (
        comments.map((comment) => {
          return <ReactMarkdown children={comment.body} />;
        })
      ) : (
        <p>No comments awailable</p>
      )}
    </div>
  );
}
