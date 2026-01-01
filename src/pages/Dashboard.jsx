import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="cards">
        <div className="card">Total Campaigns: 12</div>
        <div className="card">Emails Sent: 25,000</div>
        <div className="card">Open Rate: 42%</div>
      </div>
    </div>
  );
}

export default Dashboard;
