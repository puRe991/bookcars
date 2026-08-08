import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  de: {
    DELETE_USER: 'Möchten Sie diesen Benutzer und alle zugehörigen Daten wirklich löschen?',
    DELETE_USERS: 'Möchten Sie die ausgewählten Benutzer und alle zugehörigen Daten wirklich löschen?',
    DELETE_SELECTION: 'Ausgewählte Benutzer löschen',
    BLACKLIST: 'Zur Sperrliste hinzufügen',
  },
  fr: {
    DELETE_USER: 'Êtes-vous sûr de vouloir supprimer cet utilisateur et toutes ses données ?',
    DELETE_USERS: 'Êtes-vous sûr de vouloir supprimer les utilisateurs sélectionnés et toutes leurs données ?',
    DELETE_SELECTION: 'Supprimer les utilisateurs sélectionnés',
    BLACKLIST: 'Ajouter à la liste noire',
  },
  en: {
    DELETE_USER: 'Are you sure you want to delete this user and all his data?',
    DELETE_USERS: 'Are you sure you want to delete the selected users and all their data?',
    DELETE_SELECTION: 'Delete selectied users',
    BLACKLIST: 'Add to the blacklist',
  },
  es: {
    DELETE_USER: '¿Estás seguro de que quieres eliminar a este usuario y todos sus datos?',
    DELETE_USERS: '¿Estás seguro de que quieres eliminar a los usuarios seleccionados y todos sus datos?',
    DELETE_SELECTION: 'Eliminar los usuarios seleccionados',
    BLACKLIST: 'Añadir a la lista negra',
  },
})

langHelper.setLanguage(strings)
export { strings }
