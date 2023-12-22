import React from "react";

function Button(props) {
  const { imgSrc, onClick, ...restProps } = props;
  return (
    <button onClick={onClick} {...restProps}>
      <img src={imgSrc} className="w-[25px] h-[25px] " alt={imgSrc}></img>
    </button>
  );
}

export default Button;
