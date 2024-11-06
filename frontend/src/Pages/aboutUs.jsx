import img1 from "../imgs/aboutUs_1.jpg"
import img2 from "../imgs/aboutUs_2.jpg"
import img3 from "../imgs/aboutUs_3.jpg"
import Footer from "./footer"

export default function AboutUs() {
    return (
        <div className="aboutUs-wrapper">
            <div className="aboutUs-inner-wrapper">

                <div className="aboutUs-item-wrapper 1">
                    <div className="aboutUs-title-wrapper 1">
                        <h1>Welcome to Grant Velocity</h1>
                        <p className="aboutUs-item 1">Your comprehensive platform for discovering grant opportunities tailored to your unique business needs
                        We empower businesses, non-profits, and individuals by connecting them with funding sources at the federal, state, local, and private levels, giving them the support they need to make their projects and visions a reality.
                        recuring grants can be a complex process that’s why we’ve streamlined the search experience by offering curated, up-to-date listings and advanced filtering options. With just a few clicks, you can explore grants that align with your industry, location, funding requirements, business stage, and application deadlines.</p>

                    </div>
                </div>                
                <div className="aboutUs-item-wrapper 3">
                    <div className="aboutUs-title-wrapper 3">
                        <h1>Our Mission</h1>
                        <p className="aboutUs-item 3">Our mission is to drive growth and innovation by making grant funding accessible to everyone. We’ve built our platform on the principles of transparency, simplicity, and precision. Leveraging powerful data-gathering technology, we aggregate and maintain a vast database of grants, ensuring you have access to the most relevant and current opportunities.</p>
                    </div>
                    {/* <img src={img3} /> */}
                </div>
                <div>
                </div>
                <div className="aboutUs-card-wrapper">
                    <div className="aboutUs-card-header">
                        <h1 className="aboutUs-item 4">Whether you’re a small business owner looking to scale, a non-profit aiming to make a difference, or an entrepreneur with an exciting new idea, Grant Velocity is here to accelerate your journey to success.</h1>
                    </div>

                    <div className="aboutUs-card">
                        <div className="aboutUs-card-item 1">
                            <h1>Our Vision:</h1>
                            <p className="aboutUs-item 5">To be the go-to platform that connects ambitious minds with financial resources, fostering innovation, growth, and positive change in communities around the world.</p>
                        </div>
                        <div className="aboutUs-card-item 2">
                            <h1>Our Commitment:</h1>
                            <p className="aboutUs-item 6">To provide a user-friendly, reliable, and constantly updated grant discovery tool that saves you time and enhances your chances of securing funding.</p>
                        </div>

                    </div>
                    <div>
                        <h1 className="aboutUs-item 7">Explore your potential with Grant Velocity, and let us help you turn opportunities into achievements.</h1>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}