const addAddress =
  "INSERT INTO addresses (address, city, state, zipcode, latitude, longitude) VALUES ($1, $2, $3, $4, $5, $6)";
const checkAddress =
  "SELECT a FROM addresses a WHERE a.address = $1 AND a.city = $2 AND a.state = $3 FOR JSON PATH";
module.exports = {
  addAddress,
  checkAddress,
};
