export default function generateSeats() {
  const seats = [];
  let charcode = 65;

  for (let i = 0; i < 50; i += 1) {
    if (i > 0 && i % 10 === 0) {
      charcode += 1;
    }
    const row = String.fromCharCode(charcode);
    const spot = {
      id: i + row,
      num: i + 1,
      row,
      checked: false,
    };

    seats.push(spot);
  }

  return seats;
}
