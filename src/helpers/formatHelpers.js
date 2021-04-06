function formatNumber(value){
  const formatter = Intl.NumberFormat('pt-BR');
  return formatter.format(value);
}

export { formatNumber };