import React, {useEffect, useState} from 'react'
import {Button, Card, Chip, IconButton} from "@mui/material";
import BedTwoToneIcon from '@mui/icons-material/BedTwoTone';
import BathtubTwoToneIcon from '@mui/icons-material/BathtubTwoTone';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import GarageIcon from '@mui/icons-material/Garage';
import {useNavigate} from "react-router-dom";

const PropertyCard = ({property}) => {
    const navigate = useNavigate();
    const [favourite, setFavourite] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleFavourite = () => {
        // if(favourite){
        //     setFavourite(false);
        // }
        //
        // else{
        //     setFavourite(true);
        // }
        setFavourite(!favourite);
    }

    // // Image slider logic
    // useEffect(() => {
    //     const imageChangeInterval = setInterval(() => {
    //         // Update current image index (cycle through images)
    //         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % property.images.length);
    //     }, 3000); // Change image every 3 seconds
    //
    //     // Cleanup interval on component unmount
    //     return () => clearInterval(imageChangeInterval);
    // }, [property.images.length]);

    // Image slider logic that only works when hovered
    useEffect(() => {
        let imageChangeInterval;

        if (isHovered) {
            imageChangeInterval = setInterval(() => {
                // Update current image index (cycle through images)
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % property.images.length);
            }, 2000); // Change image every 3 seconds
        }

        // Cleanup interval when the hover ends
        return () => clearInterval(imageChangeInterval);
    }, [isHovered, property.images.length]);

    return (
        <Card className='w-[266px] h-[520px]'
        onMouseEnter={() => setIsHovered(true)} // Start slider on hover
        onMouseLeave={() => setIsHovered(false)} // Stop slider when hover ends
        >
            <div className='bg-[#f3e9ff] h-full'>
                <div className='relative flex justify-center py-3.5'>

                    {/* Dots Indicator */}
                    <div className='absolute bottom-6 flex space-x-2'>
                        {property.images.map((_, index) => (
                            <div
                                key={index}
                                className={`rounded-full transition-all duration-300 ${currentImageIndex === index ? 'bg-white w-3 h-3' : 'bg-white w-2 h-2 opacity-50'}`}
                            />
                        ))}
                    </div>
                    {/* Image Carousel */}
                    <img className='w-[235px] h-[230px] rounded-xl object-cover'
                         src={property?.images[currentImageIndex]} // Use the current image
                         alt=""/>

                    <div  className='!absolute !top-2 !right-2 !m-2 hover:bg-gray-300 hover:bg-opacity-50 rounded-full' onClick={handleFavourite}>
                        <IconButton>
                            {favourite ? <FavoriteIcon style={{color: "red"}}/> : <FavoriteIcon />}
                        </IconButton>
                    </div>

                    <div
                        className='text-[10px] bg-violet-500 w-fit rounded-r-xl p-1 px-2 absolute top-8 left-[15.5px] text-white pl-2'>
                        {property.propertyRights}
                    </div>
                </div>

                <div className='px-4 w-full justify-between relative mt-3'>
                    <div className='space-y-1'>
                        <p className='font-semibold text-xl'>{property?.name}</p>
                        <p className='text-gray-500 text-[12px]'>
                            {property?.city}
                        </p>
                        <p className='font-semibold !mt-4'>{property?.type}</p>
                    </div>
                    <div className='-ml-2.5'>
                        <IconButton>
                            <BedTwoToneIcon/>
                            <span className='text-sm font-semibold'>{property?.bedrooms}</span>
                        </IconButton>
                        <IconButton>
                            <BathtubTwoToneIcon/>
                            <span className='text-sm font-semibold'>{property?.bathrooms}</span>
                        </IconButton>
                        <IconButton>
                            <FoodBankIcon/>
                            <span className='text-sm font-semibold'>{property?.kitchen}</span>
                        </IconButton>
                    </div>
                    <div className='bg-[#7c11f7] rounded-xl px-3 w-fit'>
                        <p className='font-semibold text-white'>₹ {property?.minPrice} - {property.maxPrice} L</p>
                    </div>
                    <div>
                        <p className='font-semibold mt-4'>{property?.status}</p>
                    </div>
                    <div className='-ml-2.5'>
                        <IconButton>
                            <AspectRatioIcon fontSize="small"/>
                            <span className='text-[9px] -mb-2 font-semibold'>{property?.squareFeet} sqft</span>
                            <p className='text-[21px] absolute left-[74px]'>|</p>
                        </IconButton>
                        <IconButton>
                            <GarageIcon fontSize="small"/>
                            <span className='text-[9px] -mb-2 font-semibold'>400 sqft</span>
                        </IconButton>

                        <button className='bg-[#7c11f7] rounded-full w-[88px] p-0.5 text-white absolute right-2 bottom-0.5'>
                            Contact
                        </button>
                    </div>

                    {/*<button className='absolute right-0'>*/}
                    {/*    Contact*/}
                    {/*</button>*/}

                    {/*<div className='flex justify-center mt-2'>*/}
                    {/*    <Button variant='contained' color='success' onClick={() => handleClickButton(property.propertyId)}>*/}
                    {/*        GET PROPERTY*/}
                    {/*    </Button>*/}
                    {/*</div>*/}
                </div>
            </div>
        </Card>
    )
}
export default PropertyCard
