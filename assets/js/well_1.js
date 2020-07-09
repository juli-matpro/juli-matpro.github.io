/**
 * Well Class
 * Makes Use of Some Helper Functions  (helpers.js)
 * 
 */

class Well {

    static wellInputs = new Array(
        'feas',
        'rfac',
        'pias'
    );
    
    static MIN_PIAS = 10;
    static MIN_FEAS = 1;
    static MAX_RFAC = 0.6;
    static MIN_DEFECTS = 1;
    static WELLS_LAYTOUT_ID = "wells";

    constructor(id, feas, rfac, pias) {
        this.id = id;
        this.feas = feas;
        this.rfac = rfac;
        this.pias = pias;
      
        _id(Well.WELLS_LAYTOUT_ID).innerHTML +=
        `<div class="well" data-wellid="${id}">
            <h3 style="margin-bottom:10px;">Well ${id}</h3>
            <div class="flex flex-3">
                <article>
                    FE(A/S)<input name="feas" placeholder="" value="${feas}" type="text" required disabled/>
                </article>
                <article>
                    R-Factor<input name="rfac" placeholder="" value="${rfac}" type="text" required disabled/>
                </article>
                <article>
                    S-Factor<input name="pias" placeholder="" value="${pias}" type="text" required disabled/>
                </article>
            </div><br>
        </div>`
      ;
    }

    get defects() {
        let defects = 0;
        if(this.pias < Well.MIN_PIAS) {
            defects++;
        }
        if(this.feas < Well.MIN_FEAS) {
            defects++;
        }
        if(this.rfac < Well.MAX_RFAC) {
            defects++;
        }
        return defects;
    }

    isQualified() {
        if(this.defects > Well.MIN_DEFECTS) {
            return false;
        }
        return true;
    }

    hasDefects() {
        if(this.defects > 0) {return true;}
        return false;
    }

    static indexOfMaxWell(wells) {
        if (wells.length === 0) {
            return -1;
        }

        var max = wells[0].pias;
        var maxIndex = 0;

        for (var i = 1; i < wells.length; i++) {
            if (wells[i].pias > max) {
                maxIndex = i;
                max = wells[i].pias;
            }
        }
        return maxIndex;
    }

    static createWell() {
        return new Well(
            _id('submitwell').getAttribute('data-wellid'),
            _id('feas').value,
            _id('rfac').value,
            _id('pias').value
            );
    }
}