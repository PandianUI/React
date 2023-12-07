import React from "react";
import netflix from "../images/netflix.png";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import ApplyContainer from "./ApplyContainer";
import { details } from "./Details";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
</style>



function Create() {
    return (
        <>
            <StepOne />
            <StepTwo />
            
            <div className="apply_section">

                { details.map ( detail => <ApplyContainer heading={detail.heading} 
                                                            companyname={detail.companyname} 
                                                            location={detail.location} 
                                                            timing={detail.timing} 
                                                            experience={detail.experience} 
                                                            salary={detail.salary} 
                                                            empsize={detail.empsize} 
                                                            activebtn={detail.activebtn} 
                    
                    /> ) }
                
            </div>
        </>

    );
}

export default Create;