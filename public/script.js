// Calculadora do Tarifa Zero: quanto o passageiro pagaria sem o cadastro.
(function () {
    var trips = document.getElementById('trips');
    var fare = document.getElementById('fare');
    var monthly = document.getElementById('monthly');
    var yearly = document.getElementById('yearly');
    if (!trips || !fare) return;

    var brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

    function update() {
        var t = Math.max(0, parseFloat(trips.value) || 0);
        var f = Math.max(0, parseFloat(fare.value) || 0);
        var year = t * f * 52;
        yearly.textContent = brl.format(year);
        monthly.textContent = brl.format(year / 12);
    }

    trips.addEventListener('input', update);
    fare.addEventListener('input', update);
    update();
})();
