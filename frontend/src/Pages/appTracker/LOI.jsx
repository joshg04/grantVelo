import { Link } from 'react-router-dom';
import Uploader from "../../Components/uploader";
import Sidenav from '../../Components/sidenav';
import { HorizontalNonLinearStepper } from '../../Components/stepper';

export default function LOI() {
    return (

        // <div className="dashboard-bg">
        //     <Sidenav />
        //     <div className="appTracker-wrapper">
        //         <div className="appTracker-timeline">
        //             <h1>Grant Timeline</h1>
        //             <HorizontalNonLinearStepper />
        //         </div>
                 
        //     </div>
        // </div>

                <div className="appTracker-list-explore-wrapper">
                    <div className="appTracker-yourGrants">
                        <h1>Letter of Intent</h1>
                        <textarea placeholder='Start writing here...'></textarea>
                        {/* <HorizontalNonLinearStepper /> */}
                    </div>

                    <Uploader />
                </div>
        
    )
}
