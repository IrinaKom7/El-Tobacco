window.onload = function()
{
    const inputWindow = document.getElementById('inputWindow');
    let calc_history = document.getElementById('inputWicalc_historyndow')

    const btn_calc = document.getElementById('btn_calc');
    btn_calc.addEventListener('click', fillFiels);

    const btn_clr = document.getElementById('btn_clr');
    btn_clr.addEventListener('click', fnc_clear_history);

}
const dict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"%&\'*+-./_,:;=<>?';

function mrp2rub(mrp) {
    sum = 0
    for(let i = 0; i < 4; i++) {
        sum += dict.indexOf(mrp[i]) * Math.pow(80,3 - i);
    }
    return (sum / 100).toFixed(2);
}

function fillFiels(dm) {
    dm = inputWindow.value;
    dm_parsed = parsePacks(dm);
    calc_history.value += 'gtin: ' + dm_parsed.gtin + '\n' + 'serial: ' + dm_parsed.serial + '\n' +
        'mrp: ' + dm_parsed.mrp + '\n' + 'crypto: ' + dm_parsed.crypto + '\n' + '--------------\n';
}

function parsePacks(dm) {
    res = {};
    res['gtin'] = dm.slice(0,14)
    res['serial'] = dm.slice(14,21)
    mrp = dm.slice(21,25);
    res['mrp'] = mrp + ' (' + mrp2rub(mrp) + ')'
    res['crypto'] = dm.slice(25,29)

    return res;
}

function fnc_clear_history() {
    calc_history.value = '';
}