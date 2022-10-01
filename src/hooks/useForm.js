import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations={}) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation]=useState({})

    useEffect(()=>{
        createValidators()
    },[formState])

    const isFormValid= useMemo(()=>{

        for(const formValue of Object.keys(formValidation)){
            if(formValidation[formValue] !== null) return false
        }
        
        return true
    }, [formValidation])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = ()=>{
        
        const formCheckedValues={}

        for (const formField of Object.keys(formValidations)) { //imprime los nombres de las propiedades del objeto formValidations
            const [fn, errorMessage] = formValidations[formField] //desestructuro la función y el mensaje basado en el formfield
            
            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage; //creo la propiedad con el valid = voy a preguntar del state los formfield para
        }                                              //mandar el value a la función. Si se cumple pasa la validación
            
        setFormValidation( formCheckedValues)

    

    }



    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid
    }
}