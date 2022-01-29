<script lang="ts">
    import Botao from "./botao.svelte";
    import Linha from "./Linha.svelte";
    import Tela from "./Tela.svelte";

    let obj = {valor: '0'}

    function numeroDigitado(numero: string ) {
        obj.valor += numero
    }

</script>

<div class="calculadora">
    <Tela valor={obj.valor}/>

    <Linha>
        <Botao destaque triplo texto="AC" />
        <Botao operacao texto="/" />
    </Linha>
    <Linha>
        <Botao texto="7" onClick={numeroDigitado}/>
        <Botao texto="8" onClick={numeroDigitado}/>
        <Botao texto="9" onClick={numeroDigitado}/>
        <Botao operacao texto="*" />
    </Linha>
    <Linha>
        <Botao texto="4" />
        <Botao texto="5" />
        <Botao texto="6" />
        <Botao operacao texto="+" />
    </Linha>
    <Linha>
        <Botao texto="1" />
        <Botao texto="2" />
        <Botao texto="3" />
        <Botao operacao texto="-" />
    </Linha>
    <Linha>
        <Botao duplo texto="0" />
        <Botao texto="," />
        <Botao destaque texto="=" />
    </Linha>
</div>

<style>
    .calculadora {
        background-color: var(--cor-fundo);
        padding: 10px;
        border-radius: 8px;
        height: 220px;
        width: 150px;
        display: flex;
        flex-direction: column;
    }

    

</style>
