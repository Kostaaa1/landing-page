interface Cards {
	text: string
	about: string
	btnText: string
	color: 'red' | 'blue' | 'purple' | 'green'
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
