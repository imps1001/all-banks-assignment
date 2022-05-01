import React, { useState, useMemo , useEffect, useRef , useCallback} from "react";
import Pagination from './Pagination';
import '../css/styles.css';
import {useNavigate} from 'react-router-dom'
import {BsHeart,BsHeartFill} from 'react-icons/bs';
import Loading from '../components/Loading.component';
import SearchBar from '../components/SearchBar';
import imgSrc from '../assets/no-data-found.webp';
const Main = () => {

  /* -- Useful states, constants & variables -- */
  const [data, setData] = useState([])
  const cache = useRef({});
  const [filteredData,setFilteredData] = useState([])
  const [loading,setLoading] = useState(true)
  const [city ,setCity] = useState("BENGALURU");
  const [currentPage, setCurrentPage] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [category,setCategory] = useState(["ifsc"])
  const [favorites,setFavorites] = useState([])
  const [suggestions, setSuggestions] = useState("");
  const [PageSize,setPageSize] = useState(10);
  const url = `https://vast-shore-74260.herokuapp.com/banks?city=${city}`;
  const history = useNavigate();
  const getArray  = JSON.parse(localStorage.getItem('favorites')||'0');
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage,filteredData,PageSize]);

 /* -- Useful utility functions -- */

 // adds and removes data from localStorage regarding favorites
  const addFav = (item,ifsc)=>{  
    let array = favorites
    let addArray = true;
    array.map((i:any,key:number)=>{
        if(i===ifsc){
            array.splice(key,1);
            addArray = false
        }
    })
    if(addArray){
        array.push(ifsc)
    }
    setFavorites([...array])
    localStorage.setItem('favorites', JSON.stringify(favorites))
    var storage = localStorage.getItem('favitem'+(ifsc||'0'))
    if(storage==null){
      localStorage.setItem(('favitem'+ifsc),JSON.stringify(item));
    }
    else{
        localStorage.removeItem(('favitem'+ifsc));
    }
}
// debouce 
const debounce = (func, timeout = 300) =>{
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
// fetch api data
const fetchData = () => {
  let banks;
banks = window.sessionStorage.getItem(`${city}-banks`);
  if (banks!==null) {
      banks = eval(banks);
      console.log(banks)
      setData(banks);
      setFilteredData(banks)
      setCurrentPage(1)
      setLoading(false)
  }
  else{
  fetch(data)
    .then(response => {
      return response.json()
    })
    .then(data => {
     
      setData(data)
      console.log(data)
      window.sessionStorage.setItem(
          `${city}-banks`,
          JSON.stringify(data)
      ); 
      setFilteredData(data)
      setCurrentPage(1)
      setLoading(false)

    })
}}
// handle city changes
function handleCityChange(event){
  
  setCity(event.target.value)
  setLoading(true)
  setCurrentPage(0)
}
// handle category change
function handleCategoryChange(e){
  setCategory([e.target.value])
}
// handle search
const handleSearch = debounce((d) => {
  //e.preventDefault();
  let value = d.toLowerCase();
  setSearchInput(value);
  if(value !==''){
    setFilteredData(data.filter(elem => elem[category].toString().toLowerCase().includes(value)))
  }
  else{
    console.log(data)
    setData(data)
    setFilteredData(data)
    setCurrentPage(1)
  }
  
});  

/* use effect */
useEffect(() => {
    fetchData()
    if(getArray!==0)
    setFavorites([...getArray])
   
  }, [city])


/* tabel renders*/

  return (
    <>
    <div className="selection">
        <select className="select border-solid border-2 border-gray-700 h-12" onChange={handleCityChange}>
          <option value="HYDERABAD">Hyderabad</option>
          <option value="KOLKATA">Kolkata</option>
          <option value="JHANSI">Jhansi</option>
          <option value="NOIDA">Noida</option>
          <option value="PUNE">Pune</option>
          <option value="JAIPUR">Jaipur</option>
          <option value="GWALIOR">Gwalior</option>
          <option value="ALLAHABAD">Allahabad</option>

        </select>
        <select className="select border-solid border-2 border-gray-700 h-12" onChange={handleCategoryChange}>
          <option value="ifsc">IFSC</option>
          <option value="bank_name">Bank Name</option>
          <option value="bank_id">Bank ID</option>
          <option value="branch">Branch</option>
          <option value="state">State</option>
          <option value="district">District</option>
        </select>
        <div className="search h-12 mr-4 mt-2 border-2 border-green-700 flex items-center justify-center rounded-sm">
        <SearchBar
        searchInput={searchInput} setSearchInput={setSearchInput} onChange= {handleSearch}
      />
        </div>
      </div>

      <div className="styled-table">
      <table>
       <thead>
          <tr>
            <th>Bank</th>
            <th>IFSC</th>
            <th>Branch</th>
            <th>Bank ID</th>
            <th>Address</th>
          </tr>
          </thead>
        <tbody>
          {     loading ?  <Loading/> :(
               currentTableData.length!=0? currentTableData.map(item => {
            return (
              
                          <tr >
                 <td onClick={()=>{ 
                  history(`/bank-details/${item.ifsc}`,{state:item});}}>{item.bank_name}</td> 
                 <td onClick={()=>{ 
                  history(`/bank-details/${item.ifsc}`,{state:item});}}>{item.ifsc}</td>  
                 <td onClick={()=>{ 
                  history(`/bank-details/${item.ifsc}`,{state:item});}}>{item.branch}</td>
                 <td onClick={()=>{ 
                  history(`/bank-details/${item.ifsc}`,{state:item});}}>{item.bank_id}</td>
                 <td onClick={()=>{ 
                  history(`/bank-details/${item.ifsc}`,{state:item});}}>{item.address}</td>
                 <td>
                     {   
                      favorites.includes(item.ifsc)?(
                     <BsHeartFill onClick={()=>addFav(item,item.ifsc)} style={{color:'#5367ff'}}/>)
                     :<BsHeart onClick={()=>addFav(item,item.ifsc)} style={{color:'#00dba7'}}/>
                     }
                 </td>
              </tr>
           
            );
          })
          :
          <img src={imgSrc} alt="Oops no data found"/>)
          }
        </tbody>
      </table>
     
      <div style={{ display:'flex', marginTop: "1em"}}>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={filteredData.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
      <input type='number' value={PageSize} onChange={(e)=>setPageSize(e.target.value)}></input>
      </div>
      </div>
      <div></div>
    </>
  );
}


export default Main;