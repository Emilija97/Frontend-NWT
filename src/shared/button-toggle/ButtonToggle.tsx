
import React, { useState } from 'react';
import "./button-toggle.scss";

interface ButtonToggle {
  buttonToggleMap: Map<string | number, string>;
  ipmtState: string | number;
  onSelectClick: (value: any) => void;
  access?: boolean;
}

function ButtonToggle(props: ButtonToggle) {

  const [selected, setSelected] = useState(props.ipmtState);

  const chosenBtnChange = (item: string | number) => {
    setSelected(item);
    props.onSelectClick(item);
  }

  return (
    <div className={`button-toggle ${props.access ? `button-toggle__access_btns` : ``}`}>
      {Array.from(props.buttonToggleMap.keys()).map(item => {
        return (
          <button type="button"
            key={item}
            className={`pm-button pm-button--small pm-button--small pm-button__outlined--inactive ${
              selected === item
                ? `pm-button__text pm-button__text--selected button-toggle__status-buttons-selected`
                : "pm-button__outlined button-toggle__status-buttons-inactive-btn"
              } ${props.access ? `button-toggle__access_btn` : ``}`}
            onClick={() => chosenBtnChange(item)}>
            {props.buttonToggleMap.get(item)}
          </button>
        );
      })}
    </div>
  )
}

export default ButtonToggle;