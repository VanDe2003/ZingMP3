import icons from "./icons"

const {GiMusicalScore} = icons

export const sidebaMenu = [
	{
		path: 'mymusic',
		text: 'Cá Nhân',
		icons: <GiMusicalScore size={24}/>
	},
	{
		path: '',
		text: 'Khám Phá',
		end: true,
		icons: <GiMusicalScore size={24}/>
	},
	{
		path: 'zing-chart',
		text: '#zingchart',
		icons: <GiMusicalScore size={24}/>
	}
]