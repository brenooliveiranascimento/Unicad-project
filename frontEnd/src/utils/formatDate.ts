export const formatDate = (date: string | undefined | Date) => {
  let day = new Date(`${date}`).getDate();
  let month = new Date(`${date}`).getMonth();
  let year = new Date(`${date}`).getFullYear();
  return `${day}/${month}/${year}`
};