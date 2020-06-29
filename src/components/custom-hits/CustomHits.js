import React from 'react';
import { connectHits } from 'react-instantsearch-dom';
import { Card } from 'react-bootstrap';

const Hits = ({ hits }) => (
    <ol>
        {hits.map(hit => (
            <Card key={hit.objectID}>
                <Card.Body>
                    <Card.Title>{`${hit.title} -- ${hit.year}`}</Card.Title>
                    <Card.Text>{`${hit.cast[0]} ${hit.cast[1] ? `and ${hit.cast[1]}` : ''}`}</Card.Text>
                </Card.Body>
            </Card>
        ))}
    </ol>
)

export const CustomHits = connectHits(Hits);
