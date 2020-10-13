import React from "react";
import { Switch, Route, Link} from "react-router-dom"
import UserForm from "./UserForm";
import Users from "./Users";
import EditForm from "./EditForm"

const App =()=>{

return(
<div className='container' style={{backgroundColor:'rgb(120,150,150)'}}>
<div className='display-4 ' style={{textAlign:"center"}}>{'USER DATA'}</div>
  <ul className='row' style={{listStyle:'none'}}>
     <li className='col-6 '><Link to={"/"}><button className={'btn- btn-primary rounded col-12'}> {"Home"}</button></Link></li>
     <li className='col-6'> <Link to={"/users"}><button className={'btn- btn-primary rounded col-12'}>{"users"}</button></Link></li>
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