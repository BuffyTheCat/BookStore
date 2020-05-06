import styled from 'styled-components';

const StyledBookList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    article {
        &:not(:last-of-type) {
            margin-bottom: 36px;
        }
    }
`;

export { StyledBookList };