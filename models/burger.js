// cb = callback
// delete line requiring orm method 
const db = require("../models");

var burger = {
  all: function(cb) {
    // delete the below orm method and replace with sequelize method
   db.burger.findAll({}).then(cb);
  },

  create: function(name, cb) {
    db.burger.create({
      "burger_name" : name 
    }).then(cb);
  },

  update: function(id, cb) {
    db.burger.update(
      {
        devoured: true
      },
      {
        where: {id}
      }
    }).then(cb);
};

module.exports = burger;
