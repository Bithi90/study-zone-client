import  { useEffect, useState } from 'react';
import Course from './Course';

const Allcourse = () => {

    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => {setCourse(data)
            });
    }, [])

    return (
        <div className='grid grid-cols-3 gap-4 justify-items-center'>
            {
                course.map(item =><Course
                key={item.id}
                item={item}
                ></Course>)
            }
        </div>
    );
};

export default Allcourse;