import PropTypes from 'prop-type'

function Button({text}){
    return <button>{text}</button>
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button
