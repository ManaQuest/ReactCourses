import React, { useContext ,useState} from "react";
import { AuthContext } from "../context/context";

const Login = () => {
  const {setIsAuth} = useContext(AuthContext);
  const [data,setData] = useState({login:'',password:''});
  const login={login:"Kosty",password:"1234"};
  const onChange=(e)=>{
if(e.target.id==='login'){
  setData({...data,login:e.target.value});
} else{
  setData({...data,password:e.target.value});
}
  }
  const onLogin=()=>{
    if(data.login===login.login&&data.password===login.password){
      setIsAuth(true);
      localStorage.setItem('auth','true');
    }
  }
  return (
    <div>
      <div class="container">
        <form class="col s12">
          <div class="row">
            <div class="input-field row">
              <i class="material-icons prefix">account_circle</i>
              <input
                
                type="text"
                placeholder="input username"
                class="validate"
                id="login"
                onChange={onChange}
              />
            </div>
            <div class="input-field row">
              <i class="material-icons prefix">dialpad</i>
              <input
                
                placeholder="input password"
                type="password"
                class="validate"
                id="password"
                onChange={onChange}
              />
            </div>
            <button onClick={()=>onLogin()}
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Авторизоваться
              <i class="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
