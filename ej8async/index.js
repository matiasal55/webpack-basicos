import datos from './asyncall';

const mostrarPorLog = async () => {
    console.log(await datos());
};

mostrarPorLog();
