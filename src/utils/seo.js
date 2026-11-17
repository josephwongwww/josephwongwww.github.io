import { locale, translate } from '../i18n'

export const SITE_NAME = '永采實業有限公司'

const languageTags = { 'zh-TW': 'zh-Hant', 'zh-CN': 'zh-Hans', en: 'en' }
const homeTitles = {
  'zh-TW': `${SITE_NAME}｜服裝輔料與熱轉印定製`,
  'zh-CN': `${SITE_NAME}｜服装辅料与热转印定制`,
  en: 'Win Choice Industries Ltd. | Custom Garment Accessories & Heat Transfers'
}
const descriptions = {
  'zh-TW': '永采實業有限公司自 2005 年專注定製服裝輔料，提供熱轉印、硅膠標及特色印花，從創意開發到生產，為品牌尋找合適的工藝。',
  'zh-CN': '永采實業有限公司自 2005 年专注定制服装辅料，提供热转印、硅胶标及特色印花，从创意开发到生产，为品牌寻找合适的工艺。',
  en: 'Founded in 2005, Win Choice Industries Ltd. creates custom garment accessories, heat transfers, silicone labels and special-effect prints, from development through production.'
}

// Keep route navigation and language switching on the same metadata path.
export function updateDocumentMetadata(titleKey = 'nav.home') {
  const language = locale.locale
  const brand = language === 'en' ? 'Win Choice Industries Ltd.' : SITE_NAME
  const title = titleKey === 'nav.home'
    ? homeTitles[language]
    : `${translate(titleKey)}｜${brand}`

  document.documentElement.lang = languageTags[language]
  document.title = title
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
  document.querySelector('meta[name="description"]')?.setAttribute('content', descriptions[language])
}
