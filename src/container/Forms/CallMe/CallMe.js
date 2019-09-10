import React, {useEffect } from 'react';
import classes from './CallMe.module.scss';

import {callMeElements} from "../../../data/forms";
import {createToken} from "../../../helper/createToken";
import Button, {button_type} from "../../../component/UI/Button/Button";
import CallMeForm from "./CallMeForm/CallMeForm";
import Spinner from "../../../component/UI/Spinner/Spinner";

import { getInitState } from '../../../hooks/Form/formAC';
import { getFormData, hasInputsError } from '../../../hooks/Form/helper';
import {useFeedBackForm, formActions} from "../../../hooks/Form/form";

        
const CallMe = ({url, hiddenFields, successOkButtonClickHandler}) => {

    const [
        formState, formDispatch,
        requestState, postRequest
    ] = useFeedBackForm(callMeElements, (elements) => { return getInitState(elements);});

    console.log("render ZCallMe ", formState, requestState);

    const validateOnSubmit = (formData) => {

        const name = formData.has('name') ? formData.get('name') : '';
        const email = formData.has('email') ? formData.get('email') : '';
        const phone = formData.has('phone') ? formData.get('phone') : '';

        if(name === ''){
            return 'Представьтесь, пожалуйста.';
        }

        if(email === '' && phone === ''){
            return "Укажите ваш телефон или электронный адрес иначе мы не сможем с вами связаться.";
        }

        return '';

    };

    const getToken = (formData) => {

        const name = formData.has('name') ? formData.get('name') : '';
        const email = formData.has('email') ? formData.get('email') : '';
        const phone = formData.has('phone') ? formData.get('phone') : '';

        return createToken([name, email, phone]);

    };

    const onClear = (event) => {

        event.stopPropagation();
        event.preventDefault();

        formDispatch({type: formActions.CLEAR_STATE, elements: callMeElements });
    
    };

    const onSubmit = (event) => {

        event.preventDefault();
        event.stopPropagation();

        if(hasInputsError(formState)) return;

        //getFormData
        const formData = getFormData(formState.formElements, callMeElements, hiddenFields);

        //TODO check if inputs has errors

        const formError = validateOnSubmit(formData);

        //console.log(formError);

        if(!formError){

            formData.append('token', getToken(formData));
            postRequest(url, formData);

        }else{

            formDispatch({type: formActions.SET_FORM_ERROR, formError: formError});

        }
    };

    const onChange = (event) => {

        let validationRules = {};

        if(event.target.name){
            validationRules = callMeElements[event.target.name].validationRules;
        }else{

            console.error("No name on form element...");

        }

        formDispatch({
            type: formActions.INPUT_CHANGE, 
            target: event.target, 
            validationRules: validationRules
        });

    };

    const isShowForm = !requestState.isRequestLoading && !requestState.isRequestSuccess && !requestState.isRequestError;


    return (
        
        <div className={classes.CallMe}>

            { requestState.isRequestLoading &&
                <div className={classes.Spinner}>
                    <Spinner/>
                </div>
            }

            { requestState.isRequestSuccess &&
                <div className={classes.Success}>
                    <p>Ваша заявка принята. Мы свяжемся с вами в течение 15 минут.</p>
                    <Button label={"OK"} type={button_type.CONTAINED} onClick={successOkButtonClickHandler}/>
                </div>
            }

            { requestState.isRequestError &&
                <div className={classes.Error}>
                    <p>Какая-то ошибочка...</p>
                    <Button label={"Попробовать снова."} type={button_type.CONTAINED} onClick={onSubmit}/>
                </div>
            }

            <div style={{display: isShowForm ? 'block' : 'none'}}>

                <CallMeForm elements={callMeElements} formState={formState} onChange={onChange} onSubmit={onSubmit} onClear={onClear}/>

            </div>

        </div>
            
    );
};

export default CallMe;
        