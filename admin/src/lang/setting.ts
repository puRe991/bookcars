import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  de: {
    SETTINGS: 'Miet-Einstellungen',
    MIN_PICKUP_HOURS: 'Mindestvorlauf in Stunden vor der Abholung',
    MIN_RENTAL_HOURS: 'Mindestmietdauer in Stunden zwischen Abholung und Rückgabe',
    MIN_PICKUP_DROPOFF_HOUR: 'Frühestmögliche Uhrzeit für Abholung und Rückgabe (z. B. 9 für 09:00 Uhr)',
    MAX_PICKUP_DROPOFF_HOUR: 'Spätestmögliche Uhrzeit für Abholung und Rückgabe (z. B. 19 für 19:00 Uhr)',
    VAT_RATE: 'MwSt.-Satz (%)',
    VAT_RATE_INFO: 'Alle Preise sind Bruttopreise. Dieser Satz steuert nur den Ausweis des enthaltenen Steueranteils.',
  },
  fr: {
    SETTINGS: 'Paramètres de location',
    MIN_PICKUP_HOURS: 'Délai minimum requis en heures avant le retrait',
    MIN_RENTAL_HOURS: 'Durée minimale de location en heures entre le retrait et le retour',
    MIN_PICKUP_DROPOFF_HOUR: 'Heure minimale autorisée pour le retrait et le retour (par ex. 9 pour 09:00)',
    MAX_PICKUP_DROPOFF_HOUR: 'Heure maximale autorisée pour le retrait et le retour (par ex. 19 pour 19:00)',
    VAT_RATE: 'Taux de TVA (%)',
    VAT_RATE_INFO: 'Tous les prix sont TTC. Ce taux ne sert qu’à indiquer la part de taxe incluse.',
  },
  en: {
    SETTINGS: 'Rental Settings',
    MIN_PICKUP_HOURS: 'Minimum required time in hours before pick-up',
    MIN_RENTAL_HOURS: 'Minimum rental duration in hours between pick up and drop off',
    MIN_PICKUP_DROPOFF_HOUR: 'Minimum allowed hour for pickup and drop-off (e.g., 9 for 09:00)',
    MAX_PICKUP_DROPOFF_HOUR: 'Maximum allowed hour for pickup and drop-off (e.g., 19 for 19:00)',
    VAT_RATE: 'VAT rate (%)',
    VAT_RATE_INFO: 'All prices are gross. This rate only controls how the included tax share is disclosed.',
  },
  es: {
    SETTINGS: 'Configuración del alquiler',
    MIN_PICKUP_HOURS: 'Tiempo mínimo requerido en horas antes del retiro',
    MIN_RENTAL_HOURS: 'Duración mínima del alquiler en horas entre el retiro y la devolución',
    MIN_PICKUP_DROPOFF_HOUR: 'Hora mínima permitida para el retiro y la devolución (por ej. 9 para las 09:00)',
    MAX_PICKUP_DROPOFF_HOUR: 'Hora máxima permitida para el retiro y la devolución (por ej. 19 para las 19:00)',
    VAT_RATE: 'Tipo de IVA (%)',
    VAT_RATE_INFO: 'Todos los precios son brutos. Este tipo solo controla cómo se indica la parte de impuesto incluida.',
  },
})

langHelper.setLanguage(strings)
export { strings }
