import React, { Component,Fragment } from 'react'

export default class Footer extends Component {
    render() {
        const footerStyle = {
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translate(-50%)',
            pageBreakInside: 'avoid',
            wordWrap: 'break-word'
        }
        return (
            <Fragment>
                <div style={footerStyle}><span style={{fontFamily: 'monospace',fontSize: '12px', color:'#515151'}}>version 0.0.2</span></div>
            </Fragment>
        )
    }
}
