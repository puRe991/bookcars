import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'
import env from '@/config/env.config'

const strings = new LocalizedStrings({
  de: {
    TITLE: 'Impressum',
    PROVIDER: 'Angaben gemäß § 5 DDG',
    REPRESENTATIVE: 'Vertreten durch',
    CONTACT: 'Kontakt',
    PHONE: 'Telefon',
    EMAIL: 'E-Mail',
    REGISTER: 'Registereintrag',
    REGISTER_COURT: 'Registergericht',
    REGISTER_NUMBER: 'Registernummer',
    VAT_ID: 'Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG',
    SUPERVISORY_AUTHORITY: 'Aufsichtsbehörde',
    CONTENT_RESPONSIBLE: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV',
    DISPUTE_TITLE: 'Verbraucherstreitbeilegung',
    DISPUTE_TEXT: `Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/
Unsere E-Mail-Adresse finden Sie oben in diesem Impressum.
Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.`,
    NOT_CONFIGURED: 'Noch nicht hinterlegt',
    INCOMPLETE_WARNING: 'Hinweis an den Betreiber: Dieses Impressum ist unvollständig. Bitte hinterlegen Sie die fehlenden Angaben über die VITE_BC_COMPANY_*-Umgebungsvariablen, bevor die Seite öffentlich erreichbar ist.',
  },
  en: {
    TITLE: 'Legal Notice',
    PROVIDER: 'Information pursuant to § 5 DDG',
    REPRESENTATIVE: 'Represented by',
    CONTACT: 'Contact',
    PHONE: 'Phone',
    EMAIL: 'Email',
    REGISTER: 'Register entry',
    REGISTER_COURT: 'Registering court',
    REGISTER_NUMBER: 'Register number',
    VAT_ID: 'VAT identification number pursuant to § 27a UStG',
    SUPERVISORY_AUTHORITY: 'Supervisory authority',
    CONTENT_RESPONSIBLE: 'Responsible for the content pursuant to § 18 (2) MStV',
    DISPUTE_TITLE: 'Consumer dispute resolution',
    DISPUTE_TEXT: `The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr/
You can find our email address at the top of this legal notice.
We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.`,
    NOT_CONFIGURED: 'Not provided yet',
    INCOMPLETE_WARNING: 'Note to the operator: this legal notice is incomplete. Please provide the missing details via the VITE_BC_COMPANY_* environment variables before making the site publicly available.',
  },
  fr: {
    TITLE: 'Mentions légales',
    PROVIDER: 'Informations conformément au § 5 DDG',
    REPRESENTATIVE: 'Représenté par',
    CONTACT: 'Contact',
    PHONE: 'Téléphone',
    EMAIL: 'E-mail',
    REGISTER: 'Inscription au registre',
    REGISTER_COURT: 'Tribunal d’enregistrement',
    REGISTER_NUMBER: 'Numéro de registre',
    VAT_ID: 'Numéro d’identification à la TVA conformément au § 27a UStG',
    SUPERVISORY_AUTHORITY: 'Autorité de surveillance',
    CONTENT_RESPONSIBLE: 'Responsable du contenu conformément au § 18 al. 2 MStV',
    DISPUTE_TITLE: 'Règlement des litiges de consommation',
    DISPUTE_TEXT: `La Commission européenne met à disposition une plateforme de règlement en ligne des litiges (RLL) : https://ec.europa.eu/consumers/odr/
Vous trouverez notre adresse e-mail en haut de ces mentions légales.
Nous ne sommes ni obligés ni disposés à participer à une procédure de règlement des litiges devant un organisme de médiation de la consommation.`,
    NOT_CONFIGURED: 'Pas encore renseigné',
    INCOMPLETE_WARNING: 'Note à l’exploitant : ces mentions légales sont incomplètes. Veuillez renseigner les informations manquantes via les variables d’environnement VITE_BC_COMPANY_* avant la mise en ligne.',
  },
  es: {
    TITLE: 'Aviso legal',
    PROVIDER: 'Información conforme al § 5 DDG',
    REPRESENTATIVE: 'Representado por',
    CONTACT: 'Contacto',
    PHONE: 'Teléfono',
    EMAIL: 'Correo electrónico',
    REGISTER: 'Inscripción en el registro',
    REGISTER_COURT: 'Tribunal de registro',
    REGISTER_NUMBER: 'Número de registro',
    VAT_ID: 'Número de identificación fiscal conforme al § 27a UStG',
    SUPERVISORY_AUTHORITY: 'Autoridad de supervisión',
    CONTENT_RESPONSIBLE: 'Responsable del contenido conforme al § 18 apdo. 2 MStV',
    DISPUTE_TITLE: 'Resolución de litigios en materia de consumo',
    DISPUTE_TEXT: `La Comisión Europea facilita una plataforma de resolución de litigios en línea (RLL): https://ec.europa.eu/consumers/odr/
Puede encontrar nuestra dirección de correo electrónico al principio de este aviso legal.
No estamos obligados ni dispuestos a participar en procedimientos de resolución de litigios ante un organismo de arbitraje de consumo.`,
    NOT_CONFIGURED: 'Aún no facilitado',
    INCOMPLETE_WARNING: 'Nota para el operador: este aviso legal está incompleto. Facilite los datos que faltan mediante las variables de entorno VITE_BC_COMPANY_* antes de publicar el sitio.',
  },
})

langHelper.setLanguage(strings)
export { strings }

export const company = env.COMPANY
