export default function padNumber(num: number) {
  return num < 10 ? `0${num}` : num
}