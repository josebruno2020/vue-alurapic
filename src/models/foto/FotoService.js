export default class FotoService {

    constructor(resource) {
        this._resource = resource('v1/fotos{/id}');
    }

    lista() {
        return this._resource
            .query()
    }

    cadastra(foto) {
        return this._resource
            .save(foto);
    }

    busca(id) {
        return this._resource.get({id});
    }


    apaga(id) {
        return this._resource.delete({id});
    }

}