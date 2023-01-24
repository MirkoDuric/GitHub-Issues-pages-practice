import { Outlet, Route } from "react-router-dom";
export default function Issues({ issues }) {
  return (
    <ul>
      {issues.map((data) => {
        console.log(data);
        return (
          <>
            <br />
            <li key={data.id}>{data.title}</li>
          </>
        );
      })}
    </ul>
  );
}
