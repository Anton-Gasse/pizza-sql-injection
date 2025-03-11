# Definition
"The essence of hacking is finding unintended or overlooked uses for the laws and properties of a given situation and then applying them in new and inventive ways to solve a problem - whatever it may be." (Erickson, 2008, S. 1)

# Arten von Hackern
1. Black-Hats/Cracker: Hacker, die ohne Erlaubnis für ihre eigene Bereicherung illegal hacken. (Conrad, 2016)
2. White-Hats: Hacker, die mit Erlaubnis hacken, um Schwachstellen zu finden und Angriffe abzuwehren bzw. die Sicherheit von Systemen zu verbessern. (Conrad, 2016; Krebschull, 2023)
3. Grey-Hats: Hacker, die zwar ohne Erlaubnis aber aus ethischen Gründen hacken. (Conrad, 2016)
4. Hacktivisten: Hacker, die aus politischer Motivation hacken, um Aufmerksamkeit zu erlangen. (Krebschull, 2023)
5. State-sponsored Hacker: Hacker, die im Auftrag von Staaten oder Regierungen hacken. (Krebschull, 2023)
6. Script-Kiddies: Kriminelle, die nicht über die notwendigen Kenntnisse verfügen und lediglich die Werkzeuge von qualifizierten Hackern benutzen. (Krebschull, 2023)

# Funktionsweise
## Angriffsformen
Angriffe lassen sich nach ihrem Zweck unterteilen:

1. Angriffe auf die Vertraulichkeit: Erlangen von Zugang zu vertraulichen Informationen
2. Angriffe auf die Integrität: Veränderung von Daten und Softwaresystemen
3. Angriffe auf die Verfügbarkeit: "Störung des Betriebes von Informationssystemen [...]" (BSI, 2022, S. 29)

(BSI, 2022)

## Angriffsphasen
Ein Angriff lässt sich in drei Phasen einteilen:

1. Vulnerability: Finden einer Schwachstelle in Softwaresystemen oder einer Organisation
2. Exploit: Ausnutzen der gefunden Schwachstelle
3. Payload: Ausführen von Schadprogrammen oder Zugriff und Download von Daten

(Neumann, 2019)

## Angriffsmethoden
### Physische Angriffe
Bei physischen Angriffen verschaffen sich Angreifer physischen Zugang zu der Hardware und den Gebäuden des Zieles. Dies ermöglicht zum Einen die Zerstörung oder den Diebstahl der Hardware. Zum Anderen aber auch "dumpster jumping". Dabei wird der Müll nach vertraulichen Informationen wie Passwörtern durchsucht.

(Beißel, 2019; Kumar & Agarwal, 2018)

### Social Engineering
Beim Social Engineering wird der Mensch als Schwachstelle ausgenutzt. Dabei nutzen Angreifer menschliche Eigenschaften, wie Vertrauen, Neugier, Angst oder Gier aus, um einen Nutzer dazu zu bewegen eine bestimmte Aktion auszuführen oder Informationen preiszugeben. Oft wird ein zusätzlicher Druck aufgebaut und zum Beispiel sehr knappe Fristen gesetzt. All dies zielt auf die psychologische Beeinflussung der Nutzer ab, sodass diesen erschwert wird genau über die Nachricht nachzudenken. Social Engineering kann per Telefon, E-Mail, oder auch in Person durchgeführt werden.

Die bekannteste Form von Social Engineering ist Phishing. Dabei wird ein Nutzer in einer E-Mail dazu verleitet eine Webseite zu öffnen (und dort Informationen, wie Zugangsdaten einzugeben) oder einen Anhang zu öffnen. Beim Spear-Phishing handelt es sich um gezielte Phishing-Angriffen, wo individuelle Informationen in die Nachricht eingebaut werden. Dies erhöht die Authentizität deutlich.

(Beißel, 2019)

### Technische Angriffe
Technische Angriffe umfassen das Ausnutzen von technischen Schwachstellen und die Verwendung von Schadprogrammen.

#### Cross-Site-Scripting (XSS)
Beim Cross-Site-Scripting wird "[...] Code aus einem wenig vertrauenswürdingen Kontext in einen vertrauenswürdigen Kontext übertragen [...]" (Krebschull, 2023, S. 73). Dabei handelt es sich meist um JavaScript-Code, der in Eingabefeldern eingegeben, vom Server gespeichert und beim Aufruf der Webseite auf den Clientrechner anderer Nutzer übertragen wird. Wird die Nutzereingabe nicht richtig behandelt kann es zur Ausführung des JavaScript-Codes auf den Clientrechnern anderer Nutzer kommen. Dadurch lassen sich Cookies auslesen oder modifizieren, Webseiteninhalte modifizieren oder Phishingangriffe realisieren.

(Krebschull, 2023)

