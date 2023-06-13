import React from 'react'


export default function Filter({ filterData, category, setCategory }) {

    function handleCategoryClick(title) {
        setCategory(title);
    }

    return (
        <div className='filter-btns'>
            {
                filterData.map((data) => {
                    return (
                        <button
                            key={data.id}
                            onClick={() => handleCategoryClick(data.title)}
                            className={`${category === data.title ? " btn btn-light h5" : "btn btn-dark"} my-1 mx-1`}
                        >
                            {data.title}
                        </button>
                    )
                })
            }
        </div>
    )
}
