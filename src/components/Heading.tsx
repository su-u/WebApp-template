import React from 'react';
import styled from 'styled-components';

const H1Content = styled.h1`
  &:first-letter{
    color: #CF000D;
  }
`;

const H2Content = styled.h2`
  &:first-letter{
    color: #CF000D;
  }
`;

interface Props {
    children: React.ReactNode;
}

const Heading = {
    h1: (props: Props) => {
        return (
            <>
                <H1Content>{props.children}</H1Content>
            </>
        );
    },
    h2: (props: Props) => {
        return (
            <>
                <H2Content>{props.children}</H2Content>
            </>
        );
    }
};

export default Heading;