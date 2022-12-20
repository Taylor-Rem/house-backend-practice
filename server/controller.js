const houseDB = require('./db.json');
let id = 3;

module.exports = {
  getHouses: (req, res) => res.send(houseDB),

  deleteHouse: (req, res) => {
    let id = +req.params.id;
    let index;
    for (let i = 0; i < houseDB.length; i++) {
      if (houseDB[i].id === id) {
        index = i;
      }
    }
    if (index !== undefined) {
      houseDB.splice(index, 1);
      res.send(houseDB);
    } else {
      res.status(400).send(`house with id ${id} does not exist`);
    }
  },

  createHouse: (req, res) => {
    let obj = req.body;
    let newHouse = {
      address: obj.address,
      price: +obj.price,
      imageURL: obj.imageURL,
      id: id,
    };
    id++;
    houseDB.push(newHouse);
    res.status(200).send(houseDB);
  },
  updateHouse: (req, res) => {
    let id = +req.params.id;
    let { type } = req.body;

    let index;
    for (let i = 0; i < houseDB.length; i++) {
      if (houseDB[i].id === id && houseDB[i].id === id) {
        index = i;
      }
    }
    if (index !== undefined && type === 'plus') {
      houseDB[index].price += 10000;
      res.send(houseDB);
    } else if (
      index !== undefined &&
      type === 'minus' &&
      houseDB[index].price > 0
    ) {
      houseDB[index].price -= 10000;
      res.send(houseDB);
    } else {
      res.status(400).send('client error');
    }
  },
};
