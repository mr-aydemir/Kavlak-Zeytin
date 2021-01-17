import { realDb, auth } from '../plugins/firebase.js';
import firebase from "firebase";

export const state = () => ({
    user: {},
    inCart: [],
    categories: [],
    products: [],
    sepetteIndirimliler: [],
    indirimliler: [],
    showRoomProducts: [],
    categoriesBarItems: [],
    testCount: 0
})




export const getters = {
    getProductWithId: (state) => (id) => {
        return state.products.find(item => item.id === id)
    },
    getCategoryWithId: (state) => (id) => {
        return state.categories.find(item => item.id === id)
    },
    formatPrice: () => (value) => {
        let val = (value / 1).toFixed(2).replace(".", ",");
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    getProductsWithCategory: (state) => (categoryID) => {
        return categoryID ? state.products.filter(item => item.categoryID === categoryID) : state.products
    },
    getCartItemWithID: (state) => (id) => {
        return state.inCart.find(item => item.id == id)
    },
    getCartTotalCost: (state) => () => {
        var total = 0;
        state.inCart.forEach(cartItem => {
            total =
                total +
                state.products.find(data => data.id === cartItem.pid).price *
                cartItem.count;
        });
        return total;
    },
    getCartTotalCount: (state) => () => {
        var total = 0;
        state.inCart.forEach(cartItem => {
            total =
                total +
                cartItem.count;
        });
        return total;
    },

    /* user login getters */
    isLogged: () => () => {
        firebase.auth().onAuthStateChanged(user => {
            return user ? true : false;
        });
    },
    getUserdata: () => () => {
        // Kullanıcı verilerini çekiyoruz.
        if (this.isLoggedIn) {
            // kullanici diye bir variable tanımladık. Email ile ismi çektik.
            var kullanici = firebase.auth().currentUser;
            return {
                email: kullanici.email,
                name: kullanici.displayName,
                uid: kullanici.uid,
            }
        }
    }
}






export const actions = {
    setUser({ commit }, item) {
        commit('setUser', item)
    },
    sepeteEkle({ commit }, item) {
        commit('sepeteEkle', item)
    },
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
    },
    async fetchCartItems({ commit, state }) {
        var kullanici = firebase.auth().currentUser
        var delay = !kullanici ? 500 : 0
        console.log("delay: " + delay)
        let arr = []
        setTimeout(function () {
            new Promise(resolve => {
                kullanici = firebase.auth().currentUser
                commit('setUser', kullanici)
                resolve(true)
                console.log(kullanici ? kullanici.uid : "boşşş")
                var ref = realDb.ref("usersData/" + kullanici.uid + "/inCart")
                ref.once('value').then(function (snapshot) {
                    if (snapshot.val() != null) {
                        arr = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }))
                    }
                    commit('setInCart', arr)
                });
            })
        }, delay)
        if (!kullanici) {
            const storage = (process.env.VUE_ENV === 'server') ? null : window.localStorage
            var localSepet = storage ? storage.inCart : "[]";

            arr = await JSON.parse(localSepet ? localSepet : "[]");
            commit('setInCart', arr)
        }
    },
    deleteCart({ state, dispatch }, id) {
        var kullanici = firebase.auth().currentUser
        if (kullanici) {
            var ref = realDb.ref("usersData/" + kullanici.uid + "/inCart")
            var key = state.inCart.find(inCart => inCart.id === id).key
            ref.child(key).remove()
        } else {
            const item = state.inCart.find(item => item.id === id)
            var index = state.inCart.indexOf(item)
            var localSepet = state.inCart
            localSepet.splice(index, 1);
            localStorage.inCart = JSON.stringify(localSepet)
        }
        dispatch('fetchCartItems')
    },
    changeCountCart({ state, dispatch }, id_count) {
        var kullanici = firebase.auth().currentUser
        var id = id_count.id
        var item = state.inCart.find(inCart => inCart.id === id)
        var nCount = id_count.count + item.count
        var key = item.key
        if (nCount <= 0) {
            //dispatch('deleteCart',id)
        } else {
            if (kullanici) {
                var ref = realDb.ref("usersData/" + kullanici.uid + "/inCart")
                ref.child(key).update({
                    count: nCount
                })
            } else {
                var localSepet = state.inCart
                localSepet.find(inCart => inCart.id === id).count = nCount;
                localStorage.inCart = JSON.stringify(localSepet)
            }
            dispatch('fetchCartItems')
        }
    },
    sepeteEkle({ state, dispatch, commit }, item) {
        if (state.inCart.filter(c => c.pid === item.pid).length > 0) {
            var fItemID = state.inCart.find(c => c.pid === item.pid).id
            dispatch('changeCountCart', { id: fItemID, count: 1 })
            return;
        }
        var incart = state.inCart;
        if (incart.length > 0) {
            var id = incart[incart.length - 1].id + 1;
        }
        else id = 1;
        var pid = item.pid;
        var count = item.count;
        var newitem = { id, pid, count }
        var kullanici = firebase.auth().currentUser
        if (kullanici) {
            var ref = realDb.ref("usersData/" + kullanici.uid + "/inCart")
            ref.push(newitem)
        } else {
            commit('AddToLocalCart', newitem)
        }
        dispatch('fetchCartItems')
        //state.inCart.push(newitem); 
    },




    /* User Login Actions */
    async logout({ }) {
        try {
            await firebase
                .auth()
                .signOut()
                .then(() => {
                    //this.$router.push("/login/signin");
                    location.reload();
                });
        } catch (err) {
            console.log(err);
        }
    },
    register({ }, payload) {
        if (payload.sozlesmeOnayi) {
            return new Promise((resolve, reject) => {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(payload.email, payload.password)
                    .then(
                        userCredential => {
                            console.log("Kayıt başarılı");
                            // Kayıt işlemi sadece email ve şifre ile oluşturuluyor, baştan isim ve numara ekleyemiyoruz.
                            alert("Hesap " + payload.email + " başarıyla oluşturuldu");
                            // Email ve şifre ile kullanıcı oluşturduktan sonra hesabın isim ve numarasını güncelliyoruz.
                            var kullanici = firebase.auth().currentUser;
                            alert("Kullanıcıya giriş yapıldı");
                            kullanici.updateProfile({
                                displayName: payload.name,
                                phoneNumber: payload.phone
                            });
                            alert("İsim " + payload.name + " güncellendi");
                            alert("Telefon " + payload.phone + " güncellendi");
                            var newUser = userCredential.user
                            alert("oluşturulan kullanıcı idsi: " + newUser.uid)

                            var ref = realDb.ref("usersData/" + newUser.uid)//.set(userData)
                            var uData = {
                                adresses: null,
                                birthDay: "01-01-1998",
                                couponsId: null,
                                favoriteProducts: null,
                                gender: 0,
                                getSpecialOfferMessage: true,
                                id: newUser.uid,
                                inCart: null,
                                messages: null,
                                ordersId: null,
                                gender: payload.gender,
                                tanitimOnayi: payload.tanitimOnayi,
                                sozlesmeOnayi: payload.sozlesmeOnayi,
                            }
                            alert("Kullanıcı verisi Realtime'a kaydedildi")
                            ref.set(uData);
                            //payload.$router.push("/"); 
                            location.reload();
                            resolve();
                        },
                        err => {
                            alert(err.message);
                            reject();
                        }
                    )
            })
        } else {
            alert("Sözleşmeyi onaylamanız gerekmektedir.")
        }
    },
    login({ }, payload) {
        return new Promise((resolve, reject) => {
            console.log("login çalıştı.")
            console.log(payload.email)
            firebase
                .auth()
                .signInWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        alert(payload.email + " ile giriş yaptınız");
                        console.log("Giriş başarılı");
                        //this.$router.push("/");
                        location.reload();
                        resolve();
                    },
                    err => {
                        alert(err.message);
                        reject();
                    }
                );
            reject();
        });
    },
}


export const mutations = {
    setUser(state, item) {
        state.user = item
    },
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
    setInCart(state, array) {
        state.inCart = array
    },
    AddToLocalCart(state, newitem) {
        const storage = (process.env.VUE_ENV === 'server') ? null : window.localStorage
        var localSepet = storage ? storage.inCart : "[]";

        var arr = JSON.parse(localSepet ? localSepet : "[]");
        arr.push(newitem)
        localStorage.inCart = JSON.stringify(arr)
    },  
    incrementTest: (state,count) => state.testCount+=count
}