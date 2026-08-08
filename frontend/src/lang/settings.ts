import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  de: {
    SETTINGS_UPDATED: 'Einstellungen erfolgreich aktualisiert.',
    NETWORK_SETTINGS: 'Netzwerkeinstellungen',
    SETTINGS_EMAIL_NOTIFICATIONS: 'E-Mail-Benachrichtigungen aktivieren',
    PRIVACY_TITLE: 'Ihre Daten',
    EXPORT_DATA: 'Meine Daten herunterladen',
    EXPORT_DATA_INFO: 'Sie erhalten alle zu Ihrem Konto gespeicherten Daten als JSON-Datei (Art. 15 und 20 DSGVO).',
    EXPORT_DATA_ERROR: 'Der Datenexport ist fehlgeschlagen.',
    DELETE_ACCOUNT: 'Konto löschen',
    DELETE_ACCOUNT_INFO: 'Ihre personenbezogenen Daten werden gelöscht (Art. 17 DSGVO). Buchungsbelege bleiben aus steuer- und handelsrechtlichen Gründen in anonymisierter Form erhalten.',
    DELETE_ACCOUNT_CONFIRM: 'Möchten Sie Ihr Konto wirklich endgültig löschen? Dieser Schritt kann nicht rückgängig gemacht werden.',
    DELETE_ACCOUNT_ERROR: 'Das Konto konnte nicht gelöscht werden.',
  },
  fr: {
    SETTINGS_UPDATED: 'Paramètres modifiés avec succès.',
    NETWORK_SETTINGS: 'Paramètres Réseau',
    SETTINGS_EMAIL_NOTIFICATIONS: 'Activer les notifications par email',
    PRIVACY_TITLE: 'Vos données',
    EXPORT_DATA: 'Télécharger mes données',
    EXPORT_DATA_INFO: 'Vous recevrez toutes les données enregistrées pour votre compte dans un fichier JSON (art. 15 et 20 du RGPD).',
    EXPORT_DATA_ERROR: 'L’export des données a échoué.',
    DELETE_ACCOUNT: 'Supprimer le compte',
    DELETE_ACCOUNT_INFO: 'Vos données personnelles seront supprimées (art. 17 du RGPD). Les justificatifs de réservation sont conservés sous forme anonymisée pour respecter les obligations légales de conservation.',
    DELETE_ACCOUNT_CONFIRM: 'Voulez-vous vraiment supprimer définitivement votre compte ? Cette action est irréversible.',
    DELETE_ACCOUNT_ERROR: 'Le compte n’a pas pu être supprimé.',
  },
  en: {
    SETTINGS_UPDATED: 'Settings updated successfully.',
    NETWORK_SETTINGS: 'Network settings',
    SETTINGS_EMAIL_NOTIFICATIONS: 'Enable email notifications',
    PRIVACY_TITLE: 'Your data',
    EXPORT_DATA: 'Download my data',
    EXPORT_DATA_INFO: 'You will receive everything stored about your account as a JSON file (GDPR Art. 15 and 20).',
    EXPORT_DATA_ERROR: 'The data export failed.',
    DELETE_ACCOUNT: 'Delete account',
    DELETE_ACCOUNT_INFO: 'Your personal data will be deleted (GDPR Art. 17). Booking records are retained in anonymised form to satisfy statutory retention periods.',
    DELETE_ACCOUNT_CONFIRM: 'Do you really want to permanently delete your account? This cannot be undone.',
    DELETE_ACCOUNT_ERROR: 'The account could not be deleted.',
  },
  es: {
    SETTINGS_UPDATED: 'Configuración actualizada correctamente.',
    NETWORK_SETTINGS: 'Configuración de red',
    SETTINGS_EMAIL_NOTIFICATIONS: 'Habilitar notificaciones por correo electrónico',
    PRIVACY_TITLE: 'Sus datos',
    EXPORT_DATA: 'Descargar mis datos',
    EXPORT_DATA_INFO: 'Recibirá todos los datos almacenados sobre su cuenta en un archivo JSON (arts. 15 y 20 del RGPD).',
    EXPORT_DATA_ERROR: 'La exportación de datos ha fallado.',
    DELETE_ACCOUNT: 'Eliminar cuenta',
    DELETE_ACCOUNT_INFO: 'Sus datos personales se eliminarán (art. 17 del RGPD). Los justificantes de reserva se conservan de forma anonimizada para cumplir los plazos legales de conservación.',
    DELETE_ACCOUNT_CONFIRM: '¿Seguro que desea eliminar definitivamente su cuenta? Esta acción no se puede deshacer.',
    DELETE_ACCOUNT_ERROR: 'No se ha podido eliminar la cuenta.',
  },
})

langHelper.setLanguage(strings)
export { strings }
