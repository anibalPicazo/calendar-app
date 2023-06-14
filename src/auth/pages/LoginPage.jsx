import { useAuthStore } from '../../hooks/useAuthStore';
import { useForm } from '../../hooks/useForm';
import './loginPage.css';


const loginFormField = {
    loginEmail: '',
    loginPassword: ''
}
const registerFormField = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: ''
}

export const LoginPage = () => {
    const {startLogin} = useAuthStore()

    const {loginEmail,loginPassword,onInputChange:onLoginInputChange} = useForm(loginFormField)
    const {registerName,registerEmail, registerPassword,registerPassword2,onInputChange:onRegisterInputChange} = useForm(registerFormField)
    
    const  loginForm = (event) =>{
        event.preventDefault()
        console.log('login',{loginEmail,loginPassword});
        startLogin({email:loginEmail,password:loginPassword})
    } 
    const registerForm = (event) => {
        event.preventDefault()
        console.log('login',{registerName,registerEmail,registerPassword,registerPassword2});

    }
  return (
      <div className="container login-container">
          <div className="row">
              <div className="col-md-6 login-form-1">
                  <h3>Ingreso</h3>
                  <form onSubmit={loginForm}>
                      <div className="form-group mb-2">
                          <input 
                              type="text"
                              className="form-control"
                              placeholder="Correo"
                              name='loginEmail'
                              value={loginEmail}
                              onChange={onLoginInputChange}
                          />
                      </div>
                      <div className="form-group mb-2">
                          <input
                              type="password"
                              className="form-control"
                              placeholder="Contraseña"
                              name='loginPassword'
                              value={loginPassword}
                              onChange={onLoginInputChange}
                          />
                      </div>
                      <div className="form-group mb-2">
                          <input 
                              type="submit"
                              className="btnSubmit"
                              value="Login" 
                          />
                      </div>
                  </form>
              </div>

              <div className="col-md-6 login-form-2">
                  <h3>Registro</h3>
                  <form onSubmit={registerForm}>
                      <div className="form-group mb-2">
                          <input
                              type="text"
                              className="form-control"
                              placeholder="Nombre"
                              value={registerName}
                              name='registerName'
                              onChange={onRegisterInputChange}
                          />
                      </div>
                      <div className="form-group mb-2">
                          <input
                              type="email"
                              className="form-control"
                              placeholder="Correo"
                              name='registerEmail'
                              value={registerEmail}
                              onChange={onRegisterInputChange}
                          />
                      </div>
                      <div className="form-group mb-2">
                          <input
                              type="password"
                              className="form-control"
                              placeholder="Contraseña"
                              name='registerPassword'
                              value={registerPassword}
                              onChange={onRegisterInputChange}
                          />
                      </div>

                      <div className="form-group mb-2">
                          <input
                              type="password"
                              className="form-control"
                              placeholder="Repita la contraseña"
                              name='registerPassword2'
                              value={registerPassword2}
                              onChange={onRegisterInputChange}
                          />
                      </div>

                      <div className="form-group mb-2">
                          <input 
                              type="submit" 
                              className="btnSubmit" 
                              value="Crear cuenta" />
                      </div>
                  </form>
              </div>
          </div>
      </div>
  )
}