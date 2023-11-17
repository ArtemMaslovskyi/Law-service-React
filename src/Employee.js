import React from "react";
import EmployeeCard from "./EmployeeCard";
import staffData from "./data.js";

export default function Employee() {
  // eslint-disable-next-line no-unused-vars
  const [employee, setEmployee] = React.useState(staffData);

  const employeeCards = employee.map((employee) => (
    <EmployeeCard
      key={employee.id}
      name={employee.name}
      appointment={employee.appointment}
      education={employee.education}
      experience={employee.experience}
      photo={employee.url}
    />
  ));

  return (
    <div>
      <div
        id="about-us"
        className="flex flex-col items-center justify-center text-center"
      >
        <h2 className="my-12 text-6xl font-bold uppercase">Our employee</h2>
        <div className="grid grid-cols-2 gap-1">{employeeCards}</div>
      </div>
    </div>
  );
}
