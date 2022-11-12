const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('useful_link')
		.setDescription('Return a select menu !'),

	async execute(interacton) {
		const menu = new SelectMenuBuilder()
			.setCustomId('sub-menu')
			.setMinValues(1)
			.setMaxValues(1)
			.setOptions(
				new SelectMenuOptionBuilder({
					label: 'F1TV Compatibility table',
					value: 'Check https://www.formula1.com/en/toolbar/content_schedule.html'
				}),
				new SelectMenuOptionBuilder({
					label: 'Showcase',
					value: 'Check #showcase or https://beta.f1mv.com/showcase'
				}),
				new SelectMenuOptionBuilder({
					label: 'DRM/playback issues',
					value: 'Check https://beta.f1mv.com/docs/troubleshooting/drm-playback-issues#drm-playback-issues'
				}),
				new SelectMenuOptionBuilder({
					label: 'FAQ',
					value: 'Check https://beta.f1mv.com/docs/getting-started/faq'
				})
			);

		await interacton.reply({
			components: [new ActionRowBuilder().addComponents(menu)],
			ephemeral: true
		});
	}
};