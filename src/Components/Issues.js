import { Link, useParams } from "react-router-dom";
export default function Issues({ issues, issue }) {
  let { number } = useParams();
  return (
    <ul>
      {issues.map((data) => {
        console.log(data);
        number = data.number;
        return (
          <Link
            onClick={() =>
              issue(data.title, data.body, data.number, data.comments_url)
            }
            to={`${number}`}
          >
            <br />
            <li key={data.id}>{data.title}</li>
          </Link>
        );
      })}
    </ul>
  );
}
