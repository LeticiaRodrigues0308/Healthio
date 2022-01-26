import Healthio from "./pages/site";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/home" exact={true} component={Healthio}/>
            </Switch>
        </BrowserRouter>
    )
}