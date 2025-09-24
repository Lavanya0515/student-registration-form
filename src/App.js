import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState("");
  const [course, setCourse] = useState("");
  const [rollNo, setRollNo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Student Registered:\nName: ${fullName}\nCourse: ${course}\nRoll No: ${rollNo}`
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Student Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name: </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Course: </label>
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Roll No: </label>
          <input
            type="number"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit">Register Student</button>
      </form>
    </div>
  );
}

export default App;
