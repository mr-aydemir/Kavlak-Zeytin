import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import '../firebase'
import RegisterForm from '../../components/register-page/RegisterForm'

const localVue = createLocalVue()
localVue.use(Vuex)
describe('RegisterForm', () => {
  let wrapper;
  const mockFunction = jest.fn();
  beforeEach(() => {
    wrapper = mount(RegisterForm, {
      localVue,
      data() {
        return {
          isAlreadyLogged: false,
          email: 'redirectTest@test.com',
          password: '123456',
          password2: '123456',
          name: 'Test',
          surname: 'Test',
          phone: '123456789',
          showPassword: true,
          gender: 0,
          sozlesmeOnayi: true,
          tanitimOnayi: false,
        };
      },
      store: new Vuex.Store({
        actions: {
          register: mockFunction,
        },
      }),
      mocks: {
        $router: {
          push: jest.fn()
        }
      }
    });
  });

  describe('methods', () => {
    describe('#Kayit işlemi', () => {
      it('register fonksiyonun çağrılması', async () => {
        await wrapper.vm.kaydol();
        expect(mockFunction).toHaveBeenCalled();
      });/* 
      it("Successfull Register", () => {
        let registerButton = wrapper.find(".Kbtn");
        console.log = jest.fn();
        registerButton.trigger("click").then(() => {
          expect(console.log).toHaveBeenCalledWith('Kayıt Başarılı');
        });
      }); */
    });
  });
});