import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'

const strings = new LocalizedStrings({
  de: {
    TITLE: 'Datenschutzeinstellungen',
    TEXT: 'Wir verwenden Cookies. Notwendige Cookies sind für den Betrieb der Website erforderlich. Analyse-Cookies setzen wir nur mit Ihrer Einwilligung ein, um die Nutzung der Website auszuwerten. Sie können Ihre Auswahl jederzeit ändern.',
    ACCEPT_ALL: 'Alle akzeptieren',
    ESSENTIAL_ONLY: 'Nur notwendige',
    COOKIE_POLICY: 'Cookie-Richtlinie',
    PRIVACY_POLICY: 'Datenschutzerklärung',
    IMPRESSUM: 'Impressum',
  },
  en: {
    TITLE: 'Privacy settings',
    TEXT: 'We use cookies. Strictly necessary cookies are required for the website to work. Analytics cookies are only set with your consent, to measure how the website is used. You can change your choice at any time.',
    ACCEPT_ALL: 'Accept all',
    ESSENTIAL_ONLY: 'Essential only',
    COOKIE_POLICY: 'Cookie Policy',
    PRIVACY_POLICY: 'Privacy Policy',
    IMPRESSUM: 'Legal Notice',
  },
  fr: {
    TITLE: 'Paramètres de confidentialité',
    TEXT: 'Nous utilisons des cookies. Les cookies strictement nécessaires sont indispensables au fonctionnement du site. Les cookies de mesure d’audience ne sont déposés qu’avec votre consentement. Vous pouvez modifier votre choix à tout moment.',
    ACCEPT_ALL: 'Tout accepter',
    ESSENTIAL_ONLY: 'Nécessaires uniquement',
    COOKIE_POLICY: 'Politique de cookies',
    PRIVACY_POLICY: 'Politique de confidentialité',
    IMPRESSUM: 'Mentions légales',
  },
  es: {
    TITLE: 'Configuración de privacidad',
    TEXT: 'Utilizamos cookies. Las cookies estrictamente necesarias son imprescindibles para el funcionamiento del sitio. Las cookies analíticas solo se instalan con su consentimiento. Puede cambiar su elección en cualquier momento.',
    ACCEPT_ALL: 'Aceptar todas',
    ESSENTIAL_ONLY: 'Solo necesarias',
    COOKIE_POLICY: 'Política de cookies',
    PRIVACY_POLICY: 'Política de privacidad',
    IMPRESSUM: 'Aviso legal',
  },
})

langHelper.setLanguage(strings)
export { strings }
