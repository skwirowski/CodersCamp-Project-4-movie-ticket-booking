const routes = {
  homepage: '/',
  details: id => `/movie/${id}`,
  dateSelection: id => `/movie/${id}/dates`,
  seatingChoice: id => `/movie/${id}/seating`,
  summary: id => `/movie/${id}/summary`,
  ticket: id => `/movie/${id}/ticket`,
};

export default routes;