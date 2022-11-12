const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with Pong!"),
    async execute(interaction, client) {
        const embed = new EmbedBuilder().setTitle("Current Ping").addFields(
            {
                name: "WebSocket ping :",
                value: client.ws.ping.toString() + "ms",
            },
            {
                name: "Bot ping :",
                value: "Pinging...",
            }
        );

        const sent = await interaction.reply({
            embeds: [embed],
            fetchReply: true,
        });

        const embed2 = new EmbedBuilder().setTitle("Current Ping").addFields(
            {
                name: "WebSocket ping :",
                value: client.ws.ping.toString() + "ms",
            },
            {
                name: "Bot ping :",
                value: `${
                    sent.createdTimestamp - interaction.createdTimestamp
                }ms`,
            }
        );

        await interaction.editReply({
            embeds: [embed2],
        });
    },
};