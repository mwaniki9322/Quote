export class Quote {
    showDescription:boolean;
    constructor(public name:string='',public author:string='',public quotify:string,
    public postDate:Date,public showUpvote:number,public showDownvote:number){
        this.showDescription=true;
}

}
