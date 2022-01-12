class WithSetterAndGetter {
    constructor() {
        this.attr1= 0
        this.attr2= 0
    }

    // Java like setter
    setAttr1( value) {
        this.attr1= value*2
    }

    // Java like getter
    getAttr1() {
        return this.attr1
    }

    // Javascript like getter
    set attr2( value) {
        this._attr2= value* 2;
    }

    // Javascript like setter
    get attr2() {
        return this._attr2;
    }
}

var withSetterAndGetter= new WithSetterAndGetter()
withSetterAndGetter.setAttr1( 17);
console.log( withSetterAndGetter.getAttr1());

// Links vom Gleichheitszeichen wird der Setter aufgerufen
withSetterAndGetter.attr2= 18;

// In allen anderen Fällen wird der Getter aufgerufen
console.log( withSetterAndGetter.attr2);

