import styled from 'styled-components';

const ShoppingCardTableStyled = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;

    table {
        width: 100%;
        border-collapse: collapse;

        td,
        th {
            text-align: center;
            border: 1px solid black;
        }
    }

    p {
        margin-left: auto;
    }
`;

export { ShoppingCardTableStyled };