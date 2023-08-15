import React from 'react'
import {Outlet} from 'react-router-dom'
import { SideBarRight, SideBarLeft } from '../../components'

const Public = () => {
	return (
		<div className='w-full flex bg-[#FADCDB]'>
			<div className='w-[240px] flex-none'>
				<SideBarLeft />
			</div>

			<div className='flex-auto'>
				<Outlet />
			</div>

			<div className='w-[329px] flex-none'>
				<SideBarRight />
			</div>
			
		</div> 
	)
}

export default Public 