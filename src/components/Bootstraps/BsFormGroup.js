import React from 'react';
import { FormGroup } from 'react-bootstrap';

const BsFormGroup = props => {
    return (
        <FormGroup>
            {props.children}
        </FormGroup>
    );
}

export default BsFormGroup;

