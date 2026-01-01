import "../styles/campaigns.css";

const campaigns = [
  { id: 1, name: "New Year Offer", status: "Active", date: "01 Jan 2026" },
  { id: 2, name: "Welcome Email", status: "Draft", date: "28 Dec 2025" }
];

function Campaigns() {
  return (
    <div className="campaigns">
      <h2>Campaigns</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.status}</td>
              <td>{c.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Campaigns;
