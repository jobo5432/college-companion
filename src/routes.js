import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage.component';
import AboutPage from './components/about/AboutPage.component';
<<<<<<< HEAD
import ContactPage from './components/contact/ContactPage.component';
import CoursesPage from './components/courses/CoursesPage.component';
=======
>>>>>>> c9df4a5d043fc9ca5d04883fc0f347a21621c544

export default (
    <Route path="/" component={App}>
        <IndexRoute components={HomePage}/>
        <Route path="about" component={AboutPage} />
<<<<<<< HEAD
        <Route path="contact" component={ContactPage} />
        <Route path="courses" component={CoursesPage} />
=======
>>>>>>> c9df4a5d043fc9ca5d04883fc0f347a21621c544
    </Route>
);