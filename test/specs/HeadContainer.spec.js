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

describe("Kullanıcı girişi yapılmadığında, Üye Ol ve Giriş Yap butonlarının gözükmesi", () => {
    let wrapper = mount(HeadContainer, {
        stubs: {
            NuxtLink: RouterLinkStub
        }
    });
    it("Üye Ol", () => {
        expect(wrapper.text()).toContain("Üye Ol");
    });
    it("Giriş yap", () => {
        expect(wrapper.text()).toContain("Giriş yap");
    });
});