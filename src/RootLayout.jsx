import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">App</Link>
        </li>
        <li>
          <Link to="apple">apple</Link>
        </li>
        <li>
          <Link to="banana">banana</Link>
        </li>
        <li>
          <Link to="cherry">cherry</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
