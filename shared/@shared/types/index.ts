export * from './config';
export * from './schemas';
export * from './misc';

export type ReduxAction = {
  type: string;
  [key: string]: any;
};