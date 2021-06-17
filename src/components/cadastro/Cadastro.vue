<template>
    <div>
    <h1 class="centralizado">Nova Foto</h1>
    <h2 class="centralizado"></h2>

    <form @submit.prevent="submit">
        <div class="controle">
            <label for="titulo">Título:</label>
            <input id="titulo" autocomplete="off" v-model.lazy="foto.titulo" autofocus>
        </div>
        
        <div class="controle">
            <label for="url">URL</label>
            <!-- Lazy = onblur mais ou menos  -->
            <input id="url" autocomplete="off" v-model.lazy="foto.url">
            <imagem-responsiva v-show="foto.url" :url="foto.url" :titulo="foto.titulo"/>
        </div>

        <div class="controle">
            <label for="descricao">DESCRIÇÃO</label>
            <textarea id="descricao" autocomplete="off" v-model="foto.descricao"></textarea>
        </div>

        <div class="centralizado">
            <meu-botao :confirmacao="false" rotulo="GRAVAR" tipo="submit"/>
            <router-link :to="{name: 'Home'}">
                <meu-botao :confirmacao="false" rotulo="VOLTAR" tipo="button"/>
            </router-link>
        </div>

    </form>
  </div>
</template>


<script>
import Botao from '../shared/botao/Botao.vue';
import ImageResponsiveVue from '../shared/imagem-responsive/ImageResponsive.vue';
import Foto from '../../models/foto/Foto';
import FotoService from '../../models/foto/FotoService';

export default {
    data() {
        return {
            foto: new Foto(),
            service:new FotoService(this.$resource),
            id:this.$route.params.id
        }
    },

    components: {

        'imagem-responsiva': ImageResponsiveVue, 
        'meu-botao': Botao
    },
    created() {
        this.resource = this.$resource('v1/fotos');
        if(this.id) {
            this.service.busca(this.id)
            .then(res => {
                console.log(res);
                this.foto = res.body
            })
            .catch(e => console.log(e));
        }
    },
    methods: {
        submit() {

            this.service
            .cadastra(this.foto)
            .then((res) => {
                console.log(res)
                this.foto = new Foto();
            })
            .catch(e => {
                console.log(e);
            })
        }
    }
}
</script>


<style scoped>
.centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }
</style>