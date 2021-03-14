import React, { useState, useEffect } from 'react';
import useCurrencyApi from '../hooks/useCurrencyApi';
import Dropdown from 'react-dropdown';
import { Container, Form, InputGroup } from 'react-bootstrap';
import 'react-dropdown/style.css';

const Currency = () => {
    // get json data with custom hook
    const { error, data, isLoaded } = useCurrencyApi();
    const [amount, setAmount] = useState(0);
    const [result, setResult] = useState();
    const [cur, setCur] = useState();
    var options = [];

    useEffect(() => {
        if (cur == null) {
            setResult(null);
        } else {
            setResult((amount * data[cur]));
        }
    }, [cur, amount, data]);

    // if data is loaded
    if (isLoaded && error == null) {
        for (var currency in data) {
            options.push(currency);
        }
    } 
    else {
        return <div>Loading...</div>
    }

    const inputEventHandler = (e) => setAmount(e.target.value);

    const dropdownSelectedHandler = (option) => setCur(option.label);

    return (
        <Container>
            <h1 className="heading display-5 pb-3 text-center">Currency Exchanger</h1>
            <Form.Group>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">USD</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control type="number" onChange={inputEventHandler} placeholder="0" />
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <Dropdown onChange={dropdownSelectedHandler} options={options} placeholder="Select a currency" />
            </Form.Group>
            { result !== null &&
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">{cur}</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control type="number" value={result.toFixed(2)} disabled />
                </InputGroup>
            }
        </Container>
    );
};

export default Currency;