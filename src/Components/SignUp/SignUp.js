import React from 'react';
import './SignUp.css';


// const SignUpPage =
//         <h1> className="login">Login</h1>;
// export default SignUpPage;

// function SignUp() {
// return (
//         <h1>class=''</h1>
// );
// }
// export default SignUp;


// const App = props => (
//         <SignUp />
//     );
//     class SignUp extends React.Component{
//         render()



//         function SignUp() {
//           return (
//             <div id="loginform">
//               <FormHeader title="Sign Up" />
//               <Form />
//             </div>
//           );
//         }
      
//       const FormHeader = props => (
//           <h2 id="headerTitle">{props.title}</h2>
//       );
      
      
//       const Form = props => (
//          <div>
//            <FormInput description="Email Address" placeholder="Email" type="text" />
        //    <FormInput description="First Name" placeholder="First name" type='text'/>
        //    <FormInput description="Last Name" placeholder="Last name" type='text'/>
        //    <FormInput description="Phone Number" placeholder="Phone" type="phone number"/>
        //    <FormInput description="School" placeholder="School" type="text"/>
        //    <FormInput description="Password" placeholder="Password" type="password"/>
//            <FormButton title="Log in"/>
//          </div>
//       );
      
//       const FormButton = props => (
//         <div id="button" class="row">
//           <button>{props.title}</button>
//         </div>
//       );
      
//       const FormInput = props => (
//         <div class="row">
//           <label>{props.description}</label>
//           <input type={props.type} placeholder={props.placeholder}/>
//         </div>  
//       );
      

      
// export default SignUp;





  
    function SignUpForm(){
      
        return(
          <div id="loginform">
            <FormHeader title="Sign Up" />
            <Form />
          </div>
        )
      
    }
    
    const FormHeader = props => (
        <div>
                <div className="W2S">
                Welcome to Stublets
                </div>
                <div 
                        className="HaveAccount">
                        Have an Account?
                        <div><a href="#"> Sign In</a></div> 
                </div>
                <h2 id="headerTitle">{props.title}</h2>
        </div>
    );
    
    
    const Form = props => (
       <div>
         <FormInput description="First Name" placeholder="First name" type='text'/>
         <FormInput description="Last Name" placeholder="Last name" type='text'/>
         <FormInput description="Phone Number" placeholder="Phone" type="phone number"/>
         <FormInput description="School" placeholder="School" type="text"/>
         <FormInput description="Password" placeholder="Password" type="password"/>
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
    export default SignUpForm;

