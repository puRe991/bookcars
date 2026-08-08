import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  de: {
    NEW_USER: 'Neuer Benutzer',
  },
  fr: {
    NEW_USER: 'Nouvel utilisateur',
  },
  en: {
    NEW_USER: 'New user',
  },
  es: {
    NEW_USER: 'Nuevo usuario',
  },
})

langHelper.setLanguage(strings)
export { strings }
