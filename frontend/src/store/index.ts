import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import articleModule from "./ArticleModule.store";
import DetailModule from "./DetailModule.store";

Vue.use(Vuex);

export interface RootState {
  version: string;
}

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0" // a simple property
  },
  modules: {
    articleModule,
    DetailModule
  }
};

export default new Vuex.Store<RootState>(store);
