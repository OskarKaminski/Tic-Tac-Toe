import styled from 'styled-components';

export const Box = styled.div`
    border: 2px solid;
    width: 100%;
    padding-top: 100%;
    position: relative;
`;

export const BoxContent = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;