import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

import en from './i18n/en.json';
import cn from './i18n/zh-cn.json';

export function i18nInit() {
    addMessages('en', en);
    addMessages('cn', cn);
    init({
        fallbackLocale: 'en',
        initialLocale: "cn",
    });
}
