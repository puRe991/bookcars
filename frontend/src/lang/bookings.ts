import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  de: {
    NEW_BOOKING: 'Neue Buchung',
  },
  fr: {
    NEW_BOOKING: 'Nouvelle réservation',
  },
  en: {
    NEW_BOOKING: 'New Booking',
  },
  es: {
    NEW_BOOKING: 'Nueva reserva',
  },
})

langHelper.setLanguage(strings)
export { strings }
