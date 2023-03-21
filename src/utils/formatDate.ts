export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString(); // format the date as a string in the user's local time zone
  const formattedTime = date.toLocaleTimeString(); // format the time as a string in the user's local time zone
  return `${formattedDate} at ${formattedTime}`;
}
