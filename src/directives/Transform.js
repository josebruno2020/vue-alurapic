import Vue from 'vue';

Vue.directive('meu-transform', {
    bind(el, binding) {
        let current = 0;
        el.addEventListener('dblclick', () => {
            let incremento = binding.value ? binding.value : 90;
            let efeito;

            if(binding.modifiers.animate) {
                el.style.transition = 'all 1s';
            }
            
            if(!binding.arg || binding.arg == 'rotate') {
                if(binding.modifiers.reverse) {
                    current-=incremento;
                } else {
                    current+=incremento;
                }

                efeito = `rotate(${current}deg)`;

            } else if(binding.arg ==  'scale') {
                efeito = `scale(${incremento})`;
            }
            
            el.style.transform = efeito;
        })
    }
});