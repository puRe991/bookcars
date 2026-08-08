import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/utils/langHelper'
import env from '@/config/env.config'

const strings = new LocalizedStrings({
  de: {
    TITLE: 'Widerrufsrecht',
    CONTENT: `
Diese Belehrung richtet sich an Verbraucherinnen und Verbraucher im Sinne des § 13 BGB.


1. Ausschluss des Widerrufsrechts bei Mietverträgen über Fahrzeuge

Bei Verträgen zur Erbringung von Dienstleistungen im Zusammenhang mit der Vermietung von Kraftfahrzeugen, die für die Erbringung zu einem bestimmten Zeitpunkt oder innerhalb eines genau angegebenen Zeitraums geschlossen werden, besteht nach § 312g Abs. 2 Nr. 9 BGB kein gesetzliches Widerrufsrecht.

Da Sie bei einer Buchung über ${env.WEBSITE_NAME} stets einen konkreten Abhol- und Rückgabetermin angeben, fällt Ihre Buchung unter diese Ausnahme. Ein Widerruf der Buchung ist daher gesetzlich nicht vorgesehen.

Unabhängig davon gelten unsere vertraglichen Stornierungsbedingungen. Diese finden Sie in den Nutzungsbedingungen. Sie können Ihre Buchung nach Maßgabe dieser Bedingungen stornieren; je nach Zeitpunkt der Stornierung kann eine Gebühr anfallen.


2. Widerrufsrecht bei sonstigen Verträgen

Soweit Sie mit uns einen Vertrag schließen, der nicht unter die vorstehende Ausnahme fällt, steht Ihnen ein Widerrufsrecht nach den folgenden Maßgaben zu.

Widerrufsbelehrung

Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.

Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das unten stehende Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.

Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.

Folgen des Widerrufs

Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.

Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen sollen, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.


3. Muster-Widerrufsformular

Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses Formular aus und senden Sie es zurück an:

${env.COMPANY.NAME || '[Name des Anbieters]'}
${env.COMPANY.ADDRESS || '[Anschrift des Anbieters]'}
${env.CONTACT_EMAIL || '[E-Mail-Adresse des Anbieters]'}

Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung (*)

Bestellt am (*) / erhalten am (*)

Name des/der Verbraucher(s)

Anschrift des/der Verbraucher(s)

Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)

Datum

(*) Unzutreffendes streichen.
    `,
  },
  en: {
    TITLE: 'Right of withdrawal',
    CONTENT: `
This notice is addressed to consumers within the meaning of § 13 of the German Civil Code (BGB).


1. Exclusion of the right of withdrawal for vehicle rental contracts

Pursuant to § 312g (2) no. 9 BGB, there is no statutory right of withdrawal for contracts for the provision of services in connection with the rental of motor vehicles where the contract provides for a specific date or period of performance.

Because every booking made through ${env.WEBSITE_NAME} specifies a concrete pick-up and drop-off date, your booking falls under this exception. A statutory withdrawal from the booking is therefore not available.

Our contractual cancellation terms apply regardless. You will find them in our Terms of Service. You may cancel your booking in accordance with those terms; depending on the time of cancellation, a fee may apply.


2. Right of withdrawal for other contracts

Where you conclude a contract with us that is not covered by the exception above, you have a right of withdrawal on the following terms.

Withdrawal notice

You have the right to withdraw from this contract within fourteen days without giving any reason. The withdrawal period is fourteen days from the day the contract was concluded.

To exercise your right of withdrawal, you must inform us of your decision to withdraw from this contract by an unequivocal statement (for example a letter sent by post or an email). You may use the model withdrawal form below, but this is not obligatory.

To meet the withdrawal deadline, it is sufficient for you to send your communication concerning your exercise of the right of withdrawal before the withdrawal period has expired.

Effects of withdrawal

If you withdraw from this contract, we shall reimburse to you all payments received from you, including the costs of delivery (with the exception of the supplementary costs resulting from your choice of a type of delivery other than the least expensive type of standard delivery offered by us), without undue delay and in any event not later than fourteen days from the day on which we are informed about your decision to withdraw from this contract. We will carry out such reimbursement using the same means of payment as you used for the initial transaction, unless you have expressly agreed otherwise; in any event, you will not incur any fees as a result of such reimbursement.

If you requested to begin the performance of services during the withdrawal period, you shall pay us an amount which is in proportion to what has been provided until you have communicated to us your withdrawal from this contract, in comparison with the full coverage of the contract.


3. Model withdrawal form

If you wish to withdraw from the contract, please complete this form and return it to:

${env.COMPANY.NAME || '[Name of the provider]'}
${env.COMPANY.ADDRESS || '[Address of the provider]'}
${env.CONTACT_EMAIL || '[Email address of the provider]'}

I/We (*) hereby give notice that I/We (*) withdraw from my/our (*) contract for the provision of the following service (*)

Ordered on (*) / received on (*)

Name of consumer(s)

Address of consumer(s)

Signature of consumer(s) (only if this form is notified on paper)

Date

(*) Delete as appropriate.
    `,
  },
  fr: {
    TITLE: 'Droit de rétractation',
    CONTENT: `
Cette information s’adresse aux consommateurs au sens du § 13 du Code civil allemand (BGB).


1. Exclusion du droit de rétractation pour les contrats de location de véhicules

Conformément au § 312g al. 2 n° 9 BGB, il n’existe pas de droit de rétractation légal pour les contrats de prestation de services liés à la location de véhicules automobiles conclus pour une date ou une période d’exécution déterminée.

Étant donné que toute réservation effectuée via ${env.WEBSITE_NAME} indique une date de prise en charge et de restitution précise, votre réservation relève de cette exception. Une rétractation légale de la réservation n’est donc pas prévue.

Nos conditions contractuelles d’annulation s’appliquent indépendamment de ce qui précède. Vous les trouverez dans nos conditions d’utilisation. Vous pouvez annuler votre réservation conformément à ces conditions ; des frais peuvent s’appliquer selon le moment de l’annulation.


2. Droit de rétractation pour les autres contrats

Si vous concluez avec nous un contrat qui n’est pas couvert par l’exception ci-dessus, vous disposez d’un droit de rétractation dans les conditions suivantes.

Information sur la rétractation

Vous avez le droit de vous rétracter du présent contrat sans donner de motif dans un délai de quatorze jours. Le délai de rétractation est de quatorze jours à compter du jour de la conclusion du contrat.

Pour exercer votre droit de rétractation, vous devez nous informer de votre décision par une déclaration dénuée d’ambiguïté (par exemple une lettre envoyée par la poste ou un courrier électronique). Vous pouvez utiliser le modèle de formulaire de rétractation ci-dessous, sans que cela soit obligatoire.

Pour que le délai de rétractation soit respecté, il suffit que vous envoyiez votre communication relative à l’exercice du droit de rétractation avant l’expiration du délai.

Effets de la rétractation

En cas de rétractation, nous vous rembourserons tous les paiements reçus de vous, y compris les frais de livraison (à l’exception des frais supplémentaires découlant du choix d’un mode de livraison autre que le mode le moins coûteux proposé par nous), sans retard excessif et en tout état de cause au plus tard quatorze jours à compter du jour où nous sommes informés de votre décision de rétractation. Nous procéderons au remboursement en utilisant le même moyen de paiement que celui que vous avez utilisé pour la transaction initiale, sauf accord exprès contraire de votre part ; ce remboursement n’occasionnera aucun frais pour vous.

Si vous avez demandé que la prestation de services commence pendant le délai de rétractation, vous devrez nous payer un montant proportionnel à ce qui vous a été fourni jusqu’au moment où vous nous avez informés de votre rétractation, par rapport à l’ensemble des prestations prévues par le contrat.


3. Modèle de formulaire de rétractation

Si vous souhaitez vous rétracter du contrat, veuillez remplir ce formulaire et le renvoyer à :

${env.COMPANY.NAME || '[Nom du prestataire]'}
${env.COMPANY.ADDRESS || '[Adresse du prestataire]'}
${env.CONTACT_EMAIL || '[Adresse e-mail du prestataire]'}

Je/Nous (*) vous notifie/notifions (*) par la présente ma/notre (*) rétractation du contrat portant sur la prestation de services suivante (*)

Commandé le (*) / reçu le (*)

Nom du/des consommateur(s)

Adresse du/des consommateur(s)

Signature du/des consommateur(s) (uniquement en cas de notification sur papier)

Date

(*) Rayez la mention inutile.
    `,
  },
  es: {
    TITLE: 'Derecho de desistimiento',
    CONTENT: `
Esta información va dirigida a los consumidores en el sentido del § 13 del Código Civil alemán (BGB).


1. Exclusión del derecho de desistimiento en los contratos de alquiler de vehículos

Conforme al § 312g apdo. 2 n.º 9 BGB, no existe derecho legal de desistimiento en los contratos de prestación de servicios relacionados con el alquiler de vehículos a motor que se celebren para una fecha o un periodo de ejecución determinados.

Dado que toda reserva realizada a través de ${env.WEBSITE_NAME} indica una fecha concreta de recogida y devolución, su reserva se acoge a esta excepción. Por tanto, no procede el desistimiento legal de la reserva.

Con independencia de lo anterior, se aplican nuestras condiciones contractuales de cancelación, que encontrará en las condiciones de uso. Puede cancelar su reserva conforme a dichas condiciones; según el momento de la cancelación, pueden aplicarse gastos.


2. Derecho de desistimiento en otros contratos

Si celebra con nosotros un contrato no cubierto por la excepción anterior, dispondrá de un derecho de desistimiento en los siguientes términos.

Información sobre el desistimiento

Tiene usted derecho a desistir del presente contrato en un plazo de catorce días sin necesidad de justificación. El plazo de desistimiento expirará a los catorce días del día de la celebración del contrato.

Para ejercer el derecho de desistimiento, deberá usted notificarnos su decisión de desistir del contrato a través de una declaración inequívoca (por ejemplo, una carta enviada por correo postal o un correo electrónico). Podrá utilizar el modelo de formulario de desistimiento que figura a continuación, aunque su uso no es obligatorio.

Para cumplir el plazo de desistimiento, basta con que la comunicación relativa al ejercicio por su parte de este derecho sea enviada antes de que venza el plazo correspondiente.

Consecuencias del desistimiento

En caso de desistimiento por su parte, le devolveremos todos los pagos recibidos de usted, incluidos los gastos de entrega (con la excepción de los gastos adicionales resultantes de la elección por su parte de una modalidad de entrega diferente a la modalidad menos costosa de entrega ordinaria que ofrezcamos), sin ninguna demora indebida y, en todo caso, a más tardar catorce días naturales a partir de la fecha en la que se nos informe de su decisión de desistir del presente contrato. Procederemos a efectuar dicho reembolso utilizando el mismo medio de pago empleado por usted para la transacción inicial, a no ser que haya usted dispuesto expresamente lo contrario; en todo caso, no incurrirá en ningún gasto como consecuencia del reembolso.

En caso de que usted haya solicitado que la prestación de servicios dé comienzo durante el periodo de desistimiento, nos abonará un importe proporcional a la parte ya prestada del servicio en el momento en que nos haya comunicado su desistimiento, en relación con el objeto total del contrato.


3. Modelo de formulario de desistimiento

Si desea desistir del contrato, cumplimente este formulario y envíelo a:

${env.COMPANY.NAME || '[Nombre del prestador]'}
${env.COMPANY.ADDRESS || '[Dirección del prestador]'}
${env.CONTACT_EMAIL || '[Correo electrónico del prestador]'}

Por la presente le comunico/comunicamos (*) que desisto de mi/desistimos de nuestro (*) contrato de prestación del siguiente servicio (*)

Pedido el (*) / recibido el (*)

Nombre del consumidor o de los consumidores

Domicilio del consumidor o de los consumidores

Firma del consumidor o de los consumidores (solo si el presente formulario se presenta en papel)

Fecha

(*) Táchese lo que no proceda.
    `,
  },
})

langHelper.setLanguage(strings)
export { strings }
