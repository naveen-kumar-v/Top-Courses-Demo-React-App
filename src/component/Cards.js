import React, { useState } from 'react';
import Card from './Card';

export default function Cards({ courses, category }) {

    const [likedCourse, setLikedCourse] = useState([])

    const getCourses = () => {

        if (category === 'All') {
            let allCourses = [];
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


    return (
        <div className='cards'>
            {getCourses().map((course) => (
                <Card
                    course={course}
                    key={course.id}
                    likedCourse={likedCourse}
                    setLikedCourse={setLikedCourse}
                />
            ))}
        </div>
    );
}
