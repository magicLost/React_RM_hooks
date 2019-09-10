import React, { useMemo } from 'react';
import classes from './CallMeForm.module.scss';

import Input from "../../../../component/FormElements/Input/Input";
import Textarea from "../../../../component/FormElements/Textarea/Textarea";
import Form from "../../../../component/Form/Form";
        
const CallMeForm = ({elements, formState, onChange, onSubmit, onClear}) => {

    const { name, email, phone, comment } = elements;

    const formElements = formState.formElements;

    return (
        
        <div className={classes.CallMeForm}>

            <Form onSubmit={onSubmit} clearButtonClickHandler={onClear} formError={formState.formError}>

                { useMemo(() => (
                    <Input elementAttrs={name.elementAttrs} onChange={onChange} value={formElements["name"].value} labelValue={name.labelValue} error={formElements["name"].error}/>
                ), [formElements["name"].value, formElements["name"].error]) }

                { useMemo(() => (
                    <Input elementAttrs={email.elementAttrs} onChange={onChange} value={formElements["email"].value} labelValue={email.labelValue} error={formElements["email"].error}/>
                ), [formElements["email"].value, formElements["email"].error]) }

                { useMemo(() => (
                    <Input elementAttrs={phone.elementAttrs} onChange={onChange} value={formElements["phone"].value} labelValue={phone.labelValue} error={formElements["phone"].error}/>
                ), [formElements["phone"].value, formElements["phone"].error]) }


                { useMemo(() => (
                    <Textarea elementAttrs={comment.elementAttrs} onChange={onChange} value={formElements["comment"].value} labelValue={comment.labelValue} error={formElements["comment"].error} isResize={true} />
                ), [formElements["comment"].value, formElements["comment"].error]) }

            </Form>

        </div>
            
    );
};

export default CallMeForm;
        