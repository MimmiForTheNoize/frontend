import { Link } from 'react-router-dom'

const Navigation = () => {
    return (

        <nav>
            <div className="nav-wrapper">

                <Link to='/' className="brand-logo center">Weather Sensors</Link>

                <ul className="left hide-on-med-and-down">
                    <li><i className="large material-icons navicon">menu</i></li>
                    <li><Link to="sass.html">Sass</Link></li>
                    <li><Link to="badges.html">Components</Link></li>
                    <li className="active"><Link to="collapsible.html">JavaScript</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
