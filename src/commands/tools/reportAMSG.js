const {
    ContextMenuCommandBuilder,
    ApplicationCommandType,
    EmbedBuilder,
    ButtonBuilder,
    ButtonStyle,
    ModalBuilder,
    ActionRowBuilder,
    TextInputBuilder,
    TextInputStyle,
} = require("discord.js");

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName("Report this message")
        .setType(ApplicationCommandType.Message),

    async execute(interaction, client) {
        const msg = await interaction.channel.messages.fetch(
            interaction.targetId,
        );
        const channel = client.channels.cache.find(
            (channel) => channel.id === "999727530246426706",
        );
        const embed = new EmbedBuilder()
            .setTitle("New message reported")
            .setDescription(`${interaction.user} reported a message.`)
            .setColor(0x18e1ee)
            .addFields(
                {
                    name: "Channel",
                    value: `${interaction.channel}`,
                },
                {
                    name: "Content",
                    value: `${msg.content}`,
                },
                {
                    name: "Message author",
                    value: `${msg.author}`,
                },
            );
        button = new ButtonBuilder()
            .setCustomId("delete")
            .setEmoji("🗑️")
            .setLabel("Delete this report")
            .setStyle(ButtonStyle.Danger);
        button2 = new ButtonBuilder()
            .setLabel("Go to the message")
            .setStyle(ButtonStyle.Link)
            .setURL(msg.url);

        channel.send({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button, button2)],
        });

        const modal = new ModalBuilder()
            .setCustomId("report-modal")
            .setTitle("Report this message");

        const textInput = new TextInputBuilder()
            .setCustomId("report-reason")
            .setLabel("Why do you report this message ?")
            .setRequired(true)
            .setStyle(TextInputStyle.Short);

        modal.addComponents(new ActionRowBuilder().addComponents(textInput));

        await interaction.showModal(modal);
    },
};
