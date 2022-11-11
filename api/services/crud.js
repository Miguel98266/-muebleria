export default class {
  constructor(model) {
    this.model = model;
  }
  async create(args) {
    return await this.model.create(args);
  }
  async find(args, order = null, populate = null) {
    return await this.model.find(args, order).populate(populate);
  }
  async findid(id) {
    return await this.model.findById(id);
  }
  async findone(args) {
    return await this.model.findOne(args);
  }
  async update(id, args, populate = null) {
    return await this.model
      .findByIdAndUpdate(id, args, { new: true })
      .populate(populate);
  }

  async destroy(id) {
    return await this.model.destroy(id);
  }
}
