import styled from 'styled-components';

const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 24px;

    a {
        text-decoration: none;

        &:first-of-type {
            margin-right: auto;
        }
    }

    p {
        margin: 0;
        color: orange;
        font-size: 24px;
    }

    span {
        font-size: 18px;
        color: #4d4d7d;
        font-weight: bold;

        &:not(:last-of-type) {
            margin-right: 20px;
        }
    }
`;

export { HeaderStyled };