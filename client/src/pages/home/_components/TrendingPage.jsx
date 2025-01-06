import React, { useEffect, useState } from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { IconButton } from "@mui/material";
import BedIcon from "@mui/icons-material/BedOutlined";
import BathtubIcon from "@mui/icons-material/BathtubOutlined";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { NavigateNext } from '@mui/icons-material';


const TrendingPage = () => {

    const images = [
        "https://images.unsplash.com/photo-1542736048-41503156855b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1430285561322-7808604715df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxob3VzZXN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1444212568492-d2799d30943b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxob3VzZXN8ZW58MHx8MHx8fDA%3D"
    ]

    const properties = [
        {
            id: 1,
            city: "Chennai",
            description: "Chennai, formerly known as Madras, is the capital city of Tamil Nadu, the southernmost state of India. It is the state's primate city and is located on the Coromandel Coast of the Bay of Bengal. According to the 2011 Indian census, Chennai is the sixth-most populous city in India and forms the fourth-most populous urban agglomeration."
        },
        {
            id: 2,
            city: "Mumbai",
            description: "Mumbai, located on the western coast of India along the Arabian Sea, is the financial and commercial capital of the country. As the most populous city in India, it is home to over 20 million people. Mumbai is famous for its vibrant culture, iconic landmarks such as the Gateway of India, Marine Drive, and the Taj Mahal Palace hotel."
        },
        {
            id: 3,
            city: "Hyderabad",
            description: "Hyderabad, the capital of Telangana, is a city that beautifully blends old-world charm with modernity. Known for its rich history, Hyderabad is famous for landmarks like Charminar, Golconda Fort, and the Chowmahalla Palace. It has a deep connection to its Mughal and Nizam heritage."
        },
        {
            id: 4,
            city: "Delhi",
            description: "Delhi, the capital city of India, is a sprawling metropolis that serves as the political center of the country. With a rich history dating back over a thousand years, Delhi is a fusion of the ancient and the modern."
        }
    ]

    // Array to track which images have been shrunk
    const [shrinkedImages, setShrinkedImages] = useState([]);

    const [propertyId, setPropertyId] = useState(0);

    // const [cardHoverIndex, setCardHoverIndex] = useState(null);

    // const handleCardHover = (index) => {
    //     setCardHoverIndex(index);
    // }

    // Handle hover, adding the image index to the shrinked state
    const handleCardHover = (index) => {
        if (!shrinkedImages.includes(index)) {
            setShrinkedImages([...shrinkedImages, index]);
        }
    };

    const cardVariants = {
        normal: {
            width: "243px",
            height: "258px"
        },
        shrinked: {
            width: "240px",
            height: "165px",
            padding: "8px",
            marginLeft: "1px"
        }
    }

    const handlePrevBtn = () => {
        if (propertyId === 0) {
            setPropertyId(properties.length - 1)
        }
        else {
            setPropertyId(propertyId - 1)
        }
    }

    const handleNextBtn = () => {
        if (propertyId === properties.length - 1) {
            setPropertyId(0)
        }
        else {
            setPropertyId(propertyId + 1)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextBtn();
        }, 3000); // Change page every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [propertyId]); // Dependency array to trigger effect

    return (
        <div className="w-full h-full  pl-0 py-16">
            <div className='ml-20 mb-4 ' >
                <p className='text-sm font-medium'>Best Projects of the year</p>
                <h1 className='text-2xl font-semibold'>TRENDING PROJECTS</h1>
            </div>
            <div className='w-fit flex justify-center'>
                <Box sx={{ flexGrow: 1, flexWrap: 'wrap' }} className='mt-4'>
                    <Grid container spacing={0} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Grid size={5} className='flex flex-wrap gap-4'>

                            {
                                images.map((item, index) =>
                                    <motion.div key={index}
                                        className='w-[243px] h-[278px] bg-[#f3e9ff] rounded-xl'
                                        onHoverStart={() => handleCardHover(index)}
                                    >
                                        <motion.img className="relative rounded-xl"
                                            variants={cardVariants}
                                            initial='normal'
                                            animate={shrinkedImages.includes(index) ? 'shrinked' : 'normal'}
                                            transition={{ duration: 0.4 }}
                                            src={item}
                                            alt=""
                                        />

                                        {
                                            shrinkedImages.includes(index) && (
                                                <motion.div className='px-2.5 font-semibold'>
                                                    <h1>Indux Groups Estate</h1>
                                                    <IconButton className='!p-0 !-ml-1'>
                                                        <LocationOnOutlinedIcon />
                                                        <span className='text-sm'>Mumbai</span>
                                                    </IconButton>

                                                    <div className='flex -ml-2'>
                                                        <IconButton>
                                                            <BedIcon />
                                                            <span className='text-sm font-semibold'>3</span>
                                                        </IconButton>
                                                        <IconButton className='!ml-3'>
                                                            <BathtubIcon />
                                                            <span className='text-sm font-semibold'>2</span>
                                                        </IconButton>

                                                        <IconButton className='!ml-8'>
                                                            <AspectRatioIcon />
                                                            <span className='text-[10px] -mb-2 font-semibold'>1800 sqft</span>
                                                        </IconButton>
                                                    </div>
                                                </motion.div>
                                            )
                                        }
                                    </motion.div>
                                )
                            }

                            {/*<img className="w-[243px] h-[258px] rounded-xl" src="https://images.unsplash.com/photo-1510629326852-3f0946701bc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D" alt=""/>*/}
                            {/*<img className="w-[243px] h-[258px] rounded-xl" src="https://images.unsplash.com/photo-1510629326852-3f0946701bc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D" alt=""/>*/}
                            <div className='w-[243px] h-[258px] rounded-xl px-6 flex flex-col items-center'>
                                <img className='w-[174px] h-[169px]' src="baranimation.gif" alt="" />

                                <button className='bg-[#7c11f7] text-white rounded-md w-[135px] h-[40px] mt-5'>
                                    Explore
                                </button>
                            </div>
                        </Grid>
                        <Grid size={5}>
                            <div className='border-2 max-w-[520px] h-fit -mt-1 rounded-xl bg-[#f3e9ff]'>
                                {
                                    properties.map((item, index) => (
                                        propertyId === index && (
                                            <>
                                                <motion.div key={index} className='px-8 py-4'
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.9 }}
                                                >
                                                    <h1 className='text-xl font-semibold'>
                                                        {item.city} Properties
                                                    </h1>

                                                    <p className='mt-4'>
                                                        {item.description}
                                                    </p>
                                                </motion.div>

                                                <motion.div className='px-0 flex justify-evenly flex-wrap text-center'
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.9 }}
                                                >
                                                    <div className='px-12'>
                                                        <div
                                                            className="w-[130px] h-32 flex flex-col items-center justify-center tracking-tighter">
                                                            <h1 className='text-2xl font-semibold text-[#831ef7]'>00+</h1>
                                                            <p className='text-sm mt-2 font-medium'>Low Budget Flats in {item.city}</p>
                                                        </div>
                                                    </div>

                                                    <div className='px-12'>
                                                        <div
                                                            className="w-[130px] h-32 flex flex-col items-center justify-center tracking-tighter">
                                                            <h1 className='text-2xl font-semibold text-[#831ef7]'>00+</h1>
                                                            <p className='text-sm mt-2 font-medium'>Properties for Sale in {item.city}</p>
                                                        </div>
                                                    </div>

                                                    <div className='px-11'>
                                                        <div
                                                            className="w-[140px] h-32 flex flex-col items-center justify-center tracking-tighter">
                                                            <h1 className='text-2xl font-semibold text-[#831ef7]'>00+</h1>
                                                            <p className='text-sm mt-2 font-medium'>Residential Properties
                                                                Agents in {item.city}</p>
                                                        </div>
                                                    </div>

                                                    <div className='px-11'>
                                                        <div
                                                            className="w-[140px] h-32 flex flex-col items-center justify-center tracking-tighter">
                                                            <h1 className='text-2xl font-semibold text-[#831ef7]'>00+</h1>
                                                            <p className='text-sm mt-2 font-medium'>Residential Properties
                                                                in {item.city}</p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </>
                                        )
                                    ))
                                }

                                <div className='flex items-center justify-center gap-4 mb-4 '>
                                    <button
                                        className='rounded-full bg-white text-xl pb-1 font-semibold w-[32px] h-[32px] border border-gray-300 text-purple-700 disabled:opacity-50 transition-transform duration-150 active:scale-95'
                                        onClick={handlePrevBtn}
                                    // disabled={isPrevDisabled}
                                    >
                                        <NavigateBeforeIcon />
                                    </button>

                                    <button
                                        className='rounded-full bg-white text-xl pb-1 font-semibold w-[32px] h-[32px] border border-gray-300 text-purple-700 disabled:opacity-50 transition-transform duration-150 active:scale-95'
                                        onClick={handleNextBtn}
                                    // disabled={isNextDisabled}
                                    >
                                        <NavigateNextIcon />
                                    </button>
                                </div>

                            </div>

                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}
export default TrendingPage
