import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.js';
import sl from './sl.js';

i18next.use(initReactI18next).init({
  resources: {
    en: {translation: en},
    sl: {translation: sl}
  },
  fallbackLng: 'en',
  lng: 'en',
});
export default i18next;
