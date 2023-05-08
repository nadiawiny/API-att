const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Serie = new Schema({
  name: {
    type: String
  },
  genero: {
    type: String
  },
  episodios: {
    type: Number
  },
  temporadas: {
    type: Number
  },
  classificacao: {
    type: String
  },
  nota: {
    type: Number
  }
},{
    collection: 'serie'
});

module.exports = mongoose.model('Serie', Serie);