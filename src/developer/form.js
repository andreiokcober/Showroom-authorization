export class Form {
    constructor(form,controls){
        this.form = form
        this.controls = controls
    }
    value(){
      const value  = {}
      Object.keys(this.controls).forEach((control)=>{
        value[control] = this.form[control].value
      })
      return value
    }

    isValid(){
        let isFormValid = true

        Object.keys(this.controls).forEach((control)=>{
            const validators = this.controls[control]
            let isValid = true
                validators.forEach(validator=>{
                    isValid = validator(this.form[control].value) && isValid
                   
                })
                if(isValid){
                    clearFormControl(this.form[control])
                }
                else{
                    
                }
                isFormValid = isFormValid && isValid
        })
        return isFormValid
    }
}

function clearFormControl($control){
    $control.value = ''
}   