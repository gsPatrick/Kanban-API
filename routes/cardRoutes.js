const express = require('express');
const router = express.Router();
const cardService = require('../services/cardService');

router.post('/', async (req,res) => {
    const {title, description, listId} = req.body;
    const card = await cardService.createCard(title, description, listId);
    res.status(201),json(card);
});

router.get ('/', async (req,res) => {
    const cards = await cardService.getAllCards();
    res.json(cards);
});

router.get('/:id', async (req,res) =>{
    const card = await cardService.getCardById(req.params.id);
    res.json(card);
});


router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    const updatedCard = await cardService.updateCard(req.params.id, title, description);
    res.json(updatedCard);
  });
  
  router.delete('/:id', async (req, res) => {
    const success = await cardService.deleteCard(req.params.id);
    res.json({ success });
  });
  
  module.exports = router;