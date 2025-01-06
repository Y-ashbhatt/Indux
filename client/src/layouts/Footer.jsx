import React from 'react'

const Footer = () => {
    return (
        <section className='w-full  bg-[#7C11F7]' >
            <div className=' max-w-[1450px] w-full flex justify-around mx-auto p-6 '>
                <div className='w-1/3 flex flex-col items-center  text-white '>
                    <figure >
                        <img src="Induxlogobig.png" alt="" className='h-[110px]  block mx-auto mb-2' />
                    </figure>
                    <p>Connect with us</p>
                    <div className='flex gap-5' >
                        <img src="facebook.svg" alt="Facebook" className='h-6' />
                        <img src="linkedin.svg" alt="LinkedIn" className='h-6' />
                        <img src="instagram.svg" alt="Instagram" className='h-6' />
                    </div>
                </div>
                <div className='w-2/3 flex justify-evenly items-start '>
                    <div >
                        <h2 className='text-white text-lg mb-4'>QUICK LINK</h2>
                        <ul className='flex items-start flex-col gap-4'>
                            <li className='text-white text-[16px] '>Home</li>
                            <li className='text-white text-[16px] '>Buy</li>
                            <li className='text-white text-[16px] '>Sell</li>
                            <li className='text-white text-[16px] '>Articles</li>
                            <li className='text-white text-[16px] '>About Us</li>
                            <li className='text-white text-[16px] '>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-white text-lg mb-4'>TERMS & CONDITIONS</h2>
                        <div className='max-w-[296px] text-white'>
                            By using Indux Groups, you agree to comply with our terms, including lawful use and accuracy of information. We are not liable for third-party content or changes to property listings.
                        </div>
                    </div>
                    <div>
                        <h2 className='text-white text-lg mb-4'>CONTACT </h2>
                        <p className='mb-2 text-white'>contact@induxsolar.com</p>
                        <p className='text-white'>+91 8421538753</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;