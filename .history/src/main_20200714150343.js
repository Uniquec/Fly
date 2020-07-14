// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import { 
  Alert,
  Button,
  DatePicker,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Icon, 
  Input,
  Link,
  MessageBox,
  Radio,
  RadioButton,
} from 'element-ui';

Vue.config.productionTip = false;

Vue.use(Alert);
Vue.use(Button);
Vue.use(DatePicker);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Icon);
Vue.use(Input);
Vue.use(Link);
Vue.use(Radio);
Vue.use(RadioButton);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
