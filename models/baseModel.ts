export class baseModel{
    constructor(
        public pageIndex : number = 0,
        public pageSize : number = 20
    ){}
}

export class dtoBase<T>{
    constructor(
        public data : Array<T> = new Array<T>(),
        public count : number = 0
    ){}
}