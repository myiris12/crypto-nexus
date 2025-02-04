export const getDateString = () => {
	const now = new Date();
	const year = now.getFullYear();
	const month = String(now.getMonth() + 1);
	const day = String(now.getDate());
	return `${year}년 ${month}월 ${day}일`;
};
