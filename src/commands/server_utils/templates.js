const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('template_msg')
		.setDescription('Return a select menu !'),

	async execute(interacton) {
		const menu = new SelectMenuBuilder()
			.setCustomId('templates-menu')
			.setMinValues(1)
			.setMaxValues(1)
			.setOptions(
				new SelectMenuOptionBuilder({
					label: 'Open troubleshooting menu + screenshot it',
					value: 'troublescreen'
				}),
			);

		await interacton.reply({
			components: [new ActionRowBuilder().addComponents(menu)],
			ephemeral: true
		});
	}
};