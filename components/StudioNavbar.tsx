import Link from 'next/link'
import React from 'react'
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

function StudioNavbar(props: any) {
  return (
    <div>
        <div className='flex items-center justify-between p-5'>
            <Link href="/" className='text-[#f7ab0a] flex items-center'>
                <ArrowUturnLeftIcon className='h-6 w-6 text-[#f7ab0a] mr-2'/>
                Go To Website
            </Link>
        </div>

        {/* <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#f7ab0a]">
            <h1 className="font-bold text-white">MNK Blog</h1>
            <Link href="#" className="text-[#f7ab0a] font-bold ml-2">

            </Link>
        </div> */}
        <>
        {props.renderDefault(props)}
        </>
    </div>
  )
}

export default StudioNavbar