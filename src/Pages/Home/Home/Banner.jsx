
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import img1 from '../../../assets/banner.jpg';
import img2 from '../../../assets/7-Methods-for-Improving-Your-Spoken-English.png';
import img3 from '../../../assets/images (17).jpg';
import img4 from '../../../assets/images (1).png';
import { Link } from 'react-router-dom';




const Banner = () => {
    return (
        <div>
            <div className="carousel h-[500px] w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={img1} className="w-full" />
                    <p className='font-bold text-2xl absolute top-36 left-24'> Develop Your <br /> <span className='text-4xl font-bold text-red-800'>Knowledge</span> <span className='text-xl text-orange-500'>𝓌𝒾𝓉𝒽 </span> <br /> <span className='text-5xl font-bold text-sky-800'> Study Zone</span></p>
                    <Link><button className="btn btn-info absolute top-72 left-24">Resister</button></Link>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={img2} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={img3} className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={img4} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>

    );
};

export default Banner;