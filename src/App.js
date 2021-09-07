import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home'
import Blog from './views/Blog'
import NewBlog from './views/NewBlog'
import ViewBlog from './views/ViewBlog'
import NotFound from './views/NotFound'

function App() {
  return (
    <Switch>
      <Route path="/blog/new" component={NewBlog}/>
      <Route path="/blogs/:encodedTitle" component={ViewBlog}/>
      <Route path="/blogs" component={Blog}/>
      <Route exact path="/" component={Home}/>    
      <Route path="*" component={NotFound}/>    
    </Switch>
  );
}

export default App;
