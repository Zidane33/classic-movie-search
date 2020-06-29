import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { CustomSearchBox } from './components/custom-search-box/CustomSearchBox';
import { CustomHits } from './components/custom-hits/CustomHits';
import './App.css';
import {Container, Col, Row} from 'react-bootstrap';

const searchClient = algoliasearch('TBO3XAKUGH','5c3466744b79c891637e1d1009c7e850');

function App() {
    return (
      <Container className='mt-5'>
          <h1>Classic Movie Search</h1>
          <Row>
              <Col>
                  <InstantSearch searchClient={searchClient} indexName="dev_MOVIES">
                      <CustomSearchBox />
                      <CustomHits />
                  </InstantSearch>
              </Col>
          </Row>
      </Container>
    );
}

export default App;
