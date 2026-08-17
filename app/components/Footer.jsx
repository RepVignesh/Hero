import { assets } from '@/assets/assets';
import React from 'react'
import Image from 'next/image'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className='w-36 mx-auto mb-2'/>

            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className='w-6'/>
                svigneshkumar2006@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex intems-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2026 S Vignesh Kumar. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/RepVignesh">Github</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/vignesh-kumar-sankar-569260237/">LinkedIn</a></li>
                <li><a target='_blank' href="https://x.com/VigneshKum87737">X</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer