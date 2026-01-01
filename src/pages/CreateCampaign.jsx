import "../styles/form.css";

function CreateCampaign() {
  return (
    <div className="form-container">
      <h2>Create Campaign</h2>

      <form>
        <label>Campaign Name</label>
        <input type="text" placeholder="Enter campaign name" />

        <label>Subject</label>
        <input type="text" placeholder="Enter subject" />

        <label>Email Content</label>
        <textarea placeholder="Write email content"></textarea>

        <button type="button">Save Campaign</button>
      </form>
    </div>
  );
}

export default CreateCampaign;
