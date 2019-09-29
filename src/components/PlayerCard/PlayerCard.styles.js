import styled from 'styled-components';

export const Card = styled.div`
    border: 1px dashed;
    background-color: ${({ highlighted }) => highlighted ? '#CCC' : '#FFF'};
`;