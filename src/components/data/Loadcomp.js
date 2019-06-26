import React from 'react'
import {HashLoader} from 'react-spinners';
import { css } from 'react-emotion';
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export default class Loadcomp extends React.Component {
    render() {
        return(
        <HashLoader
                className={override}
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
            />


        )
    }
}