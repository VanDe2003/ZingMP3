import React from 'react'
import icons from '../ultis/icons'
import {Search} from './'

const {HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft} = icons

const Header = () => {
	return (
		<div className='flex justify-between w-full items-center'>
			<div className='flex gap-6 w-full items-center'>
				<div className='flex gap-4 text-[#BDA9AB]'>
					<span><HiOutlineArrowNarrowLeft size={21}/></span>
					<span><HiOutlineArrowNarrowRight size={21}/></span>
				</div>

				<div className='w-1/2'>
					<Search />
				</div>
			</div>

			<div>
				login
			</div>
		</div> 
	)
}

export default Header 