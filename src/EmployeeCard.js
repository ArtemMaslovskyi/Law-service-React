import React from "react";

export default function EmployeeCard(props) {
  const [infoToggle, setInfoToggle] = React.useState(false);

  const toggleInfo = () => {
    setInfoToggle((prevInfoToggle) => !prevInfoToggle);
  };

  return (
    <div className="flex flex-col items-center p-6 m-5 border-2 rounded">
      <img
        width={"200px"}
        className="rounded"
        src={props.photo}
        alt="employee"
      />
      <p className="my-2 text-lg font-bold text-center">{props.name}</p>
      <p>{props.appointment}</p>
      <div>
        <p
          className="p-1 text-purple-500 border-2 rounded cursor-pointer"
          onClick={toggleInfo}
        >
          View more
        </p>
      </div>
      {infoToggle && (
        <div className="animate-textIn">
          <p>{props.education}</p>
          <p>{props.experience}</p>
        </div>
      )}
    </div>
  );
}
