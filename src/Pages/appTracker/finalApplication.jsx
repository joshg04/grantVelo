import { Link } from 'react-router-dom';
import Uploader from '../../Components/uploader.jsx';

export default function FinalApplication() {
    return (

                <div className="appTracker-list-explore-wrapper">
                    <div className="appTracker-yourGrants">
                        <h1>Final Application</h1>
                        <textarea placeholder='Start writing here...'></textarea>
                    </div>

                    <Uploader />
                </div>
    )
}
