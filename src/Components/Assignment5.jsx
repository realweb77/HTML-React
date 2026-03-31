export default function Assignment5() {
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        First Name: <input type="text" placeholder="John" /> <br /><br />
        Last Name: <input type="text" placeholder="Smith" /> <br /><br />
        <label>Male</label><input type="radio" name="gender" />
        <label>Female</label><input type="radio" name="gender" /> <br /><br />
        Email: <input type="email" placeholder="your email" /> <br /><br />
        Password: <input type="password" /> <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}