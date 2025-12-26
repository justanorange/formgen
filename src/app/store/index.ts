// @ts-ignore
import { createStore } from 'vuex';

import profile from './modules/profile';
import settings from './modules/settings';
import feedback from './modules/feedback';

const store = createStore({
  modules: {
    profile,
    settings,
    feedback,
  },
});

export default store;
