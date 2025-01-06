import React from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';


function HeaderSearchBar() {
    return (
        <>
            <div>
                <div className='   max-w-[1000px] rounded-full bg-white h-14 border border-[#7C11F7] flex justify-between items-center mx-auto'>
                    <div className='px-4' >
                        <select className='text-[#7C11F7] outline-none'>
                            <option value="Buy">Buy</option>
                            <option value="Rent">Rent</option>
                        </select>
                        <input type="text" placeholder='Search Location' className='outline-none ml-3' value='Search Location' />
                    </div>
                    <FilterListIcon className='text-[#7C11F7] mr-2' />
                    <div className='border-l border-[#7C11F7] px-4'>
                        <button className='bg-[#7C11F7] text-white rounded-full py-[8px] px-[30px]'>Search</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderSearchBar