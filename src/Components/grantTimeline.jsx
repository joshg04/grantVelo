import { React, useState, useRef } from "react";
import CheckIcon from '@mui/icons-material/Check';
import { useEffect } from "react";
import { Link } from "react-router-dom";

const STEPS = [
    {
        name: "Select a Grant",
        Component: () => <div>Grant Issue Date: 04/28/2024</div>
    },
    {
        name: "Letter of Introduction",
        Component: () => <div>Deadline for letter of introduction</div>
    },
    {
        name: "Response to Letter of Introduction",
        Component: () => <div>Deadline for letter of introduction response</div>
    },
    {
        name: "Final Application",
        Component: () => <div>Deadline for final application</div>
    },
]


export const GrantTimeline = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false);
    const stepRef = useRef([])
    const [margins, setMargins] = useState({
        marginLeft: 0,
        marginRight: 0,
    });

    const handleNext = () => {
        setCurrentStep(prevStep => {
            if(prevStep===STEPS.length){
                setIsComplete(true);
                return prevStep
            }
            else{
                return prevStep + 1;
            }
        })
    }

    if (!STEPS.length){
        return <></>;
    }

    const ActiveComponent = STEPS[currentStep - 1 ]?.Component;

    const calculateProgressBarWidth = () => {
        return ((currentStep - 1) / (STEPS.length - 1)) * 100;
    };

    useEffect(() => {
        setMargins({
            marginLeft: stepRef.current[0].offsetWidth / 2,
            marginRight: stepRef.current[STEPS.length - 1 ].offsetWidth / 2,
    });
    }, [stepRef, STEPS.length]);

    return(
        <div className="timeline-component-wrapper">
        <div className="timeline-wrapper">

            {STEPS.map((step, index) => {
                return(
                    <div key={step.name} ref={el=>(stepRef.current[index] = el)} className={`timeline-step ${currentStep>index+1 || isComplete ? "complete" : ""} ${currentStep === index + 1 ? "active" : ""}`}>
                        <div className="timeline-step-number"><Link to="/appTracker/LOI">
                            {currentStep > index + 1 || isComplete ? (
                                <span>&#10003;</span>
                            ) : (
                                index + 1
                            )}</Link></div>
                        <div className="timeline-step-name">{step.name}</div>
                    </div>
                )
            })}

            <div 
            className="progress-bar" 
            style={{
                width: `calc(100% - ${ margins.marginLeft + margins.marginRight }px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
            }}
            >
                <div className="progress" style={{width: `${calculateProgressBarWidth()}%`}}>
                </div>
            </div>

        </div>

        <ActiveComponent />

        {!isComplete && (
                    <button onClick={handleNext} className="timeline-btn">
                        {currentStep === STEPS.length ? "Finish" : "Next"}
                    </button>

        )}
        </div>
    )
}