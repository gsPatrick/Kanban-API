const List = require ('../models/List')

class ListService {
    async createList(name, boardId) {
        return await List.create ({name, boardId})
    }

    async getAllLists() {
        return await List.findAll();
    }

    async getListById(id) {
        return await List.findByPk(id);
      }

      async updateList(id, name) {
        const list = await this.getListById(id);
        if (list) {
          list.name = name;
          await list.save();
          return list;
        }
        return null;
      }
    
      async deleteList(id) {
        const list = await this.getListById(id);
        if (list) {
          await list.destroy();
          return true;
        }
        return false;
      }

}

module.exports = new ListService();


