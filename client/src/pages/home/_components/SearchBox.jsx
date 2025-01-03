import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FilterListIcon from '@mui/icons-material/FilterList';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function SearchBox() {
    return (
        <>
        <div className='relative z-20  top-[200px]'>
            <div className='   max-w-[600px] rounded-full bg-white h-20 flex justify-between items-center mx-auto'>
                <div className='px-4' >
                <LocationOnIcon/>
                <input type="text" placeholder='Search Location' className='outline-none ml-3' value='Search Location' />
                </div>
                <div className='border-l border-black px-4'>
                    <button className='bg-[#7C11F7] text-white rounded-full py-[10px] px-[30px]'>Search</button>
                </div>
            </div>
            <div className=' flex justify-start items-start gap-2 mx-auto max-w-[600px] py-2  '>
                <div className='bg-[#7C11F7] text-white h-fit px-6 py-3 rounded-full'><FilterListIcon/> Filter</div>
                <ul>
                    <li className='bg-white text-gray-600 rounded-full  px-4 py-[6px] flex gap-4 '>Flat/Apartment <HighlightOffIcon/></li>
                </ul>
            </div>
            </div>
        </>
    )
}

export default SearchBox