const formatDate = (date: string): string => {
  const parsedDate = new Date(date);

  return Intl.DateTimeFormat('pt-BR').format(parsedDate);
};

export default formatDate;
