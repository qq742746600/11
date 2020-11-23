import { baseModel, dtoBase } from '../baseModel';

export class companyQuery extends baseModel{
    constructor(
        public companyName : string = null,
        public id : number = 0,
    ){
        super()
    }
}

export class companyDto extends dtoBase<companyData>{
    constructor(
    ){
        super()
    }
}

export class companyData{
    constructor(
        public name : string = null

    ){}
}