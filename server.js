const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const busLocations = {
  '1': { latitude: 37.78825, longitude: -122.4324 },
  '2': { latitude: 37.78835, longitude: -122.4314 },
  '3': { latitude: 37.78845, longitude: -122.4304 },
};

app.get('/location/:busId', (req, res) => {
  const busId = req.params.busId;
  const location = busLocations[busId];

  if (location) {
    res.json(location);
  } else {
    res.status(404).send('Bus not found');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
