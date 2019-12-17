export default async function getRequest(url) {
  try {
    const response = await fetch(url);

    return response.json();
  } catch (error) {
    console.log('HTTP GET method error: ', error);

    return error;
  }
}
