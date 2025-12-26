// @ts-ignore
import type { Commit } from 'vuex';
import type { FormModel } from '@/entities/form/model/types';

const state: FormModel = {};

const mutations = {
  updateData(state: FormModel, payload: { data: FormModel }) {
    Object.assign(state, payload.data);
  },
};

const actions = {
  submitForm({ commit }: { commit: Commit }, data: FormModel) {
    commit('updateData', { data });
  },
};

const getters = {
  getCurrentData: (state: FormModel): FormModel => state,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
