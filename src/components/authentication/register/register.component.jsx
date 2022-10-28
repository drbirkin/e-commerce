import './register.styles.scss'
import RegisterationForm from '../../forms/register-form/register-form.component'
export const Registeration = () => {
  return (
    <div className="form-section">
      {/* <div className="background-cover"></div> */}
      <div className="register-form">
        <p className="title">Create an account</p>
        <p>Let's get started with shopping!</p>
        <RegisterationForm />
      </div>
    </div>
  )
}

export default Registeration
