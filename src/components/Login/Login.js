import AppContainer from "../../hoc/AppContainer";
import LoginForm from "./LoginForm";


// login view
const Login = () => {
	return (
		<div className="Login">
			<AppContainer>
				<div className="login-header pt-5 pb-4 d-flex">
					<img src="/assets/Logo.png" alt="Robot logo" height="200px" />
					<div className="login-header-text mx-5 d-flex">
						<div>
							<h1>Sign Language Translator</h1>
							<h3>Log in to get started!</h3>
						</div>
					</div>
				</div>
			</AppContainer>
			<LoginForm />
		</div>
	);
};

export default Login;
