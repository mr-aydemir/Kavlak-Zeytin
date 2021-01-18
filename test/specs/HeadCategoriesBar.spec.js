import { mount, RouterLinkStub, createLocalVue } from "@vue/test-utils"
import HeadCategoriesBar from "../../components/page-head/HeadCategoriesBar.vue"
import Vuex from "vuex"
import { getters } from "../../store";


describe("Verilen kategori ve kategoribar arraylerinin listelenmesi", () => {
    let wrapper;
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const store = new Vuex.Store({
        state: {
            categoriesBarItems: [
                {
                    "id": 0,
                    "name": "Zeytin",
                    "subCategories": [
                        {
                            "id": 1
                        },
                        {
                            "id": 4
                        }
                    ],
                    "icon": "https://kavlak.com.tr/img/icon/zeytin.png"
                },
                {
                    "id": 1,
                    "name": "ZeytinYağı",
                    "categoryID": 0,
                    "icon": "https://kavlak.com.tr/img/icon/zeytinyagii.png"
                },
                {
                    "id": 2,
                    "name": "Şarküteri",
                    "subCategories": [
                        {
                            "id": 5
                        },
                        {
                            "id": 6
                        },
                        {
                            "id": 2
                        },
                        {
                            "id": 7
                        }
                    ],
                    "icon": "https://kavlak.com.tr/img/icon/peynr.png"
                },
                {
                    "id": 3,
                    "name": "Turşular",
                    "categoryID": 9,
                    "icon": "https://kavlak.com.tr/img/icon/tursucuk.png"
                },
                {
                    "id": 4,
                    "name": "Kozmetik",
                    "categoryID": 8,
                    "icon": "https://kavlak.com.tr/img/icon/cosmetic.png"
                },
                {
                    "id": 5,
                    "name": "Ev Yapımı",
                    "categoryID": 3,
                    "icon": "https://kavlak.com.tr/img/icon/ev_yapimii.png"
                },
                {
                    "id": 6,
                    "name": "Şekerleme",
                    "categoryID": 10,
                    "icon": "https://kavlak.com.tr/img/icon/seker.png"
                },
                {
                    "id": 7,
                    "categoryID": 11,
                    "name": "Kuruyemiş",
                    "icon": "https://kavlak.com.tr/img/icon/kuruyemis.png"
                }
            ],
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
        getters:getters
    })
    wrapper = mount(HeadCategoriesBar, {
        stubs: {
            NuxtLink: RouterLinkStub
        }, store, localVue
    })
    describe("Listelenmesi gereken başlıklar", () => {

        it("Zeytin", () => {
            expect(wrapper.text()).toContain("Zeytin");
        });

        it("ZeytinYağı", () => {
            expect(wrapper.text()).toContain("ZeytinYağı");
        });
        it("Şarküteri", () => {
            expect(wrapper.text()).toContain("Şarküteri");
        });
        it("Turşular", () => {
            expect(wrapper.text()).toContain("Turşular");
        });
        it("Kozmetik", () => {
            expect(wrapper.text()).toContain("Kozmetik");
        });
        it("Ev Yapımı", () => {
            expect(wrapper.text()).toContain("Ev Yapımı");
        });
        it("SiyahZeytin", () => {
            expect(wrapper.text()).toContain("SiyahZeytin");
        });
        it("YesilZeytin", () => {
            expect(wrapper.text()).toContain("YesilZeytin");
        });
        it("icecek", () => {
            expect(wrapper.text()).toContain("icecek");
        });
        it("Peynir", () => {
            expect(wrapper.text()).toContain("Peynir");
        });
        it("Reçel", () => {
            expect(wrapper.text()).toContain("Reçel");
        });
        it("Diğer", () => {
            expect(wrapper.text()).toContain("Diğer");
        });
    });

})