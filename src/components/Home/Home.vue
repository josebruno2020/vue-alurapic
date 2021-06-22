<template>
    <div>
        <h1 class="text-centralizado">
            Alura Pic
        </h1>
        <h3 class="text-centralizado">Single Page Application</h3>
        <input type="search" v-model="filtro" name="" class="filtro" placeholder="Filtre pelo titulo" id="" autofocus>
        <div class="alert" v-show="msg">{{msg}}</div>
        <ul class="lista">
            <li class="foto-lista" v-for="foto in fotosComFiltro" :key="foto.id">
                <painel :titulo="foto.titulo">
                    <imagem v-meu-transform:scale.animate="1.2" :titulo="foto.titulo" :url="foto.url"></imagem>
                    <router-link :to="{name:'Altera', params:{id:foto._id}}">
                        <meu-botao
                            rotulo="Alterar"
                            tipo="button"
                        >

                        </meu-botao>
                    </router-link>
                    <meu-botao 
                        @clica="remove(foto)" 
                        tipo="button" 
                        rotulo="remover" 
                        :confirmacao="true"
                        estilo="perigo"
                    ></meu-botao>
                </painel>
            </li>
        </ul>
        
    </div>
</template>

<script>
import BotaoVue from '../shared/botao/Botao.vue';
import ImageResponsiveVue from '../shared/imagem-responsive/ImageResponsive.vue';
import PainelVue from '../shared/painel/Painel.vue';
import FotoService from '../../models/foto/FotoService';

export default {
    name: 'App',
    data() {
        return {
            fotos: [],
            filtro:'',
            msg:'',
            resource:null,
            service: new FotoService(this.$resource)
        }
    },
    components: {
        'painel':PainelVue,
        'imagem': ImageResponsiveVue,
        'meu-botao':BotaoVue
    },
    computed: {
        fotosComFiltro() {
            if(this.filtro.length > 0) {
                let exp = new RegExp(this.filtro.trim(), 'i');
                return this.fotos.filter(foto => exp.test(foto.titulo));
            } else {
                return this.fotos;
            }
        }
    },
    created() {
        this.service
            .lista()
            .then(res =>this.fotos = res.body)
            .catch(e => {
                this.msg = e.message;
                console.log(e)
            })
    },

    methods: {
        remove(foto) {
            this.service.apaga(foto._id)
            .then(() => {
                let indice = this.fotos.indexOf(foto);
                this.fotos.splice(indice, 1);
                this.msg = 'Foto removida com sucesso!';
            })
            .catch(e => {
                this.msg = e.message;
                console.log(e);
            })
            
        }
    }
}
</script>

<style>
.text-centralizado {
    text-align: center;
}

.lista {
    display: flex;
    flex-wrap: wrap;

}

.foto-lista{
    list-style: none;
    padding: 15px;
}
.filtro {
    padding: 10px;
    display: block;
    width: 20%;
}

.alert {
    padding:25px 0;
    color: brown;
    font-size: 20px;
}

</style>
