import firebaseDatabaseURL from './firebase';

export default async function getRequest() {
  try {
    const response = await fetch(`${firebaseDatabaseURL}/seats.json`);

    return response.json();
  } catch (error) {
    console.log('HTTP PUT method error : ', error);
    return error;
  }
}
