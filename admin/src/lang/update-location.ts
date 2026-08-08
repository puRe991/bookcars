import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  de: {
    UPDATE_LOCATION: 'Standort bearbeiten',
    LOCATION_UPDATED: 'Standort erfolgreich aktualisiert.',
  },
  fr: {
    UPDATE_LOCATION: 'Modification du lieu',
    LOCATION_UPDATED: 'Lieu modifié avec succès.',
  },
  en: {
    UPDATE_LOCATION: 'Location update',
    LOCATION_UPDATED: 'Location updated successfully.',
  },
  es: {
    UPDATE_LOCATION: 'Actualización del lugar',
    LOCATION_UPDATED: 'Lugar actualizado correctamente.',
  },
})

langHelper.setLanguage(strings)
export { strings }
