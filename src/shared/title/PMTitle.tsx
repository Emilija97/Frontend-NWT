import React from "react";
import "./pm-title.scss";

interface IPMTitle {
    name: string;
}

function PMTitle(props: IPMTitle) {

    return(
        <div className="pm-title">
            <div className="pm-title__welcome">Welcome,</div>
            <div className="pm-title__name">{props.name}</div>
        </div>
    )
}

export default PMTitle;