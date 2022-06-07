import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from "react-bootstrap"
import {AlbumList} from "./pages/AlbumList"

function App() {
    return (
        <Container className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={AlbumList}/>
                </Switch>
            </Router>
        </Container>
    );
}

export default App;
