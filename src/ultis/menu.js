import icons from "./icons"

const {GiMusicalScore, IoEarthOutline, SiSoundcharts} = icons

export const sidebaMenu = [
	{
		path: 'mymusic',
		text: 'Cá Nhân',
		icons: <GiMusicalScore size={20}/>
	},
	{
		path: '',
		text: 'Khám Phá',
		end: true,
		icons: <IoEarthOutline size={20}/>
	},
	{
		path: 'zing-chart',
		text: '#zingchart',
		icons: <SiSoundcharts size={20}/>
	}
]