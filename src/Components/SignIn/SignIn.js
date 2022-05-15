import './SignIn.css';

function LoginForm(){
    return(
      <div id="loginform">
        <FormHeader title="Log In" />
        <Form />
        <OtherMethods />
      </div>
    )
}

const FormHeader = props => (
    <div>
            <div className="W2S">
                Welcome to Stublets
            </div>
            <div className="noAccount">
                No Account? 
                <div><a className="SignUp" href="#">Sign up</a></div>
            </div>
            <h2 id="headerTitle">{props.title}</h2>

    </div>
    
);

const Form = props => (
   <div>
     <FormInput description="Email" placeholder="Enter your email address" type="text" />
     <FormInput description="Password" placeholder="Enter your password" type="password"/>
     <a className="ForgotPass" href="#">Forgot Password?</a>
     <FormButton title="Log in"/>
   </div>
);

const FormButton = props => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);

const OtherMethods = props => (
    <div id="alternativeLogin">
      <label>Or sign in with:</label>
      <div id="iconGroup">
        <Facebook />
        <Twitter />
        <Google />
      </div>
    </div>
  );
  
  const Facebook = props => (
    <a href="#" id="facebookIcon"></a>
  );
  
  const Twitter = props => (
    <a href="#" id="twitterIcon"></a>
  );
  
  const Google = props => (
    <a href="#" id="googleIcon"></a>
  );
  

export default LoginForm
    