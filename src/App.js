import './App.css';
import React, { useState, useEffect } from 'react'
import NavBar from './component/NavBar';
import Filter from './component/Filter'
import Cards from './component/Cards'
import { apiUrl, filterData } from './data'
import { toast } from 'react-toastify';
import { Spinner } from './component/Spinner';

function App() {

  const [courses, setCourses] = useState(null);
  const [loader, setLoader] = useState(true);
  const [category, setCategory] = useState(filterData[0].title)

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        console.log(output);
        setCourses(output.data)
      }
      catch (error) {
        toast.error("something went wrong while fetching data");
      }
      setLoader(false);
    }
    fetchData();
  }, [])

  return (
    <div className="main-container">
      <div>
        <NavBar />
      </div>
      <div className="filter-data">
        <Filter filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div>
        {loader ? <Spinner /> : <Cards courses={courses} category={category} />}
      </div>
    </div>
  );
}

export default App;


// let oldStyle = { color: "white" };
//   const [style, setStyle] = useState(oldStyle)
//   let newStyle = { color: "red", width: "20px" }
//   function handleClick() {
//     setStyle(style.color === "white" ? newStyle : oldStyle)
//   }

//   return (
//     <div className="icon">
//       <FaHeart className='heart' style={style} onClick={handleClick} />
//     </div>
//   );