#### SQL-Injection
Bei SQL-Injections wird in Benutzereingaben SQL-Code eingeschleust, um die Datenbankabfrage, welche die Benutzereingabe verwendet zu verändern oder eigene Befehle auszuführen. Dies ist dann möglich, wenn die die Datenbankabfrage als Konkatenation von String-Variablen implementiert ist und die Benutzereingabe ohne Überprüfung eingefügt wird.

Um in diesem Fall SQL-Code einzuschleusen, muss zunächst die Benutzereingabe bei zum Beispiel einem String mit `'` geschlossen werden. Anschließend kann der Befehl durch zum Beispiel zusätzliche Bedingungen erweitert werden oder mit `;` abgeschlossen werden und ein weiterer Befehl angehangen werden. Zum Schluss muss mit dem Kommentarsymbol `--` die nachfolgenden Zeichen ignoriert werden, um einen validen SQL-Befehl zu konstruieren.

Dadurch können Angreifer nicht nur `SELECT`-Abfragen verändern oder mit `SELECT`, `UPDATE` und `DELETE` Daten verändern und löschen, sondern im schlimmsten Fall auch neue Benutzer anlegen und Passwörter ändern.

(Krebschull, 2023)

#### Malware
"Schadsoftware ist ein Oberbegriff für sämtliche Software, die (aus Sicht des Anwenders) unerwünschte Aktionen ausführt, und damit dem Anwender bzw seinen Informationen oder seinem System schadet" (Beißel, 2019, S. 30). Schadsoftware kann dabei zunächst nach Art der Verbreitung unterschieden werden:

1. Viren: Schadsoftware, die erst bei Ausführung aktiv wird
2. Würmer: Schadsoftware, die selbstständig aktiv wird und sich auch selbstständig verbreitet
3. Trojaner: Schadsoftware, die in scheinbar unschädlichen Programmen versteckt werden

Zudem kann man Schadsoftware nach ihrem Zweck unterteilen:
1. Ransomware: Schadsoftware, die Dateien verschlüsselt und für deren Freigabe ein Lösegeld verlangt wird
2. Spyware: Schadsoftware, die das Nutzerverhalten aufzeichnet
3. Grayware: Schadsoftware, die unnötige Rechenleistung beansprucht

(Beißel, 2019)

#### Denial-of-Service-Atttacken
Denial-of-Service-Attacken (DoS) greifen die Verfügbarkeit eines Systems an und versuchen einen Dienst zu überlasten und damit die Funktionsfähigkeit eines Dienstes einzuschränken. DoS-Attacken werden für Erpressung verwendet, können aber auch politisch oder aktivistisch motiviert sein.

Bei einer DoS-Attacke wird der angegriffene Webserver mit vielen Anfragen zum Überlaufen gebracht, sodass normale Anfragen nur noch sehr langsam oder gar nicht mehr verarbeitet werden können.
Werden diese Anfragen von mehreren Geräten gleichzeitig gesendet, wird dies als Distributed-Denial-of-Service-Attacke (DDoS) bezeichnet.

(Krebschull, 2023)

# Quellen
[1] Erickson, J. (2008). Hacking: The Art of Exploitation (2. Aufl.). No Starch Press.

[2] Conrad, S. (2016). Sind alle Hacker Kriminelle?. Emsisoft. Abgerufen am 04.03.2025 von https://www.emsisoft.com/de/blog/23442/sind-alle-hacker-kriminelle/

[3] Krebschull, U. (2023). Computer Hacking: Eine Einführung zur Verbesserung der Computersicherheit in komplexen IT-Infrastrukturen. Springer. https://doi.org/10.1007/978-3-662-67030-9

[4] Leitfaden zur Reaktion auf IT-Sicherheitsvorfälle für Vorfall-Praktiker und Vorfall-Experten. (2022). Bundesamt für Sicherheit in der Informationstechnik. Abgerufen am 04.03.2025 von https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/CSN/Leitfaden_VP_VE.pdf?__blob=publicationFile&v=21

[5] Neumann, L. (2019). Wie Hacker hacken (und möglichst nicht mich). TINCON. Abgerufen am 04.03.2025 von https://tincon.org/event/berlin19/wie-hacker-hacken-und-mich-moeglichst-nicht

[6] Beißel, S. (2019). Security Awareness: Grundlagen, Maßnahmen und Programme für die Informationssicherheit. De Gruyter Oldenbourg. https://doi.org/10.1515/9783110668261

[7] Kumar, S. & Agarwal, D. (2018). Hacking Attacks, Methods, Techniques And Their Protection Measures. International Journal of Advance Research in Computer Science and Management. Abegrufen am 04.03.2025 von https://www.researchgate.net/profile/Sunil-Kumar-310/publication/324860675_Hacking_Attacks_Methods_Techniques_And_Their_Protection_Measures/links/5ae7ea5ca6fdcc03cd8dbf8f/Hacking-Attacks-Methods-Techniques-And-Their-Protection-Measures.pdf
