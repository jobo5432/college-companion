import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage.component';
import AboutPage from './components/about/AboutPage.component';
import ContactPage from './components/contact/ContactPage.component';
import CollegePage from './components/college/CollegePage.component';

export default (
    <Route path="/" component={App}>
        <IndexRoute components={HomePage}/>
        <Route path="about" component={AboutPage} />
        <Route path="contact" component={ContactPage} />
        <Route path="college/:subdomain" component={CollegePage} />
    </Route>
);