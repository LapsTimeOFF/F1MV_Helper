const {
    SlashCommandBuilder,
    ChatInputCommandInteraction,
    Client,
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("custom_msg")
        .setDescription("Send custom msg")
        .addStringOption((option) =>
            option.setName("code").setDescription("The code").setRequired(true),
        ),

    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        let code = interaction.options.getString("code");
        const { customMSG } = client;

        interaction.reply({
            content: `${customMSG.get(code)}`,
        });
    },
};
