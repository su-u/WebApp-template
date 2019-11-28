import React from 'react';
import { useParams } from 'react-router-dom'
import styled from "styled-components";
import { ramenByName } from '@/DataBase';
import MainContent from "@/container/MainContent";
import SideContent from "@/container/SideContent";

const Wrapper = styled.div`
    width: 100%;
    max-width: 850px;
    display: -webkit-flex;
    display: flex;
    margin: 20px auto 0;
`;

const App = () => {
    let { name } = useParams();
    let selectedData = undefined;
    if(name !== undefined)
        selectedData = ramenByName(name);

    return(
        <>
            <>
                <Wrapper>
                    {selectedData !== undefined && (
                        <MainContent data={selectedData}/>
                    )}
                    <SideContent/>
                </Wrapper>
            </>
        </>
    );
};

export default  App;