/**
 * 공포 탐욕 지수
 * https://alternative.me/crypto/fear-and-greed-index/#api
 */
export const getFearAndGreed = async () => {
	const apiUrl = 'https://api.alternative.me/fng/';
	const response = await fetch(apiUrl);
	const data = await response.json();

	return {
		value: Number(data.data[0].value),
		classification: convertClassification(data.data[0].value_classification),
		image_url: `https://alternative.me/crypto/fear-and-greed-index.png?t=${Date.now()}`,
	};
};

export const convertClassification = (classification: string) => {
	switch (classification) {
		case 'Extreme Fear':
			return '극단적 공포 🔥🔥';
		case 'Fear':
			return '공포 🔥';
		case 'Neutral':
			return '중립 🤔';
		case 'Greed':
			return '탐욕 💰';
		case 'Extreme Greed':
			return '극단적 탐욕 💰💰';
	}

	return '';
};
