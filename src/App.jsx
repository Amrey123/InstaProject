import { Route, HashRouter as Router, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { About } from './pages/AboutUs';
import Sidebar from "./assets/cmps/Sidebar"
import { AppFooter } from './assets/cmps/AppFooter'
import { AppHeader } from './assets/cmps/AppHeader'
import { StoryIndex } from './pages/StoryIndex'
import {StoryDetails} from './pages/StoryDetails'

//This comp will be holding the differnt pages avaialble in the app and allow the user to move between them using the Route ability. 
export function App() {

    return (
        
        <Router>
            
            <section className='main-app'>
                
                <AppHeader />
                <Sidebar/>
                <main className='container'>
                    <Routes>
                        
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />}/>
     
                        <Route path="/stories" element={<StoryIndex />} />
                        <Route path="/story/:storyId" element={<StoryDetails />} />
                    </Routes>
                </main>
                <AppFooter />
            </section>
        </Router>


    )
}