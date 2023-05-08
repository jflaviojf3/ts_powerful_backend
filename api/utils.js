
class Utils {

static formataData(data) {
    const ano = data.slice(0, 4);
    const mes = data.slice(4, 6);
    const dia = data.slice(6, 8);

    const dataFormatada = `${ano}-${mes}-${dia}`;
    console.log(dataFormatada)

    return dataFormatada
  }
}

module.exports = Utils;
