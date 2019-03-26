import mongoose from 'lib/mongoose';

const CharacterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  dates: {
    created: {
      type: Date,
      required: true,
    },
    proposed: {
      type: Date,
    },
    chosen: {
      type: Date,
    },
    finished: {
      type: Date,
    },
  },
}, {
  id: false,
  toObject: {
    virtuals: true,
  },
  toJSON: {
    virtuals: true,
  }
});

const CharacterModel = mongoose.model('Character', CharacterSchema);

export {
  CharacterModel,
  CharacterSchema
};