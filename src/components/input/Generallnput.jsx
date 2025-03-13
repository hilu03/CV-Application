function General({info, setInfo}) {
  return (
    <form>
      <div className="input-container">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" value={info.name} onChange={e => setInfo({...info, name: e.target.value})}/>
      </div>
      <div className="input-container">
        <label htmlFor="position">Position</label>
        <input type="text" id="position" value={info.position} onChange={e => setInfo({...info, position: e.target.value})}/>
      </div>
      <div className="input-container">
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" value={info.phone} onChange={e => setInfo({...info, phone: e.target.value})}/>
      </div>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" value={info.email} onChange={e => setInfo({...info, email: e.target.value})}/>
      </div>
      <div className="input-container">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" value={info.portfolio} onChange={e => setInfo({...info, portfolio: e.target.value})}/>
      </div>
      <div className="input-container">
        <label htmlFor="address">Address</label>
        <input type="text" id="address" value={info.address} onChange={e => setInfo({...info, address: e.target.value})}/>
      </div>
      <div className="input-container">
        <label htmlFor="profile">Summary</label>
        <textarea type="text" id="profile" value={info.summary} onChange={e => setInfo({...info, summary: e.target.value})}/>
      </div>
    </form>
  );
}

export default General;