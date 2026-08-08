import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  de: {
    UNAUTHORIZED: 'Kein Zugriff',
  },
  fr: {
    UNAUTHORIZED: 'Accès non autorisé',
  },
  en: {
    UNAUTHORIZED: 'Unauthorized access',
  },
  es: {
    UNAUTHORIZED: 'Acceso no autorizado',
  },
})

langHelper.setLanguage(strings)
export { strings }
