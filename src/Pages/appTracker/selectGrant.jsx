import { SavedGrants } from "../../Components/savedGrants"
import exploreIMG from "../../imgs/explore.png"

export default function SelectGrant() {
    return (
        <div className="appTracker-list-explore-wrapper">
            <div className="appTracker-yourGrants">
                <SavedGrants />
            </div>

            <div className="appTracker-explore">
                <h1>Explore Grants</h1>
                <img src={exploreIMG} />
                <p>Find the proper funding for your needs</p>
                <button>Explore</button>
            </div>
        </div>
    )
}