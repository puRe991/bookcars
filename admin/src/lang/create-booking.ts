import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  de: {
    NEW_BOOKING_HEADING: 'Neue Buchung',
  },
  fr: {
    NEW_BOOKING_HEADING: 'Nouvelle réservation',
  },
  en: {
    NEW_BOOKING_HEADING: 'New booking',
  },
  es: {
    NEW_BOOKING_HEADING: 'Nueva reserva',
  },
})

langHelper.setLanguage(strings)
export { strings }
