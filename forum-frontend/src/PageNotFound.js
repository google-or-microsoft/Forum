import React, {Component} from 'react';
import AppNavbar from './Components/AppNavbar';

class PageNotFound extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <div>
                    <h3>Error 404: Page Not Found!</h3>
                </div>
            </div>

        )
    }
}

export default PageNotFound;
