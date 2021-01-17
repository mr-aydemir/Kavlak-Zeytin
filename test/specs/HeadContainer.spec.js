import { mount, config,RouterLinkStub } from "@vue/test-utils";
import HeadContainer from "../../components/page-head/HeadContainer.vue";
import { mutations, actions, state, getters } from "../../store/index";

config.mocks["$store"] = {
    state: { ...state },
    getters: {
         ...getters
    },
    actions: {
        "logout": { ...actions }
    },
    mutations: {
        ...mutations
    }
};

describe("HeadContainer.vue", () => {
    it("Kullanıcı girişi yapılmadığında, Üye Ol ve Giriş Yap butonlarının gözükmesi", () => {
        let wrapper = mount(HeadContainer, {
            stubs: {
                NuxtLink: RouterLinkStub
            }
        });
        expect(wrapper.text()).toContain("Üye Ol");
    });
});