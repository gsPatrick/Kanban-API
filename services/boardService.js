const Board = require('../models/Board');


class BoardService {
    async createBoard(name) {
        return await Board.create({name});
    }


async getAllBoards () {
    return await Board.findAll();
}

async getBoardById(id) {
    return await Board.findByPk(id);
}

async updateBoard(id, name) {
    const board = await this.getBoardById(id);
    if ( board) {
        board.name  = name;
        await board.save();
        return board;
    }
    return null;
}

async deleteBoard(id) {
    const board = await this.getBoardById(id);
    if(board) {
        await board.destroy();
        return true;
    }
    return false;
}

}

module.exports = new BoardService();