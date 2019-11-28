import React from 'react';
import styled from 'styled-components';
import { RamenData } from "@/DataBase";
import Heading from "@/components/Heading";

const Wrapper = styled.div`
    display: block;
    width: 600px;
    margin-bottom: 50px;
`;

const Img = styled.img`
    width: 100%;
`;

interface Props {
    data: RamenData;
}

const MainContent = (props:Props) => {
    const { data } = props;
    const { name, img, pd, desc } = data;
    return (
        <>
            <Wrapper>
                <Heading.h2>{name}</Heading.h2>
                <Img src={`img/${img}`} />
                <Heading.h2>説明</Heading.h2>
                {desc}
                <Heading.h2>地図</Heading.h2>
                <iframe
                    src={`https://www.google.com/maps/embed?pb=${pd}`}
                    width="600" height="450" frameBorder="0"></iframe>
            </Wrapper>
        </>
    );
};

export default MainContent;