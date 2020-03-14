import { css, CSSObject, SimpleInterpolation } from 'styled-components';

const sizes: { [index: string]: number } = {
    desktop: 992,
    tablet: 768,
    phone: 576,
};

export const media = Object.keys(sizes).reduce(
    (acc, label) => {
        acc[label] = (
            first: TemplateStringsArray | CSSObject,
            ...interpolations: SimpleInterpolation[]
        ) => css`
            @media (max-width: ${sizes[label]}px) {
                ${css(first, ...interpolations)}
            }
        `;

        return acc;
    },
    {} as { [index: string]: Function }
);
