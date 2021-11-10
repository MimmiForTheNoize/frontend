
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className={'red lighten-2'}>

            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Footer Content</h5>
                        <p>Copyright &copy; 2021</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                            <li><Link className="grey-text text-lighten-3" to={'about'}>About</Link></li>
                            <li><Link className="grey-text text-lighten-3" to={'table'}> Table of Records</Link></li>
                            <li><Link className="grey-text text-lighten-3" to={'about'}>Link 3</Link></li>
                            <li><Link className="grey-text text-lighten-3" to={'about'}>Link 4</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
            </div>
            
        </footer>
    )
}

export default Footer