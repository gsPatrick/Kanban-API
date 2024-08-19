const express = require('express');
const router = express.Router();
const boardService = require('../services/boardService');

router.post ('/', async (req,res) => {
    const{name} = req.body;
    const board = await boardService.createBoard(name);
    res.status(201).json(board);
});

router.get('/', async (req,res) => {
    const boards = await boardService.getAllBoards();
    res.json(boards);
})

router.get('/:id', async (req,res) => {
    const board = await boardService.getBoardById(req.params.id);
    res.json(board);
})

router.put ('/:id', async (req,res) => {
    const {name} = req.body;
    const updatedBoard = await boardService.updateBoard(req.params.id, name);
    res.json(updatedBoard);
})

router.delete('/:id', async (req,res) => {
    const deletedBoard = await boardService.deleteBoard(req.params.id);
    res.json({sucess});
})

module.exports = router;