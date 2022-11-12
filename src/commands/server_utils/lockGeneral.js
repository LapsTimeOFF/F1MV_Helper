const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName("lock")
        .setDescription("Lock the channel."),
    async execute(interaction, client) {
        await interaction.reply({
            ephemeral: true,
            content: 'Got it!'
        });

        await interaction.channel.permissionOverwrites.edit("1040669683231240212", { SendMessages: false });

        await interaction.channel.send({
            content: `This channel will be locked during the session. If you need help, please use the appropriate channels:

- #issues if you're encountering errors, things keep loading
- #help if you don't understand something, or if you are new and want to learn how to use/do something
- #formula1 to discuss the session (please don't spoil events if you're ahead of the default live latency target of 30s)
- #feature-requests if you have ideas, but check the existing requests on GitHub (link in channel topic)
            
Thank you and talk after the session!`
        })
    },
};