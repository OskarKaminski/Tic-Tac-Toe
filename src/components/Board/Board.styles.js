import styled from 'styled-components';

export const Board = styled.div`
    display: grid;
    grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
    grid-gap: 10px 10px;
`;

export const BoardWrapper = styled.div`
    width: 50%;
    max-width: 300px;
`

export const GameArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;