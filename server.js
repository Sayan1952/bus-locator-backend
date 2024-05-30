const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const busLocations = {
  'Shurma': { latitude: 22.335351479700915, longitude: 91.82630854206182 },
  'Padma': { latitude: 22.36462715520287, longitude: 91.82129755756611 },
  'Matamuhuri': { latitude: 22.46905685317969, longitude: 91.97100285431742 },
};

// let busLocation = {
//   latitude: 22.335351479700915,
//   longitude: 91.82630854206182
// };

app.get('/location/:busId', (req, res) => {
  const busId = req.params.busId;
  const location = busLocations[busId];

  if (location) {
    res.json(location);
  } else {
    res.status(404).send('Bus not found');
  }
});


app.get('/location', (req, res) => {
  res.json(busLocations);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
