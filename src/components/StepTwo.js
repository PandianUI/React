import React from "react";
import Input from "./Input";
import { inputstyle } from "./Input.style"; 
import NextButton from "./NextButton";
import { buttonstyle } from "./NextButton.style";


function StepTwo() {
    return(

        <div className="formcreate ">
            <div className="form_container">
                <h2>Create a job <span>Step 2</span></h2>
                <form>
                    <div className="two_column">
                        <div>
                            <label> Experience </label>
                            <Input placeholdertext={"minimum"} style={inputstyle}/>
                        </div>
                        <div>
                            <label> &nbsp; </label>
                            <Input placeholdertext={"maximum"} style={inputstyle}/>
                        </div>
                    </div>
                    <div className="two_column">
                        <div>
                            <label> Salary </label>
                            <Input placeholdertext={"minimum"} style={inputstyle}/>
                        </div>
                        <div>
                            <label> &nbsp; </label>
                            <Input placeholdertext={"minimum"} style={inputstyle}/>
                        </div>
                    </div>
                    <div className="pb-6">
                        <label> Total employee </label>
                        <Input placeholdertext={"ex. 100"} style={inputstyle}/>
                    </div>
                    <div className="pb-6">
                        <label> Apply type </label>
                        <div className="two_radio">
                            <div>
                                <input type="radio"  /> Quick Apply
                            </div>
                            <div>
                                <input type="radio"  /> External Apply
                            </div>
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

export default StepTwo