import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  de: {
    TITLE: 'Verträge',
  },
  fr: {
    TITLE: 'Contrats',
  },
  en: {
    TITLE: 'Contracts',
  },
  es: {
    TITLE: 'Contratos',
  }
})

langHelper.setLanguage(strings)
export { strings }
