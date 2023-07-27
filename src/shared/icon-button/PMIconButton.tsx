import React, { MouseEvent } from 'react';
import "../styles/pm-button.scss";
import "./pm-icon-button.scss";

interface IconButtonProps {
  srcIcon?: string,
  onClick?: (event: MouseEvent) => void,
  className?: string,
  hidden?: boolean
}

function PMIconButton(props: IconButtonProps) {
  return (
    <button className={"pm-icon-button pm-button pm-button__circle " + props.className}>
      <img hidden={props.hidden} alt="Back" src={props.srcIcon} onClick={props.onClick} className='pm-icon-button__img'/>
    </button>
  );
}

export default PMIconButton;