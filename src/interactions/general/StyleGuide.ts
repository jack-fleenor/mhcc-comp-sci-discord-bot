import { CommandInteraction, Client, APIVersion } from "discord.js";
import { Command } from "../../Command";

export const StyleGuide: Command = {
    name: "styleguide",
    description: "Returns the link to the style guide.",
    type: 1, // CHAT_INPUT
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "Here's the style guide!";
        const embeds =
          {
            "type": "rich",
            "title": `Style Guide`,
            "description": "The C++ style guide.",
            "color": 0x00FFFF,
            "url": `https://learn-us-east-1-prod-fleet02-xythos.content.blackboardcdn.com/5c141a1da9655/7009056?X-Blackboard-S3-Bucket=learn-us-east-1-prod-fleet01-xythos&X-Blackboard-Expiration=1673654400000&X-Blackboard-Signature=0SljVLGIbtkJcGRqwK4gfnPr2EkPtdntzO3j7wL01MU%3D&X-Blackboard-Client-Id=303762&X-Blackboard-S3-Region=us-east-1&response-cache-control=private%2C%20max-age%3D21600&response-content-disposition=inline%3B%20filename%2A%3DUTF-8%27%27cpp_style_guide%2520-%2520all%2520classes.pdf&response-content-type=application%2Fpdf&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIB6fIU3x2Er6gVTaDKpw4KoQaFRm0TZCyvsC%2FmHM%2BgkrAiEAuX19fGqqKjRg1NV1RAuNpCrfni%2Bk1rXt9rHBJBtpUIQq1QQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARACGgw2MzU1Njc5MjQxODMiDCqIFeOw%2B%2FidDMz%2FvSqpBNl4%2FKHIH769gMzrURpxj2QDKXLXibh0WknYOe%2FLvL3HqshzogExo%2B1UQMUTqEufYOu5wbgxaeSeVmo4cXwyXQvsmvKOl6dX9wSGNKg5h%2FDDKGQaUMrnGo8MoivXTiAPjnjwKX4xBesAw4XkfsKvAAh5%2BNZN1ZfpsdPj9wrmG3IZ0rwYzePHpTKFtIwCqKqx%2FYPYzM92aO1R2kXNhzwCYin4qZD4B0f8Tg32hFYTv9S1x%2FILH7v%2B5ZAnsNxV7AiOLq3d9Y%2FqvjKsHHMPW37kwNp8vVCSqs45ofYOxTdYSTeVP4nR%2Fa0Lo%2BfHgXpTlUySPuwwhxU6kyAxhbdb6Q4G3aQX34Ad0IQqQ%2FLgul37nXqVeQt6XmElrlaHDUa196Njs53VyV3vnvKysc77sJZ2vsc3teUMmSBqfjc6M%2FuJFnrG7MWGjUlWGBaX8n2pH7eMlvfzc4w3ZLB7B8wSJwqhTTWK%2FU9LIS03exMaPxhNOhtiQ07Ntu7fmW7eUHniaPjsJb8UQm%2Fr2sPlFuPnNMVum5n%2FcTFHkAQzzsLE7sG5hYMCxDZUigF6BFfJi7AVx9UtoyILmJaqrmFCN4Gl1HNz8Q9cPzY4v%2FEJzyVAaGcI63P7DecNLQ5oLc2GXJczvPhgRqBLUqjD2pYc5yTzlap%2BilrsXd8g6vqxgmiZR0qSwLFbjt%2BZN23zYTvchenpSiQv6zNKaHjZYbBNPShGGVzK7S9CVXlkAh5r9TEwq9KGngY6qQGU0KQlR9sj2R4t8lf1026I8tV3n3Yd3kXBCkCOKJ7xIUADCDy0IWdoz7fsc56D8IP%2FRJ7uGbxn5tRpM8%2BHWO2oTNIXqe5WtzB4vO5NSj%2Fd3PnQ2YEP9GeqK12BgSGTLSV1e4Ps4P7qIVPCYuxO%2B8if%2F7en8gv4%2FN8A02V%2Fv%2FClQuVRt8BTT687vUHYwql%2BRXIjreryJ5PAOKm5fbCoEC9CV%2BNfIWjhb10W&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230113T180000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=21600&X-Amz-Credential=ASIAZH6WM4PLWJ3EOIM7%2F20230113%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=57f1870c94f2e04c81248975b6e737e9548788811b52bb8b1dc4fdec4612a880`
          }
        await interaction.followUp({
            ephemeral: true,
            content,
            embeds: [{
              title: 'C++ Programming Style Guide ',
              color: 0x00aa00,
              url: 'https://mhcc.blackboard.com/webapps/blackboard/execute/content/file?cmd=view&content_id=_2144610_1&course_id=_64937_1',
              image: {
                url: 'https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png',
              }
            }]
        });
    }
};