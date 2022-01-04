import React, { useState } from "react";

interface Props {
  defaultCount: number;
  title: string;
}

const MyComponent = (props: Props) => {
  const [count, setCount] = useState(props.defaultCount);

  const handleClick = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={handleClick}>Count UP!</button>
      <p>{count}</p>
    </div>
  );
};

export default MyComponent;
