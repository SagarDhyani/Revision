import React, { useState } from 'react'
import './SearchBar.css'
// import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({placeholder, data}) => {

    const[text, setText] = useState("")

    const [filteredData, setfilteredData] = useState([])

    const handleFilterData = (e)=>{

        const searchCountry = e.target.value

        const newFilter = data.filter((value) => {

            return value.country.toLowerCase().includes(searchCountry.toLowerCase())
        })

        if(searchCountry == ""){

            setfilteredData([])

        }else{

            setfilteredData(newFilter)

        }

       

    }


    return (
        <div className='search'>
            
                <input type = "text" onChange ={handleFilterData}

                 placeholder= {placeholder}/>
           
            {filteredData.length != 0 && (
            <div className='dataResult'>

                {filteredData.slice(0, 15).map((value, key)=>{
                    return <p className='countryName'>{value.country}</p>
                })}
            </div>
             ) }       
            
        </div>
    )
}

export default SearchBar
