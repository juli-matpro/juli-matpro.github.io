/**
 * Well Class
 * Makes Use of Some Helper Functions  (helpers.js)
 * 
 */

class Well {

    static wellInputs = [
        'feas',
        'rfac',
        'pias',
        'sr',
        'gpl',
        'gpi',
        'pi',
        'wdi',
        'mi',
        'alr',
        'aod',
        'lwi',
        'cpi',
        'whr',
    ];


    static MIN_PIAS = 10;
    static MIN_FEAS = 1;
    static MAX_RFAC = 0.6;
    static MIN_DEFECTS = 1;
    static WELLS_LAYOUT_ID = "wells";

    constructor(id, feas, rfac, pias, sr, gpl, gpi, pi, wdi, mi, alr, aod, lwi, cpi, whr) {
        this.id = id;
        this.feas = feas;
        this.rfac = rfac;
        this.pias = pias;
        this.sr = sr;
        this.gpl = gpl;
        this.gpi = gpi;
        this.pi = pi;
        this.wdi = wdi;
        this.mi = mi;
        this.alr = alr;
        this.aod = aod;
        this.lwi = lwi;
        this.cpi = cpi;
        this.whr = whr;

        _id(Well.WELLS_LAYOUT_ID).innerHTML +=
        `<div class="well" data-wellid="${id}">
            <h3 style="margin-bottom:10px;">Well ${id}</h3>
            <div class="flex flex-4">
                <article>
                    FE(A/S)<input name="feas" placeholder="" value="${feas}" type="text" required disabled/>
                </article>
                <article>
                    R-Factor<input name="rfac" placeholder="" value="${rfac}" type="text" required disabled/>
                </article>
                <article>
                    PI(A/S)<input name="pias" placeholder="" value="${pias}" type="text" required disabled/>
                </article>
                <article>
                SR(Simulation Ratio)<input name="sr"  value="${sr}" type="text" required disabled/>
                </article>
                <article>
                a(Gravel pack linear)<input name="gpl"  value="${gpl}" type="text" required  disabled/>
                </article>
                <article>
                g(Gravel pack index)<input name="gpi" value="${gpi}" type="text" required disabled/>
                </article>
                <article>
                p(Packer index)<input name="pi" value="${pi}" type="text" required  disabled/>
                </article>
                <article>
                d(Workover depth index)<input name="wdi"  value="${wdi}" type="text" required  disabled/>
                </article>
                <article>
                m(Mandrel index)<input name="mi" value="${mi}" type="text" required disabled/>
                </article>
                <article>
                r(Age of last re-entry)<input name="alr" value="${alr}" type="text" required  disabled/>
                </article>
                <article>
                x(Age of deviation)<input name="aod" value="${aod}" type="text" required disabled/>
                </article>
                <article>
                t(Lost wireline index)<input name="lwi" value="${lwi}" type="text" required  disabled/>
                </article>
                <article>
                c(Casing patch index)<input name="cpi" value="${cpi}" type="text" required disabled/>
                </article>
                <article>
                w(Well head repair index)<input name="whr" value="${whr}" type="text" required disabled/>
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

    get cof() {
        return ((10 * this.gpl) + (9 * this.gpi) + (8 * this.pi) + (7 * this.wdi) + (6 * this.mi) + (5 * this.alr) + (4 * this.alr) + (3 * this.lwi) + (2 * this.cpi) + (this.whr));
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

        let max = wells[0].pias;
        let maxIndex = 0;

        for (let i = 1; i < wells.length; i++) {
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
            _id('pias').value,
            _id('sr').value,
            _id('gpl').value,
            _id('gpi').value,
            _id('pi').value,
            _id('wdi').value,
            _id('mi').value,
            _id('alr').value,
            _id('aod').value,
            _id('lwi').value,
            _id('cpi').value,
            _id('whr').value
            );
    }

}