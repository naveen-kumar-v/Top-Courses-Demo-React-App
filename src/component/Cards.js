import React, { useState } from 'react';
import Card from './Card';
import DataNotFound from './DataNotFound'

export default function Cards({ courses, category }) {

    const [likedCourse, setLikedCourse] = useState([])

    let allCourses = [];
    const getCourses = () => {

        if (category === 'All') {
            if (courses) {
                Object.values(courses).forEach((courseCategory) => {
                    courseCategory.forEach((course) => {
                        allCourses.push(course);
                    });
                });
            }
            return allCourses;
        }
        else {
            return courses[category];
        }

    };

    allCourses = getCourses();

    return (

        <div className='cards'>
            {
                allCourses.map((course) => (
                    <Card
                        course={course}
                        key={course.id}
                        likedCourse={likedCourse}
                        setLikedCourse={setLikedCourse}
                    />
                ))
            }
        </div>
    );
}
