import * as express from 'express';
import * as mongoLayers from 'utils/mongo-layers';
import { setReqDate, requireAuthentication, requireSelfOrAdmin } from 'middleware';
import { CharacterModel } from 'schemas/character';
const routes = express.Router();

routes.get('/', mongoLayers.findAll(CharacterModel));
routes.get('/:_id', mongoLayers.findOne(CharacterModel));
routes.post('/',
  setReqDate('created'),
  mongoLayers.createOne(CharacterModel)
);
routes.patch('/:_id',
  requireAuthentication,
  requireSelfOrAdmin(req => req.body.owner || req.user._id),
  mongoLayers.patchOne(CharacterModel)
);
routes.put('/:_id',
  requireAuthentication,
  requireSelfOrAdmin(req => req.body.owner || req.user._id),
  mongoLayers.putOne(CharacterModel)
);
routes.delete('/:_id',
  requireAuthentication,
  requireSelfOrAdmin(req => req.body.owner || req.user._id),
  mongoLayers.deleteOne(CharacterModel)
);

module.exports = routes;
export {}