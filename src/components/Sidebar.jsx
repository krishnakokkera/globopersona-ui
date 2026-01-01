import { Link } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Globopersona</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/campaigns">Campaigns</Link></li>
        <li><Link to="/create">Create Campaign</Link></li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
