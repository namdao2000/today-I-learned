import {IModelObject} from "./IModelObject";

export class Post implements IModelObject{
    constructor(
        public _id: string,
        public text: string,
        public timestamp: number,
        public username: string
    ) {
    }

    public getJson() {
        return {
            _id: this._id,
            text: this.text,
            timestamp: this.timestamp,
            username: this.username
        }
    }
}
