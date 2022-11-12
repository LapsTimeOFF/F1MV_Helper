module.exports = {
	data: {
		name: 'sub-menu'
	},
	async execute(interaction, client) {
		await interaction.channel.send({
			content: `${interaction.values[0]}`
		});
	}
};