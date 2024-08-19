const express = require('express');
const router = express.Router();
const listService = require('../services/listService');

router.post('/', async (req, res) => {
    const { name, boardId } = req.body;
    const list = await listService.createList(name, boardId);
    res.status(201).json(list);
  });

  router.get('/', async (req,res) => {
    const lists = await listService.getAllLists();
    res.json(lists);
  });

  router.get('/:id', async (req,res) => {
    const list = await listService.getListById(req.params.id);
    res.json(list);
  });

  router.put ('/:id', async (req,res) => {
    const {name} = req.body;
    const updateBoard = await listService.updateList(req.params.id, name);
    res.json(updateBoard);
  });

  router.delete('/:id', async (req,res) => {
    const deletedList = await listService.deleteList(req.params.id);
    res.json({deletedList});
  });

  module.exports = router;