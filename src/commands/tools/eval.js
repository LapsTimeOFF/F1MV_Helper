const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName("eval")
        .setDescription("Execute JS code.")
        .addStringOption((option) =>
            option
                .setName("jscode")
                .setDescription("The code")
                .setRequired(true)
        ),
    async execute(interaction, client) {
        // @ts-ignore
        const jscode = interaction.options.getString("jscode");
        await interaction.reply({
            content: `\`\`\`${eval(jscode)}\`\`\``,
        });
    },
};