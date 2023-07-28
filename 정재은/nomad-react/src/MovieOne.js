//react-router-dom을 이용한 페이지 전환 / #7.4
//router 설치 npm i react-router-dom@5.3.0
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link //브라우저 새로고침 없이 유저를 다른 페이지로 이동시켜줌
} from "react-router-dom"
import Home from "./movieRoutes/Home";
import Detail from "./movieRoutes/Detail";
function MovieOne(){
    return <Router>
      <Switch /*Switch가 Route(url)를 찾고 컴포넌트 렌더링*/> 
      <Route path="/movie/:id"/* : 이 포인트*/>
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
}
export default MovieOne;
