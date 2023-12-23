import React, { useState, useEffect } from "react";

const DateTimeComponent = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day:'numeric'};
  const formattedDateTime = currentDateTime.toLocaleString('en-US', options);

  return (
    <div>
      <p>{formattedDateTime}</p>
    </div>
  );
};

export default DateTimeComponent;
