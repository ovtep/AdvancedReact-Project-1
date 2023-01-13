function UserForm() {
  return (
    <>
      <h1>Adauga utilizatori:</h1>
      <br />
      <label>Nume:</label>
      <br />
      <input type="text" placeholder="Nume si prenume" />
      <br />
      <label>Email:</label>
      <br />
      <input type="text" placeholder="Adresa de email" />
      <br />
      <label>Client GOLD:</label>
      <input type="checkbox" />
      <br />
      <button>Submit</button>
    </>
  );
}

export default UserForm;
