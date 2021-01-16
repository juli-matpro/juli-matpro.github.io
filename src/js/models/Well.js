/**
 * Well Class
 *
 */

export default class Well {


    /**
     * Summary. Constructor Method
     *
     * Description. Boots up the Well Class by assigning all it's attributes
     *
     *
     * @param name
     * @param feas
     * @param rfac
     * @param pias
     * @param sr
     * @param gpl
     * @param gpi
     * @param pi
     * @param wdi
     * @param mi
     * @param alr
     * @param aod
     * @param lwi
     * @param cpi
     * @param whr
     * @param sc
     * @param lc
     * @param cac
     * @param op
     * @param months
     *
     * @return void Return value description.
     */
    constructor(name,feas, rfac, pias, sr, gpl, gpi, pi, wdi, mi, alr, aod, lwi, cpi, whr, sc, lc, cac, op, months) {
        this.name = name;
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
        this.sc = sc;
        this.lc = lc;
        this.cac = cac;
        this.op = op;
        this.months = months;

        // Define Static Properties of The Well Instance
        this.min_pias = 10;
        this.min_feas = 1;
        this.max_rfac = 0.6;
        this.min_defects = 1;
    }


    get totalRev() {
        let totalProduction = this.months.reduce(function (total, month) {
            return total + month.value;
        }, 0);
        return (totalProduction * this.op);
    }

    get totalCost() {
        return (this.sc + this.lc + this.cac);
    }

    get payBackPeriod() {
        return 'NaN';
    }

    get profitIndex() {
        return 'NaN';
    }

    get investReturn() {
        return 'NaN';
    }

    get npv() {
        return 'NaN';
    }

    get defects() {
        let defects = 0;
        if (this.pias < this.min_pias) {
            defects++;
        }
        if (this.feas < this.min_feas) {
            defects++;
        }
        if (this.rfac < this.max_rfac) {
            defects++;
        }
        return defects;
    }

    get cof() {
        return ((10 * this.gpl)
            + (9 * this.gpi)
            + (8 * this.pi)
            + (7 * this.wdi)
            + (6 * this.mi)
            + (5 * this.alr)
            + (4 * this.aod)
            + (3 * this.lwi)
            + (2 * this.cpi)
            + (this.whr));
    }

    isQualified() {
        return this.defects <= this.min_defects;
    }

    hasDefects() {
        return this.defects > 0;
    }

    reset() {

    }

}