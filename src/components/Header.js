
import PropTypes from "prop-types";
import Button from './Button'
import UpdateBtn from './UpdateBtn'
import AddData from "./AddData";
const Header = ({ title, onAdd, showAdd, onUpdate }) => {

    return (
        <header>
     <div className={'wrapper_header'}>
         <Button color={showAdd ? 'red' : 'lightgreen'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
         <div>
             <h1 >{title}
             </h1>
         </div>
     </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'Sensor Data',
}

Header.propTypes = {

    title: PropTypes.string.isRequired,
}

//const headingStyle = {color: 'red', backgroundColor: 'black'};

export default Header
