import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import './custom-search-box.css';

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
    <Form noValidate action='' role='search'>
        <FormGroup id='form-group'> 
            <FormControl type='search' value={currentRefinement} onChange={event => refine(event.currentTarget.value)} />
            <Button id='reset-button' variant='outline-light' onClick={() => refine('')}>Reset Search</Button>
        </FormGroup>
    </Form>
)

export const CustomSearchBox = connectSearchBox(SearchBox);
