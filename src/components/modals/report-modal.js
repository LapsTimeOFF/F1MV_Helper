const {
    ContextMenuCommandBuilder,
    ApplicationCommandType,
    EmbedBuilder,
    ButtonBuilder,
    ActionRowBuilder,
    ButtonStyle,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
} = require('discord.js');

module.exports = {
    data: {
        name: "report-modal",
    },
    async execute(interaction, client) {
        await interaction.reply({
            content:
                'Thanks for reporting this message to the moderation team, we will check this message as soon as possible.',
            ephemeral: true,
        });
        const channel = client.channels.cache.find(
            (channel) => channel.id === "1040998949059838062",
        );
        channel.send({
            content: `Reason given : ${interaction.fields.getTextInputValue(
                "report-reason",
            )}`
        })
    },
};
