# Getter und Setter in JavaScript
## siehe auch:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set

## Übung
1. index.html öffnen
2. mit F5 starten (Chrome)
3. index.js öffnen
4. in Zeile 28 mit F9 einen Breapoint setzen
5. in Chrome index.html mit F5 refreshen
6. in VS Code Quellcode mit F11 durchsteppen

## Clous
- in index.js Zeile 33 wird im Prinzip nur der Wert der Eigenschaft "attr2" gesetzt. In Wirklichkeit wird aber die Methode resp. der Setter "set attr2" aufgerufen.
- in index.js Zeile 36 ist es ähnlich. Im Prinzip wird nur der Wert der Eigenschaft "attr2" abgerufen resp. gelesen. In Wirklichkeit wird aber die Methode resp. der Getter "get attr2" aufgerufen.
- MERKE: der Setter wird nur aufgerufen, wenn der Name der Eigenschaft links vom Gleichheitszeichen steht. In allen anderen Fällen wird der Getter aufgerufen.

