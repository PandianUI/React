import React from "react";
import Input from "./Input";
import { inputstyle } from "./Input.style"; 
import NextButton from "./NextButton";
import { buttonstyle } from "./NextButton.style";

function StepOne() {
    return (
        <div className="formcreate">
            <div className="form_container">
                <h2>Create a job <span>Step 1</span></h2>
                <form>
                    <div className="pb-6">
                        <label> Job title </label>
                        <Input placeholdertext={"ex. UX UI Designer"} style={inputstyle}/>
                    </div>
                    <div className="pb-6">
                        <label> Company name </label>
                        <Input placeholdertext={"ex. Googler"} style={inputstyle}/>
                    </div>
                    <div className="pb-6">
                        <label> Industry </label>
                        <Input placeholdertext={"ex. Information Technology"} style={inputstyle}/>
                    </div>
                    <div className="two_column">
                        <div>
                            <label> Location </label>
                            <Input placeholdertext={"ex. Chennai"} style={inputstyle}/>
                        </div>
                        <div>
                            <label> Remote type </label>
                            <Input placeholdertext={"ex. In-office"} style={inputstyle}/>
                        </div>
                    </div>
                    <div>
                        <NextButton style={buttonstyle} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default StepOne