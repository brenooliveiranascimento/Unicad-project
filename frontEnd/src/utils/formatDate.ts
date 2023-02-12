export const formatDate = (date: string | undefined | Date) => {
	const day = new Date(`${date}`).getDate();
	const month = new Date(`${date}`).getMonth();
	const year = new Date(`${date}`).getFullYear();
	return `${day}/${month}/${year}`;
};