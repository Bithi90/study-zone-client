import engimg from '../../../assets/english.jpg';
import mathimg from '../../../assets/maths.jpg';
import scienceimg from '../../../assets/science.png';
import compimg from '../../../assets/computer.jpg';
import { Link } from 'react-router-dom';

const Categori = () => {
    return (
        <div>
            <div className='text-4xl font-bold text-red-800 text-center  my-10'>
                <h2>Categories Of Coures</h2>
            </div>
            <div className='grid grid-cols-2 gap-4 justify-items-center '>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={engimg} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">English!</h2>
                        <p>English is an International language</p>
                        <div className="card-actions">
                        <Link to={`/categoryCourse`}><button className="btn btn-primary">see more</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={mathimg} alt="math" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Math!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <Link to={`/categoryCourse`}><button className="btn btn-primary">see more</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={scienceimg} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Science!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                        <Link to={`/categoryCourse`}><button className="btn btn-primary">see more</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={compimg} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Computer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                        <Link to={`/categoryCourse`}><button className="btn btn-primary">see more</button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Categori;