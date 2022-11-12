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
					label: 'FAQ',
					value: 'Check https://beta.f1mv.com/docs/getting-started/faq'
				}),
				new SelectMenuOptionBuilder({
					label: 'Black screen, DRM stuff',
					value: 'drm'
				}),
				new SelectMenuOptionBuilder({
					label: 'Stuttering, lagging',
					value: 'sht'
				}),
				new SelectMenuOptionBuilder({
					label: 'Positioning, sizing',
					value: 'Check https://beta.f1mv.com/docs/usage/player-context-menu'
				}),
				new SelectMenuOptionBuilder({
					label: 'Syncing',
					value: 'Check https://beta.f1mv.com/docs/usage/syncing-streams'
				}),
				new SelectMenuOptionBuilder({
					label: 'Why is the default latency 30s?',
					value: 'sync'
				}),
				new SelectMenuOptionBuilder({
					label: 'How does the telemetry work',
					value: 'Check https://beta.f1mv.com/docs/getting-started/understanding-telemetry'
				}),
				new SelectMenuOptionBuilder({
					label: 'Can I watch for free',
					value: 'free'
				}),
				new SelectMenuOptionBuilder({
					label: 'How to sign out',
					value: 'signout'
				}),
				new SelectMenuOptionBuilder({
					label: 'Keyboard shortcut',
					value: 'Check https://beta.f1mv.com/docs/usage/keyboard-shortcuts'
				})
			);

		await interacton.reply({
			components: [new ActionRowBuilder().addComponents(menu)],
			ephemeral: true
		});
	}
};