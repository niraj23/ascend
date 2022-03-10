const pool = require("../../db");
const queries = require("./queries");
const axios = require("axios");

const getAddresses = (req, res) => {
  pool.query("SELECT * FROM addresses", (err, results) => {
    if (err) throw err;
    res.status(200).json(results.rows);
  });
};

const addAddress = (req, res) => {
  const newArray = [];
  req.body.map((n) => {
    const location = n.address.concat(" ", n.city, " ", n.state);
    async function geoCode() {
      try {
        const result = await axios.get(
          "https://maps.googleapis.com/maps/api/geocode/json",
          {
            params: {
              address: location,
              key: "AIzaSyAZkAIGPhFsAQD21nQTZegsWu4lfzOcXX0",
            },
          }
        );
        // handle success
        let latitude = result.data.results[0].geometry.location.lat;
        let longitude = result.data.results[0].geometry.location.lng;

        pool.query(
          queries.checkAddress,
          [n.address, n.city, n.state],
          (err, results) => {
            if (!err && results.rows.length) {
              newArray.push(results.rows);
            } else {
              n[latitude] = latitude;
              n[longitude] = longitude;
              newArray.push(n);

              pool.query(
                queries.addAddress,
                [n.address, n.city, n.state, n.zipcode, latitude, longitude],
                (err, result) => {
                  if (err) throw err;
                  res.json(newArray);
                }
              );
            }
          }
        );
      } catch (error) {
        // handle error
        console.log(error);
      }
    }
    geoCode();
    // setTimeout(function () {
    //   console.log(latitude);
    // }, 2000);
  });
};

module.exports = {
  getAddresses,
  addAddress,
};
