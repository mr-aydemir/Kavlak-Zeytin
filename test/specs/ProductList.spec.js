import { mount, RouterLinkStub, createLocalVue } from "@vue/test-utils"
import ProductList from "../../components/ProductList.vue"
import Vuex from "vuex"
import { getters } from "../../store";


describe("Verilen kategori ve kategoribar arraylerinin listelenmesi", () => {
    let wrapper;
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const store = new Vuex.Store({
        state: {
            products: [{
                "id": "kavlak-tas-baski-zeytinyagi-3lu-ozel-fiyatli-kampanya",
                "categoryID": 0,
                "name": "Kavlak Taş Baskı Zeytinyağı 3lü Özel Fiyatlı Kampanya",
                "detail": "Taş değirmenlerde ezilerek soğuk sıkım yöntemi ile elde edilen gerçek Taş Baskı Soğuk Sıkım Zeytinyağı En Avantajlı Kampanyası ile yemeklerinize lezzet katacak.",
                "rate": 5,
                "price": 599,
                "code": "460",
                "images": [
                    "https://kavlak.com.tr/zeytinyaglari/kavlak-tas-baski-soguk-sikim-zeytinyagi-5lt-3-al-2-ode-kampanyasi.jpg"
                ],
                "inStock": 500,
                "indirim": 30
            },
            {
                "id": "kavlak-ilk-hasat-5-litre-2li-ozel-kampanya",
                "categoryID": 0,
                "name": "Kavlak İlk Hasat 5 Litre 2li Özel Kampanya",
                "detail": "Ege bölgesinde yetişen yeşil zeytinlerden soğuk sıkım yöntemi ile elde edilen aromatik ve filtreden geçmeyen şifa niyetine tüketilebilecek eşsiz zeytinyağı!",
                "rate": 3,
                "price": 519,
                "code": "K0022",
                "images": [
                    "https://kavlak.com.tr/zeytinyaglari/kavlak-ilk-hasat-5-litre-2li-ozel-kampanya.jpg"
                ],
                "inStock": 500,
                "indirim": 39
            },
            {
                "id": "kavlak-5-lt-tas-baski-zeytinyagi-alana-2-kg-jumbo-zeytin-hediye",
                "categoryID": 0,
                "name": "Kavlak 5 Lt Taş Baskı Zeytinyağı Alana 2 Kg Jumbo Zeytin Hediye",
                "detail": "Kavlak 5 Litre Taş Baskı Soğuk Sıkım Zeytinyağı Alana 2 Kg Jumbo Zeytin 10 TL! Üstelik Ücretsiz Kargo ile Kapınıza Teslim!",
                "rate": 5,
                "price": 289.90,
                "code": "K0025",
                "images": [
                    "https://kavlak.com.tr/zeytinler/kavlak-5-lt-tas-baski-zeytinyagi-alana-2-kg-jumbo-zeytin-ozel-fiyat.jpg"
                ],
                "inStock": 500,
                "indirim": 27
            },
            {
                "id": "avlak-kuru-sele-siyah-zeytin-4-al-3-ode",
                "categoryID": 1,
                "name": "Kavlak Kuru Sele Siyah Zeytin 4 Al 3 Öde",
                "detail": "Kavlak kuru sele siyah zeytin hiçbir kimyasal işleme tabi tutulmadan çevirme ve çuvallama yöntemiyle yalnızca tuz kullanılarak üretilir.",
                "rate": 0,
                "price": 199.90,
                "code": "K0018",
                "images": [
                    "https://kavlak.com.tr/zeytinler/kavlak-kuru-sele-siyah-zeytin-4-al-3-ode.jpg"
                ],
                "inStock": 500,
                "indirim": 22
            },
            {
                "id": "kavlak-special-gemlik-siyah-zeytin-1-kg-3lu-kampanya",
                "categoryID": 1,
                "name": "Kavlak Special Gemlik Siyah Zeytin 1 Kg 3lü Kampanya",
                "detail": "Kavlak Special Gemlik Siyah Zeytin En Yeni Lezzet ve Üretimiyle birlikte kampanyasıyla sofralarınıza geliyor!",
                "rate": 5,
                "price": 164.90,
                "code": "K0008",
                "images": [
                    "https://kavlak.com.tr/zeytinler/kavlak-special-gemlik-siyah-zeytin-1-kg-3lu-kampanya.jpg"
                ],
                "inStock": 500,
                "indirim": 15
            },
            {
                "id": "kavlak-turk-kahvesi-100-gr",
                "categoryID": 2,
                "name": "Kavlak Türk Kahvesi 100 Gr",
                "detail": "Kavlak geleneksel öğütülmüş türk kahvesi",
                "rate": 5,
                "price": 16.90,
                "code": "TDR1033",
                "images": [
                    "https://kavlak.com.tr/sarkuteriler/kavlak-turk-kahvesi-100gr.jpg"
                ],
                "inStock": 500,
                "indirim": 0
            },
            {
                "id": "kavlak-naturel-sizma-2li-5-lt-ozel-fiyatli-kampanya",
                "categoryID": 0,
                "name": "Kavlak Naturel Sızma 2li 5 LT Özel Fiyatlı Kampanya",
                "detail": "Yağ oranı yüksek Gemlik zeytinlerinden, son sistem kontinü zeytinyağı fabrikasında üretilen bu ürün en uygun kampanyasıyla ücretsiz kargo ile kapınızda!",
                "rate": 5,
                "price": 389,
                "code": "K0004",
                "images": [
                    "https://kavlak.com.tr/zeytinyaglari/kavlak-2li-ozel-fiyat-naturel-sizma-soguk-sikim-zeytinyagi-5lt.jpg"
                ],
                "inStock": 500,
                "indirim": 0
            },
            {
                "id": "kavlak-ev-yapimi-kuskus",
                "categoryID": 3,
                "name": "Kavlak Ev Yapımı Kuskus",
                "detail": "Doğal ev ortamında, Un, su, tuz, yumurta, süt ve bulgurun yoğurulmasıyla elde edilmektedir.",
                "rate": 5,
                "price": 22.90,
                "code": "056",
                "images": [
                    "https://kavlak.com.tr/ev-yapimlari/kavlak-ev-yapimi-kuskus.jpg"
                ],
                "inStock": 500,
                "indirim": 0
            },
            {
                "id": "kavlak-ev-yapimi-dugun-corbasi",
                "categoryID": 3,
                "name": "Kavlak Ev Yapımı Düğün Çorbası",
                "detail": "Kavlak ev yapımı düğün çorbası, doğal ev ortamında, un, su, tuz, yumurtanın yoğurulmasıyla elde edilmektedir.",
                "rate": 5,
                "price": 22.90,
                "code": "153",
                "images": [
                    "https://kavlak.com.tr/ev-yapimlari/kavlak-ev-yapimi-dugun-corbasi.jpg"
                ],
                "inStock": 500,
                "indirim": 0
            },
            {
                "id": "kavlak-ev-yapimi-eriste",
                "categoryID": 3,
                "name": "Kavlak Ev Yapımı Erişte",
                "detail": "Kavlak ev yapımı erişte, doğal ev ortamında, Un, su, tuz, yumurtanın yoğurulmasıyla elde edilmektedir.",
                "rate": 2,
                "price": 22.90,
                "code": "198",
                "images": [
                    "https://kavlak.com.tr/ev-yapimlari/ev-yapimi-eriste.jpg"
                ],
                "inStock": 500,
                "indirim": 0
            },
            {
                "id": "kavlak-sira-1-lt",
                "categoryID": 2,
                "name": "Kavlak Şıra 1 Lt",
                "detail": "Şıra, Türk mutfağında kısmen fermante edilmiş üzüm veya elma suyundan yapılan alkolsüz bir içecektir.",
                "rate": 5,
                "price": 22.90,
                "code": "TDR586",
                "images": [
                    "https://kavlak.com.tr/sarkuteriler/kavlak-sira-1lt.jpg"
                ],
                "inStock": 500,
                "indirim": 0
            }],
            categories: [
                {
                    "id": 0,
                    "name": "ZeytinYagi"
                },
                {
                    "id": 1,
                    "name": "SiyahZeytin"
                },
                {
                    "id": 2,
                    "name": "icecek"
                },
                {
                    "id": 3,
                    "name": "EvYapimi"
                },
                {
                    "id": 4,
                    "name": "YesilZeytin"
                },
                {
                    "id": 5,
                    "name": "Peynir"
                },
                {
                    "id": 6,
                    "name": "Reçel"
                },
                {
                    "id": 7,
                    "name": "Diger"
                },
                {
                    "id": 8,
                    "name": "Kozmetik"
                },
                {
                    "id": 9,
                    "name": "Tursular"
                },
                {
                    "id": 10,
                    "name": "Sekerleme"
                },
                {
                    "id": 11,
                    "name": "Kuruyemis"
                }
            ],
        },
        getters: getters
    })
    wrapper = mount(ProductList, {
        stubs: {
            NuxtLink: RouterLinkStub
        }, 
        store, 
        localVue,
        propsData:{
            categoryName:"SiyahZeytin"
        }
    })
    describe("Seçilen kategori SiyahZeytin olduğunda Listelenmesi gereken ürünler", () => {

        it("Kavlak Special Gemlik Siyah Zeytin 1 Kg 3lü Kampanya", () => {
            expect(wrapper.text()).toContain("Kavlak Special Gemlik Siyah Zeytin 1 Kg 3lü Kampanya");
        });

        it("Kavlak Kuru Sele Siyah Zeytin 4 Al 3 Öde", () => {
            expect(wrapper.text()).toContain("Kavlak Kuru Sele Siyah Zeytin 4 Al 3 Öde");
        });
    });

    describe("Seçilen kategori SiyahZeytin olduğunda Listelenmeyecekler", () => {

        it("Kavlak Şıra 1 Lt", () => {
            expect(wrapper.text()).not.toContain("Kavlak Şıra 1 Lt");
        });
        it("Kavlak Ev Yapımı Erişte", () => {
            expect(wrapper.text()).not.toContain("Kavlak Ev Yapımı Erişte");
        });
        it("kavlak-ev-yapimi-dugun-corbasi", () => {
            expect(wrapper.text()).not.toContain("kavlak-ev-yapimi-dugun-corbasi");
        });
    });
})