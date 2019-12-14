import React from 'react'

export default function Footer() {
                return <div style={footerStyle}><span style={{fontFamily: 'monospace',fontSize: '12px', color:'#fff'}}>version 0.0.3</span></div>
}

const footerStyle = {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    pageBreakInside: 'avoid',
    wordWrap: 'break-word',
    zIndex: '10',
    bottom: '5px',
}
