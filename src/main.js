// 가장 먼저 실행되는 js 파일
import { createApp } from 'vue';
import App from '@/App.vue';
import router from './router';

// bootstrap
import mwavKit from '@/plugins/mwav-kit.js';

// fontawsome
import fontAwesomeKit from '@/plugins/font-awesome-kit.js';

// vue 인스턴스 생성
const app = createApp(App);
// 라우터 등록
app.use(router);

app.use(mwavKit);
app.use(fontAwesomeKit);

// #app에 Vue 인스턴스 등록
app.mount('#app');
