// @ts-ignore
import type { Commit } from 'vuex';
import type { FormModel } from '@/entities/form/model/types';

interface FormMessage {
  id: string;
  data: FormModel;
  timestamp: number;
}

interface State {
  messages: FormMessage[];
}

const state: State = {
  messages: [],
};

const mutations = {
  addMessage(state: State, payload: { data: FormModel }) {
    const message: FormMessage = {
      id: Date.now().toString(),
      data: payload.data,
      timestamp: Date.now(),
    };
    state.messages.push(message);
  },
};

const actions = {
  submitForm({ commit }: { commit: Commit }, data: FormModel) {
    commit('addMessage', { data });
  },
};

const getters = {
  getMessages: (state: State): FormMessage[] => state.messages,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
