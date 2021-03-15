import React from 'react';
import { InputGroup } from 'react-bootstrap';
import BsFormGroup from './BsFormGroup';

const BsInputPrepend = props => {
    return (
        <BsFormGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">{props.prependText}</InputGroup.Text>
                </InputGroup.Prepend>
                {props.children}
            </InputGroup>
        </BsFormGroup>
    );
};

export default BsInputPrepend;