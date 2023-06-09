const { default: axios } = require('axios');

class TouristAttractionsHandler {
  async getTouristAttractionsHandler(req, res) {
    const { location } = req.body;
    try {
      const response = await axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json', {
        params: {
          query: `tourist attractions in ${location}`,
          keyword: 'point of interest',
          key: process.env.GMAPS_API_KEY,
        },
      });

      const attractions = response.data.results.map((result) => ({
        id: result.place_id,
        name: result.name,
        description: result.formatted_address,
        photo: result.photos ? result.photos[0].photo_reference : null,
        rating: result.rating,
        latitude: result.geometry.location.lat,
        longitude: result.geometry.location.lng,
      }));

      res.json(attractions);
    } catch (error) {
      console.error('Error fetching attractions:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  }
}

module.exports = TouristAttractionsHandler;
