import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Datenschutz = () => {
  return (
    <>
      <SEO
        title="Datenschutzerklärung – FokusDemenz | Radka Eder"
        description="Datenschutzerklärung von FokusDemenz – Informationen zur Erhebung und Verarbeitung personenbezogener Daten."
        canonical="/datenschutz"
      />
      <Header />
      <main id="main-content" className="min-h-screen bg-background">
        <section className="section-padding">
          <div className="container-narrow mx-auto max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">Datenschutzerklärung</h1>

            <div className="max-w-none text-muted-foreground space-y-6 leading-relaxed">
              {/* 1. Datenschutz auf einen Blick */}
              <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-3">1. Datenschutz auf einen Blick</h2>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
                wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
                werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
                aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Datenerfassung auf dieser Website</h3>

              <p className="font-semibold text-foreground">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem
                Impressum dieser Website entnehmen.
              </p>

              <p className="font-semibold text-foreground">Wie erfassen wir Ihre Daten?</p>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten
                handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p>
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme
                erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des
                Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>

              <p className="font-semibold text-foreground">Wofür nutzen wir Ihre Daten?</p>
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten
                können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>

              <p className="font-semibold text-foreground">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu
                verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit
                für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
                Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der
                zuständigen Aufsichtsbehörde zu.
              </p>
              <p>
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen
                Adresse an uns wenden.
              </p>

              {/* 2. Hosting */}
              <h2 className="text-xl font-display font-semibold text-foreground mt-10 mb-3">2. Hosting und Content Delivery Networks (CDN)</h2>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Externes Hosting</h3>
              <p>
                Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser
                Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.&nbsp;a. um
                IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe
                und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
              <p>
                Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden
                Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung
                unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
              <p>
                Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten
                erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
              </p>

              <p className="font-semibold text-foreground">Abschluss eines Vertrages über Auftragsverarbeitung</p>
              <p>
                Um die datenschutzkonforme Verarbeitung zu gewährleisten, haben wir einen Vertrag über Auftragsverarbeitung mit
                unserem Hoster geschlossen.
              </p>

              {/* 3. Allgemeine Hinweise */}
              <h2 className="text-xl font-display font-semibold text-foreground mt-10 mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h2>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Datenschutz</h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
                Datenschutzerklärung.
              </p>
              <p>
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind
                Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche
                Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>
              <p>
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B. bei der Kommunikation per E-Mail)
                Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Hinweis zur verantwortlichen Stelle</h3>
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <p>
                Radka Eder<br />
                Mühlbachgasse 25/3<br />
                4840 Vöcklabruck
              </p>
              <p>
                E-Mail:{" "}
                <a href="mailto:info@fokusdemenz.at" className="text-primary hover:underline">
                  info@fokusdemenz.at
                </a>
              </p>
              <p>
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die
                Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o.&nbsp;Ä.)
                entscheidet.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits
                erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die
                Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
              </h3>
              <p className="uppercase text-sm leading-relaxed">
                Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das
                Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen
                Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige
                Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie
                Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir
                können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten
                überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
                (Widerspruch nach Art. 21 Abs. 1 DSGVO).
              </p>
              <p className="uppercase text-sm leading-relaxed">
                Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit
                Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung
                einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie
                widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet
                (Widerspruch nach Art. 21 Abs. 2 DSGVO).
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
              <p>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde,
                insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des
                mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
                gerichtlicher Rechtsbehelfe.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Recht auf Datenübertragbarkeit</h3>
              <p>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
                automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu
                lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur,
                soweit es technisch machbar ist.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">SSL- bzw. TLS-Verschlüsselung</h3>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel
                Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine
                verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://"
                wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
              <p>
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von
                Dritten mitgelesen werden.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Auskunft, Löschung und Berichtigung</h3>
              <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über
                Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und
                ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
                personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Recht auf Einschränkung der Verarbeitung</h3>
              <p>
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können
                Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der
                Verarbeitung besteht in folgenden Fällen:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der
                  Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der
                  Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung
                  die Einschränkung der Datenverarbeitung verlangen.
                </li>
                <li>
                  Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder
                  Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der
                  Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und
                  unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das
                  Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </li>
              </ul>
              <p>
                Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer
                Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von
                Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen
                eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
              </p>

              {/* 4. Datenerfassung auf dieser Website */}
              <h2 className="text-xl font-display font-semibold text-foreground mt-10 mb-3">4. Datenerfassung auf dieser Website</h2>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Cookies</h3>
              <p>
                Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Textdateien und richten auf Ihrem
                Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder
                dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs
                automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder
                eine automatische Löschung durch Ihren Webbrowser erfolgt.
              </p>
              <p>
                Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite
                betreten (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des
                Drittunternehmens (z.&nbsp;B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
              </p>
              <p>
                Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte
                Webseitenfunktionen ohne diese nicht funktionieren würden (z.&nbsp;B. die Warenkorbfunktion oder die Anzeige von
                Videos). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.
              </p>
              <p>
                Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs (notwendige Cookies) oder zur
                Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (funktionale Cookies, z.&nbsp;B. für die
                Warenkorbfunktion) oder zur Optimierung der Webseite (z.&nbsp;B. Cookies zur Messung des Webpublikums) erforderlich
                sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage
                angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch
                fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies
                abgefragt wurde, erfolgt die Speicherung der betreffenden Cookies ausschließlich auf Grundlage dieser Einwilligung
                (Art. 6 Abs. 1 lit. a DSGVO); die Einwilligung ist jederzeit widerrufbar.
              </p>
              <p>
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im
                Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische
                Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die
                Funktionalität dieser Website eingeschränkt sein.
              </p>
              <p>
                Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hierüber im Rahmen
                dieser Datenschutzerklärung gesondert informieren und ggf. eine Einwilligung abfragen.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Cookie-Einwilligung mit Consent Manager Provider</h3>
              <p>
                Unsere Website nutzt die Cookie-Consent-Technologie von Consent Manager Provider, um Ihre Einwilligung zur
                Speicherung bestimmter Cookies auf Ihrem Endgerät einzuholen und diese datenschutzkonform zu dokumentieren. Anbieter
                dieser Technologie ist die Jaohawi AB, Håltegelvägen 1b, 72348 Västerås, Schweden, Webseite:{" "}
                <a
                  href="https://www.consentmanager.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://www.consentmanager.de
                </a>{" "}
                (im Folgenden „Consent Manager Provider").
              </p>
              <p>
                Wenn Sie unsere Website betreten, wird eine Verbindung zu den Servern von Consent Manager Provider hergestellt, um
                Ihre Einwilligungen und sonstigen Erklärungen zur Cookie-Nutzung einzuholen. Anschließend speichert Consent Manager
                Provider ein Cookie in Ihrem Browser, um Ihnen die erteilten Einwilligungen bzw. deren Widerruf zuordnen zu können.
                Die so erfassten Daten werden gespeichert, bis Sie uns zur Löschung auffordern, den
                Consent-Manager-Provider-Cookie selbst löschen oder der Zweck für die Datenspeicherung entfällt. Zwingende
                gesetzliche Aufbewahrungspflichten bleiben unberührt.
              </p>
              <p>
                Der Einsatz von Consent Manager Provider erfolgt, um die gesetzlich vorgeschriebenen Einwilligungen für den Einsatz
                von Cookies einzuholen. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 S. 1 lit. c DSGVO.
              </p>

              <p className="font-semibold text-foreground">Vertrag über Auftragsverarbeitung</p>
              <p>
                Wir haben einen Vertrag über Auftragsverarbeitung mit Consent Manager Provider geschlossen. Hierbei handelt es sich
                um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass Consent Manager Provider die
                personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO
                verarbeitet.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Server-Log-Dateien</h3>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr
                Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
              <p>
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
                berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen
                die Server-Log-Files erfasst werden.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive
                der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei
                uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
                Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen
                übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
                gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern
                diese abgefragt wurde.
              </p>
              <p>
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
                Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.&nbsp;B. nach
                abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere
                Aufbewahrungsfristen – bleiben unberührt.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Anfrage per E-Mail, Telefon oder Telefax</h3>
              <p>
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden
                personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und
                verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
                Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen
                übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
                gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern
                diese abgefragt wurde.
              </p>
              <p>
                Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern,
                Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.&nbsp;B. nach
                abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche
                Aufbewahrungsfristen – bleiben unberührt.
              </p>

              {/* 5. Plugins und Tools */}
              <h2 className="text-xl font-display font-semibold text-foreground mt-10 mb-3">5. Plugins und Tools</h2>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Google Web Fonts</h3>
              <p>
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google
                bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei
                nicht statt.
              </p>
              <p>
                Weitere Informationen zu Google Web Fonts finden Sie unter{" "}
                <a
                  href="https://developers.google.com/fonts/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  https://developers.google.com/fonts/faq
                </a>{" "}
                und in der Datenschutzerklärung von Google:{" "}
                <a
                  href="https://policies.google.com/privacy?hl=de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  https://policies.google.com/privacy?hl=de
                </a>
                .
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Google Maps</h3>
              <p>
                Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google"),
                Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p>
                Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen
                werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite
                hat keinen Einfluss auf diese Datenübertragung.
              </p>
              <p>
                Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an
                einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse
                im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
                Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit
                widerrufbar.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Datenschutz;
