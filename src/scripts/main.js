AOS.init();

const dataDoEvento = new Date("Marc 6, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento= timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const HoraEmMs = 1000 * 60 * 60;
    const MinutoEmMs= 1000 * 60;
    const segundoEmMS = 1000;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / HoraEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % HoraEmMs) / MinutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % MinutoEmMs) / segundoEmMS);

    document.getElementById('contador').innerHTML= `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if(distanciaAteOEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML='Evento expirado'
    }
},1000)