import React, { useEffect, useState } from 'react';
import { Container, InputGroup, Form, FormControl } from 'react-bootstrap';
import classes from './Tip.Module.css';

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
                <Form.Group>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type="number" placeholder="Total Bill" onChange={numberEnteredHandler} />
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <InputGroup className="mb-3">
                        <Form.Label>Tip:</Form.Label>
                        <FormControl type="range" value={tipPercent} onChange={tipSelectedHandler} />
                        { tipPercent !== 0 &&
                            <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2">{tipPercent}%</InputGroup.Text>
                            </InputGroup.Append>
                        }
                    </InputGroup>
                </Form.Group> 
            </Form>

            <hr />
            <div className={resultClass}>
                <h3 className="text-center">Results</h3>
                <Form.Group>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Tip amount</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type="number" value={tipAmount} disabled />
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Total amount with tip</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type="number" value={totalAmount} disabled />
                    </InputGroup>
                </Form.Group>
            </div>
        </Container>
    );
}

export default Tip;