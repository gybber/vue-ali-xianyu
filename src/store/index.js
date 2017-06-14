 import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import actions from './action';
import mutation from './mutation';
export default new Vuex.Store({
	modules: {
		mutation
	},
	actions
});
