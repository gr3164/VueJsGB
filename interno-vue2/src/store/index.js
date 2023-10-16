import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    details:[],
    sliders:[]
  },
  getters: {
    getDetails: state => state.details,
    getSliders: state => state.sliders
  },
  mutations: {
    SET_DETAILS(state, payload) {
        state.details = payload;
    },
    SET_SLIDERS(state, payload) {
        state.sliders = payload;
    }

  },
  actions: {
    
    getDetailsData({commit}){
        const data =[
            {id:1, title: "Minimal Look Bedrooms", textOne:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ", textTwo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. "},
        ]
        setTimeout(() => {
            commit('SET_DETAILS', data)
        }, 1500);
    },

    getSlidersData({commit}, data){
        setTimeout(() => {
            commit('SET_SLIDERS', data)
        }, 2000);
       
    }
  },
  modules: {}
});