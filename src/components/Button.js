import PropTypes from "prop-types";


const Button = ({color, text, onClick}) => {

    return (
        <div className='col s12'>
            <button onClick={onClick} style={{
                backgroundColor: color}} className={'waves-effect waves-light btn-large right'}>
                {text}</button>

        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button