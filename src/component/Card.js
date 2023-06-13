import React from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';


export default function Card({ course, likedCourse, setLikedCourse }) {

    const handleClick = () => {
        if (likedCourse.includes(course.id)) {
            setLikedCourse((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like removed")
        }
        else {
            if (likedCourse.length === 0) {
                setLikedCourse([course.id])
            }
            else {
                setLikedCourse((prev) => [...prev, course.id]);
            }
            toast.success("Liked successfully!")
        }
    }

    let desc = `${course.description.substring(0, 200)}...`;
    return (
        <div className='card'>
            <div className='card-img-icon'>
                <img src={course.image.url} alt={course.image.alt} />

                <div className="icon">
                    <button className='btnn' onClick={handleClick}>
                        {likedCourse.includes(course.id) ? <FcLike fontSize="1.5rem" /> : <FcLikePlaceholder fontSize="1.5rem" />}
                    </button>
                </div>

            </div>
            <div className='card-info'>
                <p className='card-title'>{course.title}</p>
                <p className='card-desc'>{desc}</p>
            </div>
        </div>
    )
}
