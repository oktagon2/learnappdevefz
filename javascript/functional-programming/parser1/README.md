# Parser 1
Dieses Projekt realisiert einen Parser, welcher einfache Rechnungen parsen und evaluieren kann.
Dabei werden Methoden der Funktionalen Programmierung genutzt.

## Status
Der Parser ist in einer ersten Version fertig.
Man müsste jetzt noch die Robustheit bei fehlerhaften Expressions wie '9*' oder '9*/9' etc. prüfen.

## Wartungsdokumentation

### Konzepte

#### Funktionsprinzip
Der Parser arbeitet rekursiv. 

Generell wird probiert im Ausdruck eine Operation zu erkennen und diese auszuwerten.
Gibt es im Ausdruck z.B. ein Plus-Zeichen, so handelt es sich offenbar um eine Addition von zwei Teilausdrücken.
Der erste Teilausdruck ist 'alles' links vom Plus-Zeichen und der zweite Teilausdruck ist 'alles' rechts vom Plus-Zeichen.
Man muss jetzt zuerst die beiden Teilausdrücke auswerten und die dann zusammenzählen. Dann hat man das Ergebnis.
Um die Teilausdrücke auszuwerten, kann wieder der Parser verwendet werden (Rekursion!). 
Das Ergebnis der Probe im Ausdruck eine Operation zu erkennen und diese auszuwerten wird in einer Instanz der Klasse EvaluationResult gespeichert.

Der Parser probiert jetzt die Opertaionen in folgender Reihenfolge zu erkennen und auszuwerten:
Addition, Subtraktion, Multiplikation, Division
Durch diese Reihenfolge werden am Schluss die Punktrechnungen vor den Strichrechnungen ausgeführt, was dem gängigen Standard entspricht.
Ist die Expression keine dieser Operationen propiert der Parser die Expression noch als Literal d.h. als Zahl zu parsen.

#### Class Parser1
Diese Klasse enthält den ganzen Parser

#### Class EvaluationResult
In dieser Klasse kann das Resultat einer Evaluation festgehalten werden
Attribute:
* Succeeded
    * true: Die Evaluation des Ausdrucks war erfolgreich
    * false: Die Evaluation des Ausdrucks war nicht erfolgreich
* Result: Das Ergebnis der Evaluation, falls Succeeded=true ist
* Error: 
    * true: Beim Ausdruck wurde ein Fehler gefunden
    * false: Beim Ausdurck wurden keine Fehler gefunden

### Testfälle

#### Testfall 1
Aktion: Eval( '2*3+4*5-18/6')
Reaktion: console.log( '23');

#### Testfall 2
Aktion: Eval ( '15-3-4')
Reaktion: console.log( '8');
Bemerkung: Das funktioniert super, wenn man von hinten splittet! D.h man muss (15-3)-4 rechnen.
Fazit: Generell nicht von vorne, sondern von hinten splitten.


