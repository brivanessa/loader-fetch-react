import { styled, css } from "styled-components";

const TextSize = css`
    font-size: 1.4rem;
`;


export const TextDefault = styled.p`
${TextSize};
color: var(--black);
`;

export const TextLowEmphasis = styled.p`
${TextSize};
color: var(--light);
`;
