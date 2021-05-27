import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import WhoIAm from '../pages/whoiam';
import Portfolio from '../pages/portfolio';


const Routes = () => {
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Home }/>
            <Route exact path='/whoiam' component={ WhoIAm }/>
            <Route exact path='/portfolio' component={ Portfolio }/>
        </Switch>
    </BrowserRouter>
)
}

export default Routes;