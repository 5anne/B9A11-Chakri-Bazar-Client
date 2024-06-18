import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
    return (
        <div>
            <Carousel autoPlay={true} showArrows={true} showThumbs={false} interval={1000}>
                <div className="">
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/T1pkBWzc/we-are-hiring-digital-collage-23-2149667041.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Fast Track Your Job Search</h1>
                                <p className="mb-5">Get matched to top employers instantly. Less searching, more interviewing. Explore exciting opportunities and land your dream job with ease.</p>
                                <button className="border-2 border-white px-4 py-2 font-semibold hover:font-bold">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/rpjQmJcJ/we-are-hiring-digital-collage-23-2149667059.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Your Job Search, Tailored to You</h1>
                                <p className="mb-5">Tired of generic job boards filled with irrelevant listings? We understand the frustration of spending countless hours sifting through hundreds of postings that do not align with your skills and career aspirations. No more endless scrolling or feeling like a needle in a haystack.</p>
                                <button className="border-2 border-white px-4 py-2 font-semibold hover:font-bold">Visit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/DZY6QwS4/portrait-cheerful-man-pointing-speech-bubble-with-hiring-ad-making-job-employment-offer-positive-mal.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Be a Part of Something Bigger: Join Our Team</h1>
                                <p className="mb-5">Make a real impact and contribute to something meaningful. We are looking for passionate individuals to join our team and help us achieve great things together.</p>
                                <button className="border-2 border-white px-4 py-2 font-semibold hover:font-bold">Join Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;