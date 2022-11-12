module.exports = {
	data: {
		name: 'delete',
	},
	async execute(interaction) {
		await interaction.deferReply({ ephemeral: true });
		await interaction.message.delete();
		await interaction.editReply({
			content: "Report deleted.",
		});
	},
};