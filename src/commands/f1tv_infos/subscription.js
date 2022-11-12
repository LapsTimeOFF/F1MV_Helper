const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const countryData = require("./countryData.json");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("subscription")
        .setDescription("Return infos about F1TV in your country !")
        .addStringOption((option) =>
            option
                .setName("country")
                .setDescription("The country")
                .setRequired(true),
        ),

    async execute(interaction, client) {
        let countryCode = interaction.options.getString("country").toUpperCase();

        await interaction.deferReply();

        let products = {
            Pro: "Not found",
            Access: "Not found",
            Infos: "Not found",
        };

        for (let _i = 0; _i < countryData.length; _i++) {
            const country = countryData[_i];

            if (country.isoCode === countryCode) {
                products["Pro"] = country.pro;
                products["Access"] = country.access;
                products["Infos"] = country.extraInfo;
            }
        }

        if (products.Infos === "Not found") {
            await interaction.editReply({
                content: "Country not found.",
            });
            return;
        }

        const embed = new EmbedBuilder();
        embed.setTitle(`F1TV Subscriptions infos for ${countryCode}`);
        embed.setFooter({ text: "Dev by @LapsTime" });
        embed.addFields(
            {
                name: "F1TV Pro",
                value:
                    products["Pro"] === true
                        ? "Available ✅"
                        : "Not available 🟥",
                inline: true,
            },
            {
                name: "F1TV Access",
                value:
                    products["Access"] === true
                        ? "Available ✅"
                        : "Not available 🟥",
                inline: true,
            },
            {
                name: "More infos :",
                value: products["Infos"] === null ? "No." : products["Infos"],
            },
        );

        await interaction.editReply({
            embeds: [embed],
        });
	},
};
