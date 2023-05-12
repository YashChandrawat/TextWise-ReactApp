import React from 'react'

function Alert(props) {

    const capital = (word) => {
        const upperCase = word.toUpperCase();
        return upperCase;
    }

    return (
        <div style={{ height: '50px' }}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capital(props.alert.type)}</strong> : {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert
