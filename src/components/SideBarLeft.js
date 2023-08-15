import React from 'react'
import logoMP3 from '../assets/logoMP3.svg'
import { sidebaMenu } from '../ultis/menu'
import { NavLink} from 'react-router-dom'

const notActiveStyle = 'flex py-2 px-[25px] font-bold text-[13px] text-[#32323D] grap-[12px] items-center'
const activeStyle = 'flex py-2 px-[25px] font-bold text-[13px] text-[#b72479] grap-[12px] items-center'

const SideBarLeft = () => {
	return (
		<div className = 'flex flex-col bg-[#FCE5E5]'>
			<div className='w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center'>
				<img src={logoMP3} alt="logo page" className='w-[120px] h-10'/>
			</div>

			<div className='flex flex-col'>
				{sidebaMenu.map( item => (
					<NavLink
						to={item.path}
						key={item.path}
						end={item.end}
						className = {({isActive}) => isActive ? activeStyle : notActiveStyle}
						>
				 		{item.icons}
				 		<span className='px-[10px]'>{item.text}</span>
					</NavLink>
				))}
			</div>
		</div>
	)
}

export default SideBarLeft  