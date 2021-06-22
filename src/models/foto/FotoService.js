export default class FotoService {

    constructor(resource) {
        this._resource = resource('v1/fotos{/id}');
    }

    lista() {
        return this._resource
            .query()
            .catch(e => {
                console.log(e)
                throw new Error('Não foi possível carregar as fotos!');
                
            })
    }

    cadastra(foto) {

        if(foto._id) {
            return this._resource.update({id:foto._id}, foto);
        } else {
            return this._resource
                .save(foto);
        }

        
    }

    busca(id) {
        return this._resource.get({id});
    }


    apaga(id) {
        return this._resource.delete({id})
        .catch(e => {
            console.log(e)
            throw new Error('Não foi possível remover a foto!');
            
        });
    }

}