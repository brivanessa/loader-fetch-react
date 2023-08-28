import { styled } from "styled-components";

const Layout = ({ children, className }) => {
    return (
        <div className={className}>
            <div>{children}</div>
        </div>
    );
}

export default styled(Layout)`
    background-color: var(--white);
    height: 100%;
    display: flex;
    flex-direction: column;  
`;
