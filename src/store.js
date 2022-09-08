import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filtros: {
      ciudad_origen: null,
      ciudad_destino: null,
      fecha_salida: null,
      fecha_retorno: null,
      ciudades: [
        {
          id: 144,
          name: "Afganistán",
        },
        {
          id: 114,
          name: "Albania",
        },
        {
          id: 18,
          name: "Alemania",
        },
        {
          id: 98,
          name: "Algeria",
        },
        {
          id: 145,
          name: "Andorra",
        },
        {
          id: 119,
          name: "Angola",
        },
        {
          id: 4,
          name: "Anguilla",
        },
        {
          id: 147,
          name: "Antigua y Barbuda",
        },
        {
          id: 207,
          name: "Antillas Holandesas",
        },
        {
          id: 91,
          name: "Arabia Saudita",
        },
        {
          id: 5,
          name: "Argentina",
        },
      ],
    },

    tickets: [
      {
        id: 10,
        precio: 135,
        aereolinea: "Avianca",
        numeroEscalas: 3,
        duracionVuelo: 8,
        src: "https://media.staticontent.com/media/pictures/f4639137-184c-4707-ae9b-4e2cdb0b4fbe",
        flex: 12,
      },
      {
        id: 11,
        precio: 254,
        aereolinea: "American Airlines",
        numeroEscalas: 6,
        duracionVuelo: 6,
        src: "https://ichef.bbci.co.uk/news/640/cpsprodpb/13AFA/production/_95743608_mediaitem95743607.jpg",
        flex: 6,
      },
      {
        id: 12,
        precio: 138,
        aereolinea: "AirFrance",
        numeroEscalas: 2,
        duracionVuelo: 7.6,
        src: "https://imagenes.elpais.com/resizer/TTpwol73D_RiICbFvudtpWOtj2A=/980x0/filters:focal(1527.000022828579x760.5000114068389:1537.000022828579x770.5000114068389)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/VGREABORVNCC5FSS24C3LFD6LA.jpg",
        flex: 6,
      },
      {
        id: 13,
        precio: 264,
        aereolinea: "Biter Canarias",
        numeroEscalas: 2,
        duracionVuelo: 7,
        src: "https://diariodeavisos.elespanol.com/canariasenred/wp-content/uploads/2019/11/binterr.jpg",
        flex: 12,
      },
      {
        id: 14,
        precio: 168,
        aereolinea: "Lufthansa",
        numeroEscalas: 3,
        duracionVuelo: 7.5,
        src: "https://www.schengenvisainfo.com/news/wp-content/uploads/2022/04/Lufthansa-Boeing-747-at-Frankfurt-am-Main-airport.jpg",
        flex: 6,
      },
      {
        id: 15,
        precio: 215,
        aereolinea: "Areolíneas Argentinas",
        numeroEscalas: 4.6,
        src: "https://mdamericas.com/wp-content/uploads/2022/03/8-4-800x500.jpg",
        flex: 6,
      },
    ],
  },
  mutations: {
    SET_FECHA_SALIDA: function (state, data) {
      state.filtros.fecha_salida = data;
    },
    SET_FECHA_RETORNO: function (state, data) {
      state.filtros.fecha_retorno = data;
    },
    SET_CIUDAD_ORIGEN: function (state, data) {
      state.filtros.ciudad_origen = data;
    },
    SET_CIUDAD_DESTINO: function (state, data) {
      state.filtros.ciudad_destino = data;
    },
  },
  getters: {
    getCiudades(state) {
      return state.filtros.ciudades;
    },
    getTickets(state) {
      return state.tickets;
    },
  },
});
