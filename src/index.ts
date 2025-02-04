import { getFearAndGreed } from './fear_and_greed';
import { getDateString } from './util';
import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';

dotenv.config();

const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN as string;
const telegramChatId = process.env.TELEGRAM_CHAT_ID as string;

const bot = new TelegramBot(telegramBotToken);

(async () => {
	const fearAndGreedData = await getFearAndGreed();

	await bot.sendPhoto(telegramChatId, fearAndGreedData.image_url, {
		reply_markup: {
			inline_keyboard: [
				[
					{
						text: `공포탐욕지수 ${getDateString()} - ${fearAndGreedData.value} ${
							fearAndGreedData.classification
						}`,
						url: 'https://alternative.me/crypto/fear-and-greed-index/',
					},
				],
			],
		},
	});
})();
