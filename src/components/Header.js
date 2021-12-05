
import PropTypes from "prop-types";
import Button from './Button'
const Header = ({ title, onAdd, showAdd, onUpdate }) => {

    return (
        <header>
     <div className={'wrapper_header'}>
         <Button color={showAdd ? '#d32f2f' : '#7b1fa2'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
         <div>
             <h1 >{title}
             </h1>
         </div>
     </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'Weather Sensors',
}

Header.propTypes = {

    title: PropTypes.string.isRequired,
}


export default Header
