import { mount } from "@vue/test-utils";

import HeadKampanyalar from "../../components/page-head/HeadKampanyalarBar.vue";

describe("HeadKampanyalar.vue", () => {
  let wrapper = mount(HeadKampanyalar);
  it("There is a Kampanyalar", () => {
    expect(wrapper.text()).toContain("Kampanyalar");
  });
  it("There is a Çok Satanlar", () => {
    expect(wrapper.text()).toContain("Çok Satanlar");
  });
  it("There is a Fırsat Ürünleri", () => {
    expect(wrapper.text()).toContain("Fırsat Ürünleri");
  });
  it("There is a Yeni Ürünler", () => {
    expect(wrapper.text()).toContain("Yeni Ürünler");
  });
});
