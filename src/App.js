import './App.css';
import React, { useState, useEffect } from 'react'
import NavBar from './component/NavBar';
import Filter from './component/Filter'
import Cards from './component/Cards'
import { apiUrl, filterData } from './data'
import { toast } from 'react-toastify';
import { Spinner } from './component/Spinner';
import DataNotFound from './component/DataNotFound';

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
        setCourses(output.data)
      }
      catch (error) {
        console.log("error")
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
        {loader ? <Spinner /> : (courses ? <Cards courses={courses} category={category} /> : <DataNotFound />)}
      </div>
    </div>
  );
}

export default App;


