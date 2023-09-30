/* eslint-disable react/prop-types */


const Course = ({ item }) => {

    const { name, Price, Instructor_name ,picture, description } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">{name}!</h2>
                <p>{description}</p>
                <div className="flex gap-8 font-bold"> 
                    <p>Instructor_name: {Instructor_name}</p>
                    <p> Price : {Price}$</p>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;