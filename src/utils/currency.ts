export const toBrl = (amount: number): string => {
  return 'R$ ' + Number(amount).toFixed(2).replace('.', ',')
}
