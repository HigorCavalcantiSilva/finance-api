const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class BaseRepository {
  constructor(model) {
    this.model = model; // Recebe o nome do modelo Prisma
  }

  async create(data) {
    try {
      return await prisma[this.model].create({ data });
    } catch (error) {
      throw new Error(`Error creating ${this.model}: ` + error.message);
    }
  }

  async findAll() {
    try {
      return await prisma[this.model].findMany();
    } catch (error) {
      throw new Error(`Error fetching ${this.model}s: ` + error.message);
    }
  }

  async findById(id) {
    try {
      return await prisma[this.model].findUnique({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Error fetching ${this.model} by id: ` + error.message);
    }
  }

  async update(id, data) {
    try {
      return await prisma[this.model].update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(`Error updating ${this.model}: ` + error.message);
    }
  }

  async delete(id) {
    try {
      return await prisma[this.model].delete({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Error deleting ${this.model}: ` + error.message);
    }
  }
}

module.exports = BaseRepository;