import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/Employees`}>Employees</Link>
            </li>
            <li>
              <Link to={`/PACS`}>PACS</Link>
            </li>
            <li>
              <Link to={`/Testing`}>Testing</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
      <Outlet />
      </div>
    </>
  );
}