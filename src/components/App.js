import React from "react";
import Course from "./Course";

const App = ({ courses }) => (
  <div className="container">
    {courses.map((course) => (
      <Course {...course} key={course.id} />
    ))}
  </div>
);

export default App;
