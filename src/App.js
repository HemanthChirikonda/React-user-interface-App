import React from "react";
import { Switch, Route, Link} from "react-router-dom"
import UserForm from "./UserForm";
import Users from "./Users";
import EditForm from "./EditForm"

const App =()=>{

return(
<div>
  <ul>
     <li> <Link to={"/"}>{"Home"}</Link></li>
     <li> <Link to={"/users"}>{"users"}</Link></li>
  </ul>
  <Switch>
    <Route path={"/users"}>
       <Users/>
    </Route>
  
    <Route path={'/edit/:id'}>
      <EditForm/>
    </Route>

    <Route path={"/"}>
       <UserForm/>
    </Route>
  </Switch>
</div>
)


}


export default App;