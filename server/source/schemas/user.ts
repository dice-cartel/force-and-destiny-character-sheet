import mongoose from 'lib/mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  characters: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Character',
  }],

  avatar: {
    type: String,
  },

  googleId: {
    type: String,
    select: false,
  },

  email: {
    type: String,
    select: false,
  },

  dates: {
    created: {
      type: Date,
      required: true,
    },
  },

  roles: [{
    type: String,
    enum: ['MEMBER', 'ADMIN'],
    default: 'MEMBER',
  }],
}, {
  id: false,
  toObject: {
    virtuals: true,
  },
  toJSON: {
    virtuals: true,
  }
});

UserSchema.statics.findOrCreate = async function(profile) {
  console.log('findOrCreate', profile);

  const Model = this;
  try {
    let user = await Model.findOne({
      googleId: profile.id,
    }).select('+googleId +email').exec();

    if(user) {
      return user;
    }

    user = await Model.create({
      name: profile.name.givenName + ' ' + profile.name.familyName,
      googleId: profile.id,
      avatar: profile._json && profile._json.image && profile._json.image.url,
      email: profile.emails[0].value,
      dates: {
        created: new Date().getTime(),
      },
    });

    return user;
  } catch(err) {
    console.log('Error in findOrCreate', err);
    throw err;
  }
};

const UserModel = mongoose.model('User', UserSchema);

export {
  UserModel,
  UserSchema
};