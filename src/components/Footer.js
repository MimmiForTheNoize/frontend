
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className={'red lighten-2'}>

            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h4 className="white-text">Weather Sensors</h4>
                        <p className="white-text">Copyright &copy; 2021</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h4 className="white-text">Content</h4>
                        <h6>
                            <ul style={{margin:'15px'}}>
                                <li><Link className="grey-text text-lighten-3" to={'about'}>About</Link></li>
                                <br></br>
                                <li><Link className="grey-text text-lighten-3" to={'table'}> Table of Records</Link></li>
                                <br></br>
                                <li><Link className="grey-text text-lighten-3" to={'charts'}>Charts</Link></li>
                            </ul>
                        </h6>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
            </div>
            
        </footer>
    )
}

export default Footer