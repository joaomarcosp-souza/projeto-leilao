import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import ptBr from './locales/pt-BR.json';


const resources = {
    en: {
        translation: en,
    },
    pt: {
        translation: ptBr,
    },
};


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'pt',
        interpolation: {
            escapeValue: false,
        },
    });


export default i18n;