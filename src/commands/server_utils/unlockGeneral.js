const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName("unlock")
        .setDescription("Unlock the channel."),
    async execute(interaction, client) {
        await interaction.reply({
            ephemeral: true,
            content: 'Got it!'
        });

        await interaction.channel.permissionOverwrites.edit("1040669683231240212", { SendMessages: null });

        await interaction.channel.send({
            content: `Yes we're back !`
        })
    },
};