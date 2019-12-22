import seats from './data';
import firebaseDatabaseURL from './firebase';

const defaultData = seats;

export default async function sendData(payload) {
  try {
    const response = await fetch(`${firebaseDatabaseURL}/seats.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return response.json();
  } catch (error) {
    console.log('HTTP PUT method error : ', error);
    return error;
  }
}

export function resetData() {
  sendData(defaultData);
}
