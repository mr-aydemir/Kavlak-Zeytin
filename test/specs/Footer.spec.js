import { mount } from "@vue/test-utils";

import Footer from "../../components/page-footer/Footer.vue";

describe("Footer.vue", () => {
  let wrapper = mount(Footer);
  it("There is a Gizlilik ve Kişisel Verilerin Korunması Politikası", () => {
    expect(wrapper.text()).toContain("Gizlilik ve Kişisel Verilerin Korunması Politikası");
  });
  it("There is a Kullanım Koşullarımız", () => {
    expect(wrapper.text()).toContain("Kullanım Koşullarımız");
  });
  it("There is a KATEGORİLER", () => {
    expect(wrapper.text()).toContain("KATEGORİLER");
  });
  it("There is a KURUMSAL", () => {
    expect(wrapper.text()).toContain("KURUMSAL");
  });
});
