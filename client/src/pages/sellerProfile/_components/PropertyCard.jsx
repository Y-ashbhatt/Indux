import React from 'react'
import {Card, IconButton} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const PropertyCard = ({property}) => {
    return (
        <Card className='h-[155px] w-[390px] text-black !rounded-lg flex'>
            <div className='p-2 mt-1 relative'>
                <img className='h-32 w-[135px] rounded-lg'
                    src={property.image} alt=""/>

                <div className='text-[10px] bg-violet-500 w-fit rounded-l-xl p-1 absolute top-6 right-[8px] text-white pl-2'>
                    {property.propertyRights}
                </div>
            </div>

            <div className='p-1 py-4'>
                <h1 className='text-md font-semibold'>{property.name}</h1>
                <div className='flex mt-1 -ml-1'>
                    <IconButton className='!p-0 '>
                        <LocationOnOutlinedIcon/>
                    </IconButton>
                    <p className='text-[12px] mt-0.5'>{property.city}, {property.state}</p>
                </div>
                <div className='mt-2 flex gap-1'>
                    <p className='text-[12px] mt-0.5'>2 & 3 BHK Apartments |</p>
                    <p className='text-[12px] mt-0.5'>{property.squareFeet} Sq.Ft</p>
                </div>
                <p className='font-semibold mt-3 text-xl'>₹ {property.minPrice} - {property.maxPrice} L</p>
            </div>
        </Card>
    )
}
export default PropertyCard
