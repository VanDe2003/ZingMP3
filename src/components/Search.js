import React from 'react'
import icons from '../ultis/icons'

const { IoIosSearch } = icons

const Search = () => {
	return (
		<div className='w-full flex items-center bg-[#EDD1D0] rounded-[20px]'>
			<span className='h-10 pl-4 flex items-center justufy-center text-[#757575]'>
				<IoIosSearch size={22}/>
			</span>
			<input className='outline-none bg-[#EDD1D0] px-4 w-full py-2 rounded-r-[20px] h-10 text-[#757575]'
			type="text"
			placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
			/>
		</div>
	)
}

export default Search 