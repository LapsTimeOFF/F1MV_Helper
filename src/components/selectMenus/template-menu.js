const { AttachmentBuilder } = require('discord.js');

module.exports = {
	data: {
		name: 'templates-menu'
	},
	async execute(interaction, client) {
		if(interaction.values[0] === 'troublescreen') {
			await interaction.channel.send({
				content: `Open the troubleshooting menu by clicking on the little button on the left bottom corner.`,
				files: [new AttachmentBuilder('src/commands/server_utils/TroubleshootingButton.png')]
			});
			await interaction.channel.send({
				content: `Then take a screenshot of the page. There are multiple boxes, make sure you take screenshots of all of them. You can take multiple screenshots if necessary.`
			});
			return;
		}
	}
};