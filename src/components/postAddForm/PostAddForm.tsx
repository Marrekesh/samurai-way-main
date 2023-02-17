import React from 'react';
import Form from "../ui/form/Form";

import formClasses from '../ui/form/form.module.css'
import c from './postAddForm.module.css'
import inputClasses from '../ui/input/input.module.css'
import buttonClasses from'../ui/buttons/button.module.css'

import Avatar from "../avatar/Avatar";
import Input from "../ui/input/Input";
import Button from "../ui/buttons/Button";

const PostAddForm = () => {
    return (
        <div className={c.postAddForm}>
            <Avatar size='small'/>
            <Form className={formClasses.postAddForm}>
                <Input placeholder={'Что у вас нового?'} className={inputClasses.postInput} />

            </Form>
            <Button className={buttonClasses.postAddButton}>Опубликовать</Button>
        </div>
    );
};

export default PostAddForm;