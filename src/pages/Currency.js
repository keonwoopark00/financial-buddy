import React, { useState, useEffect } from 'react';
import useCurrencyApi from '../hooks/useCurrencyApi';
import Dropdown from 'react-dropdown';
import { Container, Form } from 'react-bootstrap';
import BsInputPrepend from '../components/Bootstraps/BsInputPrepend';
import BsFormGroup from '../components/Bootstraps/BsFormGroup';
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
            <BsInputPrepend prependText="USD">
                <Form.Control type="number" onChange={inputEventHandler} placeholder="0" />
            </BsInputPrepend>
            <BsFormGroup>
                <Dropdown onChange={dropdownSelectedHandler} options={options} placeholder="Select a currency" />
            </BsFormGroup>
            { result !== null &&
                <BsInputPrepend prependText={cur}>
                    <Form.Control type="number" value={result.toFixed(2)} disabled />
                </BsInputPrepend>
            }
        </Container>
    );
};

export default Currency;