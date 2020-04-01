export const truncateText = ({ text, maxLength = 20 }) =>
  text.length > maxLength ? `${text.substring(0, maxLength)}...` : text
