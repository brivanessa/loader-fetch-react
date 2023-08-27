import { styled, css } from "styled-components";

const SubtitleSize = css`
    font-size: 1.7rem;
`;

export const Title = styled.h1`
font-size: 1.7rem;
font-weigth: bold;
color: var(--white);
text-align: center;
`;

export const SubtitleDefault = styled.h2`
${SubtitleSize};
color: var(--black);
`;

export const SubtitleLowEmphasis = styled.h2`
${SubtitleSize};
color: var(--light);
`;

export const SubtitleHighEmphasis = styled.h2`
${SubtitleSize};
color: var(--emphasis);
`;