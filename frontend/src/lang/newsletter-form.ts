import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  de: {
    TITLE: 'Newsletter abonnieren',
    SUB_TITLE: 'Abonnieren Sie unseren Newsletter und verpassen Sie keine Neuigkeit!',
    SUBSCRIBE: 'Abonnieren',
    SUCCESS: 'Anmeldung erfolgreich!',
    CONFIRMATION_SENT: 'Wir haben Ihnen eine E-Mail geschickt. Bitte bestätigen Sie darin Ihre Anmeldung.',
    CONFIRM_TITLE: 'Anmeldung bestätigt',
    CONFIRM_SUCCESS: 'Vielen Dank! Ihre Anmeldung zum Newsletter ist bestätigt.',
    CONFIRM_ERROR: 'Der Bestätigungslink ist ungültig oder abgelaufen. Bitte melden Sie sich erneut an.',
  },
  fr: {
    TITLE: 'Abonnez-vous',
    SUB_TITLE: 'Abonnez-vous à notre liste de diffusion pour recevoir les dernières mises à jour !',
    SUBSCRIBE: "S'abonner",
    SUCCESS: 'Inscription réussie !',
    CONFIRMATION_SENT: 'Nous vous avons envoyé un e-mail. Veuillez y confirmer votre inscription.',
    CONFIRM_TITLE: 'Inscription confirmée',
    CONFIRM_SUCCESS: 'Merci ! Votre inscription à la newsletter est confirmée.',
    CONFIRM_ERROR: 'Le lien de confirmation est invalide ou a expiré. Veuillez vous réinscrire.',
  },
  en: {
    TITLE: 'Subscribe',
    SUB_TITLE: 'Subscribe to our mailing list for the latest updates!',
    SUBSCRIBE: 'Subscribe',
    SUCCESS: 'Subscription successful!',
    CONFIRMATION_SENT: 'We have sent you an email. Please confirm your subscription there.',
    CONFIRM_TITLE: 'Subscription confirmed',
    CONFIRM_SUCCESS: 'Thank you! Your newsletter subscription is confirmed.',
    CONFIRM_ERROR: 'The confirmation link is invalid or has expired. Please sign up again.',
  },
  es: {
    TITLE: 'Suscribir',
    SUB_TITLE: '¡Suscríbete a nuestra lista de correo para recibir las últimas actualizaciones!',
    SUBSCRIBE: 'Suscribir',
    SUCCESS: '¡Suscripción exitosa!',
    CONFIRMATION_SENT: 'Le hemos enviado un correo. Confirme allí su suscripción.',
    CONFIRM_TITLE: 'Suscripción confirmada',
    CONFIRM_SUCCESS: '¡Gracias! Su suscripción al boletín está confirmada.',
    CONFIRM_ERROR: 'El enlace de confirmación no es válido o ha caducado. Vuelva a suscribirse.',
  },
})

langHelper.setLanguage(strings)
export { strings }
