export const PREFIX = `@Appstate`;
export const AppstateActionTypes = {
  SET_LEFT_DRAWER: `${PREFIX}:SET_LEFT_DRAWER`,
};

export const AppstateActions = {
  openLeftDrawer: () => ({
    type: AppstateActionTypes.SET_LEFT_DRAWER,
    state: true,
  }),
  closeLeftDrawer: () => ({
    type: AppstateActionTypes.SET_LEFT_DRAWER,
    state: false,
  }),
};