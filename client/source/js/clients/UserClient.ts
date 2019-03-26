import Config from '@client/config';
import LoggerService from '@client/services/LoggerService';
import { fetchAll } from '@client/utils/service';

const BASE_PATH = `${Config.API_HOST}/api/users`;

class UserClient {
  constructor() {}

  fetchAll(query?, fields?) {
    return fetchAll(BASE_PATH,{
      query,
      fields,
      errorMessage: `Error fetching user list`
    });
  }

  fetchMe() {
    return fetch(`${BASE_PATH}/me/`, { credentials: 'include' })
      .then((response) => response.status === 200 ? response.json() : null)
      .catch((err) => {
        LoggerService.error(`Error fetching self user data`, err);
      });
  }
}

export default new UserClient();
