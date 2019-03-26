import Config from '@client/config';
import { Environment } from '@shared/types';
import UserClient from '@client/clients/UserClient';

if (Config.ENV === Environment.LOCAL) {
  window['Config'] = Config;
  window['UserClient'] = UserClient;
}