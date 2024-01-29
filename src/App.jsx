import { Route, HashRouter as Router, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { About } from './pages/AboutUs';

import { AppFooter } from './assets/cmps/AppFooter'
import { AppHeader } from './assets/cmps/AppHeader'
import { EmailIndex } from './pages/EmailIndex'
import {EmailDetails} from './pages/EmailDetails'

//This comp will be holding the differnt pages avaialble in the app and allow the user to move between them using the Route ability. 
export function App() {

    return (
        <Router>
            <section className='main-app'>
                <AppHeader />
                <main className='container'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />}/>
     
                        <Route path="/emails" element={<EmailIndex />} />
                        <Route path="/email/:emailId" element={<EmailDetails />} />
                    </Routes>
                </main>
                <AppFooter />
            </section>
        </Router>


    )
}