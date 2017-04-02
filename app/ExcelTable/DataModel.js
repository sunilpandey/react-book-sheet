export class DataModel {
    constructor(headers, data) {
        this._headers  = headers;
        this._data = data;
    }

    headers() {
        return this._headers;
    }

    data() {
        return this._data;
    }
}

export default class BookDataModel extends DataModel {
    constructor(data) { 
        super([], data);
        this._headers = ['Book', 'Author', 'Language', 'Published', 'Sales'];
    }
}

