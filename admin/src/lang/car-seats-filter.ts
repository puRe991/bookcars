import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  de: {
    SEATS: 'Sitzplätze',
    TWO: '2 Sitzplätze',
    FOUR: '4 Sitzplätze',
    FIVE: '5 Sitzplätze',
    FIVE_PLUS: '5+ Sitzplätze',
  },
  fr: {
    SEATS: 'Sièges',
    TWO: '2 sièges',
    FOUR: '4 sièges',
    FIVE: '5 sièges',
    FIVE_PLUS: '5+ sièges',
  },
  en: {
    SEATS: 'Seats',
    TWO: '2 seats',
    FOUR: '4 seats',
    FIVE: '5 seats',
    FIVE_PLUS: '5+ seats',
  },
  es: {
    SEATS: 'Asientos',
    TWO: '2 asientos',
    FOUR: '4 asientos',
    FIVE: '5 asientos',
    FIVE_PLUS: '5+ asientos',
  },
})

langHelper.setLanguage(strings)
export { strings }
