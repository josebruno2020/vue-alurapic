<template>
    <button @click="clica" class="botao" :class="classeBotao" :type="tipo">{{ rotulo }}</button>
</template>

<script>
export default {
    name:'Botao',
    props:{
        tipo: {
            required:true,
            type: String
        },
        rotulo: {
            required: true,
            type: String
        },
        confirmacao: {
            required:false,
            type: Boolean
        },
        estilo: {
            require:false,
            type: String
        }
    },
    methods: {
        clica() {
            if(this.confirmacao) {
                if(confirm('Confirma operação?')) {
                    return this.$emit('clica');
                }
            }
        }
    },
    computed: {
        classeBotao() {
            if(this.estilo == 'perigo' ){
                return 'botao-perigo';
            } 

            return 'botao-padrao';
        }
    }

}
</script>

<style scoped>
.botao {
    display: inline-block;
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
    font-size: 1.2em;
    cursor: pointer;
    transition: all 0.2s;
}
.botao:hover {
    opacity: .9;
}

.botao-perigo {
    background: firebrick;
    color: white;
}

.botao-padrao {
    background: darkcyan;
    color: white;
}
</style>