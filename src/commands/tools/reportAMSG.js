const {
    ContextMenuCommandBuilder,
    ApplicationCommandType,
    EmbedBuilder,
    ButtonBuilder,
    ActionRowBuilder,
    ButtonStyle,
} = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('Report this message')
        .setType(ApplicationCommandType.Message),

    async execute(interaction, client) {
        const msg = await interaction.channel.messages.fetch(
            interaction.targetId
        );

        // interaction.reply({
        //     content: `${msg.author} : ${msg.content}`,
        // });
        await interaction.reply({
            content:
                'Thanks for reporting this message to the moderation team, we will check this message as soon as possible.',
            ephemeral: true,
        });

        const channel = client.channels.cache.find(
            (channel) => channel.id === '1040998949059838062'
        );

        const embed = new EmbedBuilder()
            .setTitle('New message reported')
            .setDescription(`${interaction.user} reported a message.`)
            .setColor(0x18e1ee)
            .addFields(
                {
                    name: 'Channel',
                    value: `${interaction.channel}`,
                },
                {
                    name: 'Content',
                    value: `${msg.content}`,
                },
                {
                    name: 'Message author',
                    value: `${msg.author}`,
                }
            );

        button = new ButtonBuilder()
            .setCustomId('delete')
            .setEmoji('🗑️')
            .setLabel('Delete this report')
            .setStyle(ButtonStyle.Danger);

        channel.send({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button)],
        });
    },
};
