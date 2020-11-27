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
  RadioGroup,
  RadioButton,
  Table,
  TableColumn,
  Upload,
} from 'element-ui';

import { Uploader } from 'vant';
Vue.use(Uploader);

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
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Upload);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
