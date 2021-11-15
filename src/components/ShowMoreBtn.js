import PropTypes from "prop-types";


const ShowMoreBtn = ({color, text, onClick}) => {

    return (
        <div className='col s12'>
            <button onClick={onClick} style={{
                backgroundColor: color}} className={'waves-effect waves-light btn-large right'}>
                {text}</button>
        </div>
    )
}

ShowMoreBtn.defaultProps = {
    color: 'purple',
}

ShowMoreBtn.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default ShowMoreBtn