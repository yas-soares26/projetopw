import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom'
import Historia from '../../views/contents/Historia'
import Inicial from '../../views/contents/Inicial'
import Detalhes from '../../views/contents/Detalhes'


const Content = props => (
    <main className="Content">
        <Switch>
            
            <Route path="/Inicial">
                <Inicial />
            </Route>
            <Route path="/Historia">
                <Historia />
            </Route>
            <Route path="/Detalhes">
                <Detalhes />
            </Route>

        </Switch>
    </main>

)
export default Content
