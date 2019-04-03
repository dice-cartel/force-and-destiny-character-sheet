import Config from '@client/config';
import { fetchAll } from '@client/utils/service';

const BASE_PATH = `${Config.API_HOST}/api/characters`;

class CharacterClient {
  constructor() {}

  fetchAll(query?, fields?) {
    return fetchAll(BASE_PATH,{
      query,
      fields,
      errorMessage: `Error fetching character list`
    });
  }
}

export default new CharacterClient();
