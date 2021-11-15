import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>ABOUT US</h4>
            <div> This Website displays Weather Data gathered by sensors. The Data includes temperature and humidity.</div>

            <div>Responsible People:</div>
            <div>Michael Pfeiffer</div>
            <div>Lisa Allacher</div>
            <h4>Cookies and Analytics</h4>
            <div>If you visit this site there will be no tracking at all. You will remain anonymous to us.</div>
            <h4>Contact</h4>
            <div>If you have any suggestions please send an email to: </div>
            <div>2010859001@fh-burgenland.at</div>

            <h4>Version 1.0.0</h4>

            <div>This website is in its early stages and will be updated regulary.</div>
            <br></br>
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default About