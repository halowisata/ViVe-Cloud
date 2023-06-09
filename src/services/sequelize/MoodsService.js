const { Mood } = require('../../../models');

class MoodsService {
  async getMoods() {
    const retrievedMoods = await Mood.findAll({ attributes: ['id', 'name'] });

    return retrievedMoods;
  }
}

module.exports = MoodsService;
