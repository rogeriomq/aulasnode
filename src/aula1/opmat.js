export default (x, y) => {
  return x / y
}
function soma(x, y) {
  return x + y
}
export const sub = (x, y) => {
  return x - y
}
const mult = (x, y) => {
  return x * y
}
// exemplo de export seletivo
export { soma, mult }