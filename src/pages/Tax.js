import React, { useState, useEffect } from 'react';
import Dropdown from 'react-dropdown';
import { Container, Form } from 'react-bootstrap';
import BsInputPrepend from '../components/Bootstraps/BsInputPrepend';

const taxesPerProvince = {
    'Alberta': 1.05,
    'Northwest Territories': 1.05,
    'Yukon': 1.05,
    'British Columbia': 1.12,
    'Manitoba': 1.12,
    'Newfoundland and Labrador': 1.15,
    'Prince Edward Island': 1.15,
    'Quebec': 1.14975,
    'Saskatchewan': 1.11,
    'Nova Scotia': 1.15,
    'Nunavut': 1.05,
    'Ontario': 1.13
};

const Tax = () => {

    const [originalAmount, setOriginalAmount] = useState(0);
    const [province, setProvince] = useState(null);
    const [taxAmount, setTaxAmount] = useState(null);
    const [total, setTotal] = useState(null);

    useEffect(() => {
        if (originalAmount === 0 || province === null) {
            setTotal(null);
        } else {
            setTotal(originalAmount * taxesPerProvince[province]);
        }
    }, [province, originalAmount]);

    useEffect(() => {
        setTaxAmount(total * 1 - originalAmount * 1);
    }, [total, originalAmount]);

    var options = [];

    for (var pro in taxesPerProvince) {
        options.push(pro);
    }

    const amountChangedHandler = (e) => setOriginalAmount(e.target.value);
    const dropdownSelectedHandler = (option) => setProvince(option.label)

    return (
        <Container>
            <h1 className="heading display-5 pb-3 text-center">Tax Calculator</h1>
            <Form>
                <BsInputPrepend prependText="$">
                    <Form.Control type="number" value={originalAmount} placeholder="Total Bill" onChange={amountChangedHandler} />
                </BsInputPrepend>
                <BsInputPrepend prependText="Provinces">
                    <Dropdown onChange={dropdownSelectedHandler} options={options} placeholder="Choose a province..." />
                </BsInputPrepend>
            </Form>
            <hr />
            {!(total === null || province === null) &&
                <div className="pt-4">
                    <h3 className="text-center">Results</h3>
                    <BsInputPrepend prependText="Tax Amount">
                        <Form.Control type="number" value={taxAmount.toFixed(2)} disabled />
                    </BsInputPrepend>
                    <BsInputPrepend prependText="Total Amount">
                        <Form.Control type="number" value={total.toFixed(2)} disabled />
                    </BsInputPrepend>
                </div>
            }
        </Container>
    );
}

export default Tax;