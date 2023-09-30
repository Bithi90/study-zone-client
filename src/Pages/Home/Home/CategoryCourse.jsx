import { useEffect, useState } from "react";
import Details from "../../Details/Details";


const CategoryCourse = () => {

    const [filterCourses, setFilterCourses] = useState([]);

    useEffect(() => {

        fetch('course.json')
        .then(res => res.json())
        .then(data=> {
            const popularItems = data.filter(item=> item.cetegoriId === 'math');
            setFilterCourses(popularItems)
        })
    }, [])
    return (
        <div>
            {
                filterCourses.map(item => <Details
                key={item.id}
                item={item}
                ></Details>)
            }
        </div>
    );
};

export default CategoryCourse;