const NAO_LIMPAR_TELA = false

export default class CalculadorModel {
    #valor: string
    #acumulador: number
    #limparTela: boolean
    #operacao: string

    constructor(valor: string = null, acumulador: number = null, operacao: string = null, limparTela = false){
        this.#valor = valor
        this.#acumulador = acumulador
        this.#limparTela = limparTela
        this.#operacao = operacao
    }

    get valor(){
        return this.#valor?.replace('.',',') || '0'
    }

    numeroDigitado(novoValor: string){
        return new CalculadorModel(
            null,
            this.#acumulador,
            this.#operacao,
            NAO_LIMPAR_TELA
        )
    }


}

const calc = new CalculadorModel()
calc.valor