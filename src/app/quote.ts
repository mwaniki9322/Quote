export class Quote {
    showDescription:boolean;
    constructor(public name:string='',public author:string='',public quotify:string,
    public postDate:Date){
        this.showDescription=true;
}

}
