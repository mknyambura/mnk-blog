import React from 'react'
import logo from '../components/images/logo_img.jpg'

function Logo(props: any) {
    const { renderDefault, title } = props;
  return (
    <div className='flex items-center space-x-2'>
        <img
            className='rounded-full object-cover'
            height={50}
            width={30}
            src={logo}
            alt='logo'
        />
        {renderDefault && 
            <>
                {renderDefault(props)}
            </>
        }
    </div>
  )
}

export default Logo