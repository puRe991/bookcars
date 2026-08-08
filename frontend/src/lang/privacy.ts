import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'
import env from '@/config/env.config'

const strings = new LocalizedStrings({
  de: {
    TITLE: 'Datenschutzerklärung',
    PRIVACY_POLICY: `
Der Schutz Ihrer Daten ist uns bei ${env.WEBSITE_NAME} wichtig. Diese Datenschutzerklärung beschreibt, wie wir Ihre Daten erheben, verwenden und schützen, wenn Sie unsere Website und unsere Dienste nutzen. Die Verarbeitung erfolgt nach den Vorgaben der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG).


1. Welche Daten wir erheben

Wir erheben Daten, wenn Sie sich auf unserer Website registrieren, eine Buchung vornehmen oder unsere Dienste nutzen. Dazu können gehören:

Name
E-Mail-Adresse
Telefonnummer
Zahlungsdaten
Mietpräferenzen
Sie können unsere Website auch ohne Registrierung besuchen; einzelne Funktionen stehen dann jedoch nur eingeschränkt zur Verfügung.


2. Zwecke und Rechtsgrundlagen der Verarbeitung

Wir verarbeiten Ihre Daten insbesondere:

zur Abwicklung Ihrer Buchungen und Zahlungen (Art. 6 Abs. 1 lit. b DSGVO),
zur Verbesserung unseres Kundenservices (Art. 6 Abs. 1 lit. f DSGVO),
zum Versand von E-Mails zu Ihrer Buchung sowie – bei entsprechender Einwilligung – zu weiteren Angeboten (Art. 6 Abs. 1 lit. a und b DSGVO),
zur Beantwortung von Anfragen und Supportanliegen (Art. 6 Abs. 1 lit. b und f DSGVO).


3. Wie wir Ihre Daten schützen

Wir treffen geeignete technische und organisatorische Maßnahmen, um Ihre personenbezogenen Daten zu schützen. Sensible Daten werden verschlüsselt über gesicherte Server übertragen und sind nur berechtigten Personen zugänglich. Ihre Kreditkartendaten speichern wir nicht auf unseren Servern.


4. Weitergabe Ihrer Daten

Wir verkaufen oder vermieten Ihre personenbezogenen Daten nicht. Eine Weitergabe erfolgt nur an sorgfältig ausgewählte Auftragsverarbeiter und Partner, die uns beim Betrieb der Website, bei der Geschäftsabwicklung oder bei der Betreuung unserer Kundinnen und Kunden unterstützen und die zur Vertraulichkeit verpflichtet sind. Darüber hinaus geben wir Daten weiter, wenn wir gesetzlich dazu verpflichtet sind oder dies zur Durchsetzung unserer Nutzungsbedingungen bzw. zum Schutz von Rechten erforderlich ist.


5. Eingesetzte Dienste Dritter

Google reCAPTCHA: Zum Schutz unserer Formulare vor automatisierten Eingaben setzen wir reCAPTCHA der Google Ireland Limited ein. Dabei werden Ihre IP-Adresse sowie Nutzungsdaten an Google übermittelt und dort ausgewertet. Rechtsgrundlage ist unser berechtigtes Interesse an der Abwehr von Missbrauch (Art. 6 Abs. 1 lit. f DSGVO).

Zahlungsdienstleister: Für die Zahlungsabwicklung nutzen wir Stripe bzw. PayPal. Die von Ihnen eingegebenen Zahlungsdaten werden direkt an den jeweiligen Anbieter übermittelt; vollständige Kartendaten speichern wir nicht. Rechtsgrundlage ist die Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO).

Anmeldung über Google, Facebook oder Apple: Der Anmeldedienst des jeweiligen Anbieters wird erst geladen, sobald Sie die entsprechende Schaltfläche anklicken. Vorher findet keine Übertragung an diese Anbieter statt. Rechtsgrundlage ist Ihre Einwilligung durch die Auswahl dieser Anmeldeart (Art. 6 Abs. 1 lit. a DSGVO).

Reichweitenmessung: Analyse-Dienste werden ausschließlich nach Ihrer Einwilligung über den Cookie-Hinweis geladen (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG). Sie können diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.

Newsletter: Die Anmeldung erfolgt im Double-Opt-in-Verfahren. Wir speichern Ihre E-Mail-Adresse sowie Zeitpunkt und IP-Adresse der Bestätigung als Nachweis Ihrer Einwilligung. Sie können den Newsletter jederzeit abbestellen.


6. Speicherdauer

Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen – insbesondere handels- und steuerrechtlicher Art – dies vorschreiben.


7. Daten von Kindern

Unsere Dienste richten sich nicht an Kinder unter 16 Jahren. Wir erheben wissentlich keine personenbezogenen Daten von Kindern unter 16 Jahren ohne Einwilligung der Erziehungsberechtigten. Sollten wir Kenntnis davon erlangen, löschen wir diese Daten unverzüglich.


8. Änderungen dieser Datenschutzerklärung

Wir können diese Datenschutzerklärung von Zeit zu Zeit anpassen. Änderungen veröffentlichen wir auf dieser Seite. Wir empfehlen Ihnen, diese Seite regelmäßig zu prüfen.


9. Ihre Rechte

Sie haben das Recht auf Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO), auf Berichtigung (Art. 16 DSGVO), auf Löschung (Art. 17 DSGVO), auf Einschränkung der Verarbeitung (Art. 18 DSGVO), auf Datenübertragbarkeit (Art. 20 DSGVO) sowie auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO). Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Zudem steht Ihnen ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde zu.


10. Kontakt

Wenn Sie Fragen zu dieser Datenschutzerklärung oder zur Verarbeitung Ihrer Daten haben, erreichen Sie uns unter ${env.CONTACT_EMAIL}. Wir kümmern uns gern um Ihr Anliegen.


11. Hinweis

Mit der Nutzung unserer Dienste bestätigen Sie, dass Sie diese Datenschutzerklärung gelesen und verstanden haben.
    `,
  },
  fr: {
    TITLE: 'Politique de Confidentialité',
    PRIVACY_POLICY: `
Votre vie privée est importante pour nous chez ${env.WEBSITE_NAME}. Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site Web et nos services. En accédant à nos services, vous consentez aux pratiques décrites dans cette politique.

1. Informations que nous collectons

Nous collectons des informations auprès de vous lorsque vous vous inscrivez sur notre site, passez une commande ou interagissez avec nos services. Les informations que nous pouvons collecter comprennent :

Nom
Adresse e-mail
Numéro de téléphone
Informations de paiement
Préférences de location
Vous pouvez visiter notre site de manière anonyme, mais certaines fonctionnalités peuvent être limitées.

2. Comment nous utilisons vos informations

Vos informations peuvent être utilisées des manières suivantes :

Pour traiter vos réservations et paiements
Pour améliorer le service client
Pour envoyer des e-mails périodiques concernant votre commande ou d'autres produits et services
Pour répondre aux demandes de renseignements et d'assistance

3. Comment nous protégeons vos informations

Nous mettons en œuvre diverses mesures de sécurité pour maintenir la sécurité de vos informations personnelles. Toutes les informations sensibles sont transmises via des serveurs sécurisés et ne sont accessibles qu'au personnel autorisé. Nous ne stockons pas vos informations de carte de crédit sur nos serveurs.

4. Partage de vos informations

Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles identifiables à des tiers, sauf à des partenaires de confiance qui nous aident à exploiter notre site Web, à mener nos activités ou à vous fournir des services, tant que ces parties acceptent de garder ces informations confidentielles. Nous pouvons également divulguer vos informations lorsque nous pensons que cette divulgation est appropriée pour se conformer à la loi, appliquer les politiques de notre site ou protéger nos droits ou ceux d'autrui, notre propriété ou notre sécurité.

5. Services tiers utilisés

Google reCAPTCHA : nous utilisons reCAPTCHA de Google Ireland Limited pour protéger nos formulaires contre les envois automatisés. Votre adresse IP et des données d'utilisation sont transmises à Google et y sont analysées. La base légale est notre intérêt légitime à prévenir les abus (art. 6, par. 1, point f, du RGPD).

Prestataires de paiement : les paiements sont traités via Stripe ou PayPal. Les données de paiement que vous saisissez sont transmises directement au prestataire concerné ; nous ne conservons pas les données complètes de carte. La base légale est l'exécution du contrat (art. 6, par. 1, point b, du RGPD).

Connexion via Google, Facebook ou Apple : le service du fournisseur concerné n'est chargé qu'au moment où vous cliquez sur le bouton correspondant. Aucune donnée ne leur est transmise auparavant. La base légale est votre consentement (art. 6, par. 1, point a, du RGPD).

Mesure d'audience : les services d'analyse ne sont chargés qu'après votre consentement via la bannière cookies (art. 6, par. 1, point a, du RGPD). Vous pouvez retirer ce consentement à tout moment.

Newsletter : l'inscription utilise une procédure de double opt-in. Nous conservons votre adresse e-mail ainsi que la date et l'adresse IP de la confirmation comme preuve de votre consentement. Vous pouvez vous désinscrire à tout moment.


6. Confidentialité des enfants

Nous respectons la loi sur la protection de la vie privée des enfants en ligne (Children's Online Privacy Protection Act, COPPA). Nos services ne sont pas destinés aux enfants de moins de 13 ans et nous ne collectons pas sciemment d'informations personnelles auprès d'enfants de moins de 13 ans. Si nous apprenons que nous avons collecté des informations personnelles auprès d'un enfant de moins de 13 ans, nous prendrons des mesures pour supprimer ces informations.

7. Modifications de notre politique de confidentialité

Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique de confidentialité sur cette page. Il vous est conseillé de consulter régulièrement cette politique de confidentialité pour prendre connaissance de tout changement.

8. Vos droits

Vous avez le droit de demander l'accès aux informations personnelles que nous détenons à votre sujet, de demander la correction de toute inexactitude et de demander la suppression de vos informations personnelles, sous réserve de certaines exceptions. Pour exercer ces droits, veuillez nous contacter en utilisant les informations fournies ci-dessous.

9. Contactez-nous

Si vous avez des questions sur cette politique de confidentialité ou sur nos pratiques en matière de données, veuillez nous contacter à l'adresse ${env.CONTACT_EMAIL}. Nous nous engageons à répondre à vos préoccupations et à protéger votre vie privée.

10. Reconnaissance

En utilisant nos services, vous reconnaissez avoir lu et compris cette politique de confidentialité et acceptez ses conditions.    
    `,
  },
  en: {
    TITLE: 'Privacy Policy',
    PRIVACY_POLICY: `
Your privacy is important to us at ${env.WEBSITE_NAME}. This Privacy Policy outlines how we collect, use, and protect your information when you use our website and services. By accessing our services, you consent to the practices described in this policy.


1. Information We Collect

We collect information from you when you register on our site, place an order, or interact with our services. The information we may collect includes:

Name
Email address
Phone number
Payment information
Rental preferences
You may visit our site anonymously, but certain functionalities may be limited.


2. How We Use Your Information

Your information may be used in the following ways:

To process your reservations and payments
To improve customer service
To send periodic emails regarding your order or other products and services
To respond to inquiries and support requests


3. How We Protect Your Information

We implement a variety of security measures to maintain the safety of your personal information. All sensitive information is transmitted via secure servers and is only accessible by authorized personnel. We do not store your credit card information on our servers.


4. Sharing Your Information

We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties, except to trusted partners who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect our rights or others' rights, property, or safety.


5. Third-party services we use

Google reCAPTCHA: We use reCAPTCHA by Google Ireland Limited to protect our forms against automated submissions. Your IP address and usage data are transmitted to and evaluated by Google. The legal basis is our legitimate interest in preventing abuse (Art. 6(1)(f) GDPR).

Payment providers: Payments are processed via Stripe or PayPal. The payment details you enter are transmitted directly to the respective provider; we do not store full card details. The legal basis is performance of the contract (Art. 6(1)(b) GDPR).

Sign-in with Google, Facebook or Apple: The provider's sign-in service is only loaded once you click the corresponding button. No data is transmitted to them before that. The legal basis is your consent, given by choosing that sign-in method (Art. 6(1)(a) GDPR).

Audience measurement: Analytics services are loaded only after you consent via the cookie banner (Art. 6(1)(a) GDPR, § 25(1) TTDSG). You may withdraw that consent at any time with effect for the future.

Newsletter: Subscriptions use a double opt-in procedure. We store your email address together with the time and IP address of the confirmation as proof of consent. You may unsubscribe at any time.


6. Children's Privacy

We comply with the Children's Online Privacy Protection Act (COPPA). Our services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.


7. Changes to Our Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.


8. Your Rights

You have the right to request access to the personal information we hold about you, to request correction of any inaccuracies, and to request deletion of your personal information, subject to certain exceptions. To exercise these rights, please contact us using the information provided below.


9. Contact Us

If you have any questions about this Privacy Policy or our data practices, please contact us at ${env.CONTACT_EMAIL}. We are committed to addressing your concerns and protecting your privacy.


10. Acknowledgment

By using our services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
    `,
  },
  es: {
    TITLE: 'Política de privacidad de alquiler',
    PRIVACY_POLICY: `
Su privacidad es importante para nosotros en ${env.WEBSITE_NAME}. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos su información cuando utiliza nuestro sitio web y nuestros servicios. Al acceder a nuestros servicios, usted acepta las prácticas descritas en esta política.


1. Información que recopilamos

Recopilamos información sobre usted cuando se registra en nuestro sitio, realiza un pedido o interactúa con nuestros servicios. La información que podemos recopilar incluye:

Nombre
Dirección de correo electrónico
Número de teléfono
Información de pago
Preferencias de alquiler
Puede visitar nuestro sitio de forma anónima, pero ciertas funcionalidades pueden estar limitadas.


2. Cómo utilizamos su información

Su información podrá ser utilizada de las siguientes maneras:

Para procesar sus reservas y pagos
Para mejorar el servicio al cliente
Para enviar correos electrónicos periódicos sobre su pedido u otros productos y servicios
Para responder a consultas y solicitudes de soporte.


3. Cómo protegemos su información

Implementamos una variedad de medidas de seguridad para mantener la seguridad de su información personal. Toda la información confidencial se transmite a través de servidores seguros y solo el personal autorizado puede acceder a ella. No almacenamos la información de su tarjeta de crédito en nuestros servidores.


4. Compartir su información

No vendemos, comercializamos ni transferimos de otro modo su información de identificación personal a terceros, excepto a socios confiables que nos ayudan a operar nuestro sitio web, realizar nuestro negocio o brindarle servicios, siempre que dichas partes acepten mantener esta información confidencial. También podemos divulgar su información cuando creamos que la divulgación es apropiada para cumplir con la ley, hacer cumplir las políticas de nuestro sitio o proteger nuestros derechos o los derechos, la propiedad o la seguridad de otros.


5. Servicios de terceros utilizados

Google reCAPTCHA: utilizamos reCAPTCHA de Google Ireland Limited para proteger nuestros formularios frente a envíos automatizados. Su dirección IP y datos de uso se transmiten a Google y se analizan allí. La base jurídica es nuestro interés legítimo en prevenir abusos (art. 6.1.f del RGPD).

Proveedores de pago: los pagos se tramitan a través de Stripe o PayPal. Los datos de pago que introduce se transmiten directamente al proveedor correspondiente; no almacenamos datos completos de tarjeta. La base jurídica es la ejecución del contrato (art. 6.1.b del RGPD).

Inicio de sesión con Google, Facebook o Apple: el servicio del proveedor solo se carga cuando pulsa el botón correspondiente. Antes de eso no se les transmite ningún dato. La base jurídica es su consentimiento (art. 6.1.a del RGPD).

Medición de audiencia: los servicios de análisis solo se cargan tras su consentimiento mediante el aviso de cookies (art. 6.1.a del RGPD). Puede retirar ese consentimiento en cualquier momento.

Boletín: la suscripción utiliza un procedimiento de doble confirmación. Conservamos su dirección de correo junto con la fecha y la dirección IP de la confirmación como prueba de su consentimiento. Puede darse de baja en cualquier momento.


6. Privacidad de los niños

Cumplimos con la Ley de Protección de la Privacidad Infantil en Línea (COPPA). Nuestros servicios no están dirigidos a niños menores de 13 años y no recopilamos intencionadamente información personal de niños menores de 13 años. Si nos damos cuenta de que hemos recopilado información personal de un niño menor de 13 años, tomaremos medidas para eliminar dicha información. .


7. Cambios a nuestra política de privacidad

Podemos actualizar esta Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página. Se le recomienda revisar esta Política de Privacidad periódicamente para detectar cualquier cambio.


8. Tus derechos

Tiene derecho a solicitar acceso a la información personal que tenemos sobre usted, solicitar la corrección de cualquier inexactitud y solicitar la eliminación de su información personal, sujeto a ciertas excepciones. Para ejercer estos derechos, comuníquese con nosotros utilizando la información proporcionada a continuación.


9. Contáctenos

Si tiene alguna pregunta sobre esta Política de Privacidad o nuestras prácticas de datos, contáctenos en ${env.CONTACT_EMAIL}. Estamos comprometidos a abordar sus inquietudes y proteger su privacidad.


10. Reconocimiento

Al utilizar nuestros servicios, usted reconoce que ha leído y comprendido esta Política de Privacidad y acepta sus términos.    
    `,
  },
})

langHelper.setLanguage(strings)
export { strings }
