import IValidator from "./IValidator";

class Max implements IValidator {

    constructor(private max : number) {
    }

    validate(data: any) {
        return {
            isValid : data.length <= this.max,
            additionalData : {
                max : this.max
            }
        }
    }

}

export default Max