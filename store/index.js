import { realDb, auth } from '~/plugins/firebase.js';
import firebase from "firebase";

export const state = () => ({
    user: {},
    inCart: [],
    categories: [],
    products: [],
    sepetteIndirimliler: [],
    indirimliler: [],
    showRoomProducts: [],
    categoriesBarItems: []
})
export const getters = {
    getProductWithId: (state) => (id) => {
        return state.products.find(item => item.id === id)
    },
    getCategoryWithId: (state) => (id) => {
        return state.categories.find(item => item.id === id)
    },
    formatPrice: (state) => (value) => {
        let val = (value / 1).toFixed(2).replace(".", ",");
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
}
export const actions = {
    fetchSepetteIndirimliler({ commit }) {
        var ref = realDb.ref('sepetteIndirimliler')
        ref.once('value').then(function (snapshot) {
            let indirimlililer = []
            if (snapshot.val() != null) {
                indirimlililer = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }))
            }
            commit('setSepetteIndirimliler', indirimlililer)

        });
    },
    fetchProducts({ commit, dispatch }) {
        dispatch('fetchCategories')
        var ref = realDb.ref('products')
        ref.once('value').then(function (snapshot) {
            let arr = []
            if (snapshot.val() != null) {
                arr = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }))
            }
            commit('setProducts', arr)
            dispatch('fetchSepetteIndirimliler')
        });
    },
    fetchCategories({ commit }) {
        var ref = realDb.ref('categories')
        ref.once('value').then(function (snapshot) {
            let arr = []
            if (snapshot.val() != null) {
                arr = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }))
            }
            commit('setCategories', arr)
        });
    },
    fetchShowRoomProducts({ commit }) {
        var ref = realDb.ref('showRoomProducts')
        ref.once('value').then(function (snapshot) {
            let arr = []
            if (snapshot.val() != null) {
                arr = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }))
            }
            commit('setShowRoomProducts', arr)
            //console.log(arr)

        });
    },
    fetchCategoriesBarItems({ commit, dispatch }) {
        dispatch('fetchCategories')
        var ref = realDb.ref('categoriesBarItems')
        ref.once('value').then(function (snapshot) {
            let arr = []
            if (snapshot.val() != null) {
                arr = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }))
            }
            commit('setCategoriesBarItems', arr)
            //console.log(arr)

        });
    }
}
export const mutations = {
    setProducts(state, array) {
        state.products = array
    },
    setCategories(state, array) {
        state.categories = array
    },
    setSepetteIndirimliler(state, array) {
        state.sepetteIndirimliler = array
        var arr = []
        array.forEach((el) => {
            console.log(el.id)
            arr.push(state.products.find((item) => item.id === el.id.toString()))
        })
        state.indirimliler = arr;
    },
    setShowRoomProducts(state, array) {
        state.showRoomProducts = array
    },
    setCategoriesBarItems(state, array) {
        state.categoriesBarItems = array
    },
}