import React, { useEffect, useState } from 'react';
import classes from './Tip.Module.css';
import { Container, InputGroup, Form, FormControl } from 'react-bootstrap';
import BsFormGroup from '../components/Bootstraps/BsFormGroup';
import BsInputPrepend from '../components/Bootstraps/BsInputPrepend';

const Tip = () => {
    const [amount, setAmount] = useState(0);
    const [tipPercent, setTipPercent] = useState(0);
    const [tipAmount, setTipAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [resultClass, setResultClass] = useState(classes.Results);

    const numberEnteredHandler = (e) => setAmount(e.target.value);
    const tipSelectedHandler = (e) => {
        setTipPercent(e.target.value);
        setResultClass(classes.Normal);
    }

    useEffect(() => {
        setTipAmount((amount * tipPercent / 100).toFixed(2));
    }, [amount, tipPercent])

    useEffect(() => {
        var temp = amount * 1 + tipAmount * 1;
        setTotalAmount(temp.toFixed(2));
    }, [amount, tipAmount])

    return (
        <Container>
            <h1 className="heading display-5 pb-3 text-center">Tip Calculator</h1>
            <Form>
                <BsInputPrepend prependText="$">
                    <FormControl type="number" placeholder="Total Bill" onChange={numberEnteredHandler} />
                </BsInputPrepend>
                <BsFormGroup>
                    <InputGroup className="mb-3">
                        <Form.Label>Tip:</Form.Label>
                        <FormControl type="range" value={tipPercent} onChange={tipSelectedHandler} />
                        { tipPercent !== 0 &&
                            <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2">{tipPercent}%</InputGroup.Text>
                            </InputGroup.Append>
                        }
                    </InputGroup>
                </BsFormGroup> 
            </Form>

            <hr />
            <div className={resultClass}>
                <h3 className="text-center">Results</h3>
                <BsInputPrepend prependText="Tip amount">
                    <FormControl type="number" value={tipAmount} disabled />
                </BsInputPrepend>
                <BsInputPrepend prependText="Total amount with tip">
                    <FormControl type="number" value={totalAmount} disabled />
                </BsInputPrepend>
            </div>
        </Container>
    );
}

export default Tip;