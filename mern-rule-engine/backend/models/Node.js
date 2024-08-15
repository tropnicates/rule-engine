const mongoose = require('mongoose');

const NodeSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['operator', 'operand'],
    required: true,
  },
  left: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Node',
  },
  right: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Node',
  },
  value: {
    type: mongoose.Schema.Types.Mixed, 
  },
});

module.exports = mongoose.model('Node', NodeSchema);
