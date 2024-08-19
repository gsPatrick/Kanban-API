const Card = require('../models/Card');

class CardService {
  async createCard(title, description, listId) {
    return await Card.create({ title, description, listId });
  }

  async getAllCards() {
    return await Card.findAll();
  }

  async getCardById(id) {
    return await Card.findByPk(id);
  }

  async updateCard(id, title, description) {
    const card = await this.getCardById(id);
    if (card) {
      card.title = title;
      card.description = description;
      await card.save();
      return card;
    }
    return null;
  }

  async deleteCard(id) {
    const card = await this.getCardById(id);
    if (card) {
      await card.destroy();
      return true;
    }
    return false;
  }
}

module.exports = new CardService();
