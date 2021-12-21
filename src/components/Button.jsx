import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
    const { className, children } = props;
    return (
        <button
            className={`btn ${className}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {children}
        </button>
    )
}

export const OutlineButton = props => {
    const { className, children } = props;

    return (
        <Button
            className={`btn-outline ${className}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {children}
        </Button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button
