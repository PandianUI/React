import React from "react";

function ApplyButton(props) {
    const { buttontext, style } = props
    return (
        <button className={style}>{buttontext}</button>
    )
}

export default ApplyButton