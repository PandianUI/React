import React from "react";
import netflix from "../images/netflix.png";
import ApplyButton from "./ApplyButton";
import { applystyle } from "./ApplyButton.style";
import { details } from "./Details";

function ApplyContainer(props) {
    const { heading, companyname, location, timing, experience, salary, empsize, activebtn } = props
    return (
        <div className="net_container">
            <div>
                <img src={netflix} alt="netflix" />
            </div>
            <div>
                <h2>{heading}<span>{companyname}</span></h2>
                <p>{location}</p>
                <ul>
                    <li>{timing}</li>
                    <li>{experience}</li>
                    <li>{salary}</li>
                    <li>{empsize}</li>
                </ul>
                <ApplyButton style={activebtn == "Yes" ? applystyle.bluebutton : applystyle.whitebutton } buttontext={ activebtn == "Yes" ? "Apply" : "External Apply"}/>
            </div>
        </div>
    );
} 

export default ApplyContainer