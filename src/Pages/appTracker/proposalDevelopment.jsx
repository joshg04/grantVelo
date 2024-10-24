import Uploader from "../../Components/uploader"

export default function ProposalDevelopment() {
    return (
        <div className="appTracker-list-explore-wrapper" >
            <div className="proposal-item">
            <h1>Research-Plan</h1>
            <Uploader />
            </div>

            <div className="proposal-item">
            <h1>Prepare Appendices</h1>
            <Uploader />
            </div>

            <div className="proposal-item">
            <h1>Budget Planning</h1>
            <Uploader />
            </div>
            
        </div >
    )
}