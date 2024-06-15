const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const token = '7281741634:AAFfJacYixqju-AbFBtYptaBn6QL12zP_uo';
const bot = new TelegramBot(token);
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

bot.setWebHook(`https://snikie.vercel.app/);

app.post('/api/bot', (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Welcome to our WebApp!', {
        reply_markup: {
            inline_keyboard: [[{
                text: 'Open WebApp',
                web_app: {url: 'https://snikie.vercel.app/'}
            }]]
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});