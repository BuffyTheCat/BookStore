import styled from 'styled-components';

const StyledBookListItem = styled.article`
    display: flex;
    padding: 24px;
    padding-bottom: 31px;
    border-radius: 12px;
    box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.16), inset 0 -0.0625rem 0 rgba(0, 0, 0, 0.12), 0 0 8px rgba(0, 140, 210, 0);

    img {
        max-width: 100px;
        height: auto;
        object-fit: cover;
        margin-right: 10px;
    }
`;

const StyledBookListItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Playfair Display', serif;

    a {
        margin: 0;
        margin-bottom: 16px;
        text-decoration: none;
        font-size: 24px;
        font-weight: 600;
        color: #4d4d7d;
    }

    p {
        margin: 0;
        margin-bottom: 8px;
    }

    span {
        margin: 0;
        margin-bottom: auto;
        font-size: 18px;
    }

    button {
        padding: 8px 16px;
        color: red;
        font-weight: bold;
        border-radius: 16px;
        cursor: pointer;
        box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.16), inset 0 -0.0625rem 0 rgba(0, 0, 0, 0.12), 0 0 8px rgba(0, 140, 210, 0);
        background-color: transparent;
        outline: none;
        border: none;
        transition: box-shadow .3s;

        &:hover {
            box-shadow: 0 0.3rem 1rem rgba(0, 140, 210, 0.16), inset 0 -0.0625rem 0 rgba(0, 0, 0, 0.12), 0 0 8px rgba(0, 140, 210, 0);
        }
    }
`;

export { StyledBookListItem, StyledBookListItemInfo };