<template>
    <div>
        <h1 class="text-centralizado">
            Hola!
        </h1>
        <input type="search" v-model="filtro" name="" class="filtro" placeholder="Filtre pelo titulo" id="" autofocus>
        <div class="alert">{{msg}}</div>
        <ul class="lista">
            <li class="foto-lista" v-for="foto in fotosComFiltro" :key="foto.id">
                <painel :titulo="foto.titulo">
                    <imagem v-meu-transform:scale.animate="1.2" :titulo="foto.titulo" :url="foto.url"></imagem>
                    <meu-botao 
                        
                        @clica="remove(foto)" 
                        tipo="button" 
                        rotulo="remover" 
                        :confirmacao="false"
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

export default {
    name: 'App',
    data() {
        return {
            fotos: [],
            filtro:'',
            msg:''
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
        let request = this.$http.get('http://localhost:3000/v1/fotos');
        request.then((res) => {
            this.fotos = res.body
        })
        .catch(e => {
            this.msg = 'Não foi possível carregar as fotos!';
            console.log(e)
        })
    },

    methods: {
        remove(foto) {
            console.log(foto);
            
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
    display: block;
    width: 100%;
}

.alert {
    padding:25px 0;
    color: brown;
    font-size: 20px;
}

</style>
