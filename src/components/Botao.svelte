<script lang="ts">
    export let texto = "";
    export let triplo: boolean = false;
    export let duplo: boolean = false;
    export let operacao: boolean = false;
    export let destaque: boolean = false;

    //função que recebe uma string e não retorna nada
    export let onClick: (valor: string) => void = () => {}
   

</script>

<button class="botao" 
    on:click={()=> onClick(texto)}
    class:triplo class:duplo class:destaque class:operacao>
    {texto}
</button>

<style>
    .botao {
        margin: 0;
        border: 1px solid var(--cor-fundo);
        flex-basis: 25%;
        border-radius: 4px;
    }

    .triplo {
        flex-basis: 75%;
    }

    .duplo {
        flex-basis: 50%;
    }

    .destaque {
        background-color: red;
        color: white;
    }

    .operacao {
        background-color: orange;
        color: white;
    }



</style>
