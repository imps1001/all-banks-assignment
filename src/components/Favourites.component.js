import React, { useState, useMemo , useEffect, useRef , useCallback} from "react";
import Pagination from './Pagination';
import {useNavigate} from 'react-router-dom';
import {BsHeartFill, BsHeart} from 'react-icons/bs';
import Loading from "./Loading.component";
import imgSrc from '../assets/no-data-found.webp';
import '../css/styles.css';

 const Favourites = () => {

    /* -- Useful states, constants & variables -- */
  let favorites = JSON.parse(localStorage.getItem('favorites')||'0');
  const [favList,setFavList] = useState([]);
  const [loading,setLoading] = useState(false)
  const [city ,setCity] = useState("HYDERABAD");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData,setFilteredData] = useState([])
  const [searchInput, setSearchInput] = useState("");
  const [category,setCategory] = useState(["ifsc"])
  const [PageSize,setPageSize] = useState(10);
  const history = useNavigate();
  

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
    favorites =array
    localStorage.setItem('favorites', JSON.stringify(favorites))
    var storage = localStorage.getItem('favitem'+(ifsc||'0'))
    if(storage==null){
      localStorage.setItem(('favitem'+ifsc),JSON.stringify(item));
    }
    else{
        localStorage.removeItem(('favitem'+ifsc));
        setFavList(favList.filter((item)=>item!=ifsc))
    }
  }

  // pagination
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return favList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage,favList,PageSize]);


  /* use effect */
  useEffect(()=>{
    let f = []
    for(var i=0;i<favorites.length;i++){
        let x = favorites[i];
        f.push(JSON.parse(localStorage.getItem('favitem'+[x])||''))
    }
    setFavList(f);
  }, [favList])

  return (
    <>
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
      </>
  );
}

export default Favourites;
