const { default: axios } = require('axios');

class TouristAttractionsHandler {
  async getTouristAttractionsHandler(req, res) {
    try {
      const userId = req.user.id;
      const { mood, budget, city } = req.query;
      const response = await axios.get(`${process.env.ML_API}/recommendation`, {
        params: {
          user_id: userId,
          mood,
          budget,
          city,
        },
      });

      const attractionsData = response.data;

      const attractions = JSON.parse(attractionsData.replace(/\bNaN\b/g, 'null'));

      res.status(200).json({
        error: false,
        message: 'tourist attractions retrieved',
        data: attractions.data,
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        mesasge: error.mesasge,
      });
    }
  }
}

module.exports = TouristAttractionsHandler;
