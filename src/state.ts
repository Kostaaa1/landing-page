export type TColor = 'red' | 'blue' | 'purple' | 'green'

type Cards = {
	text: string
	about: string
	btnText: string
	color: TColor
}

type navList = {
	id: number
	text: string
	url: string
}

export const cards: Cards[] = [
	{
		text: 'Redis',
		about: 'Serverless database with Redis API',
		btnText: 'Create Database',
		color: 'red'
	},
	{
		text: 'Kafka',
		about: 'Serverless Kafka and Connectors',
		btnText: 'Create Cluster',
		color: 'purple'
	},
	{
		text: 'QStash',
		about: 'Messaging for the Serverless',
		btnText: 'Publish Messages',
		color: 'blue'
	}
]

export const navList = [
	{
		id: 0,
		text: 'Pricing',
		url: '/pricing'
	},
	{
		id: 1,
		text: 'Docs',
		url: '/docs'
	},
	{
		id: 2,
		text: 'Resources',
		url: '/resources'
	},
	{
		id: 3,
		text: 'Company',
		url: '/company'
	}
]

export const gradientVariants = {
	blue: 'from-blue-500 to-blue-300',
	red: 'from-red-500 to-red-300',
	green: 'from-emerald-500 to-yellow-300',
	purple: 'from-purple-500 to-purple-300'
}

export const backgroundVariants = {
	blue: 'bg-blue-500',
	red: 'bg-red-500',
	green: 'bg-emerald-500',
	purple: 'bg-purple-500'
}

export const buttonVariants = {
	blue: `group-hover:bg-blue-500`,
	red: `group-hover:bg-red-500`,
	green: `group-hover:bg-green-500`,
	purple: `group-hover:bg-purple-500`
}
