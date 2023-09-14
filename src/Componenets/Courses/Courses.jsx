import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  console.log(courses);
  return (
    <section className="md:w-3/4">
      <h3 className="text-5xl ">Courses: {courses.length}</h3>
      <div className="grid md:grid-cols-3 gap-5">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </section>
  );
};

export default Courses;
