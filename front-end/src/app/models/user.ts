import {IModelObject} from "./IModelObject";

export class User implements IModelObject{
    constructor(
        public _id: string,
        public username: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public role: string,
        public image: string) {
    }

    public getJson() {
        return {
            _id: this._id,
            username: this.username,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            role: this.role,
            image: this.image
        }
    }
}
