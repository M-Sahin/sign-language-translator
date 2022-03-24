import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAttemptAction, loginErrorAction } from "../../store/actions/loginActions";
import AppContainer from "../../hoc/AppContainer";


// a login imput and events
const LoginForm = () => {
	const [username, setUsername] = useState("");
	const dispatch = useDispatch();
	// property from session redux state for conditional rendering
	const { loggedIn } = useSelector(state => state.session);
	// property from login redux state for displaying error mssgage
	const { loginError } = useSelector(state => state.login);

	// updates the username state on input
	const onInputChange = e => {
		setUsername(e.target.value);
	};

	// event handler for the login button
	const onLoginSubmit = e => {
		e.preventDefault();
		// dispatch the redux action for login attempt
		dispatch(loginAttemptAction(username));
		// clear the potential error message 
		setTimeout(() => {
			dispatch(loginErrorAction(""));
		}, 5000);
	};

	return (
		<div className="LoginForm">
			<AppContainer>
				{loggedIn && <Navigate to="/translate" />}
				<form
					onSubmit={onLoginSubmit}
					className="login-form mt-3 pt-1 shadow mb-5 bg-body"
				>
					<div className="login-container input-group pt-4 px-4 pb-5">
						<span className="login-input-icon material-icons input-group-text">
							person
						</span>
						<input
							id="username"
							type="text"
							placeholder="Enter your username"
							onChange={onInputChange}
							className="login-input form-control border-start-0 border-end-0 shadow-none"
							aria-describedby="login-button"
						/>
						<button
							type="submit"
							className="login-button btn border-start-0 shadow-none"
							id="login-button"
						>
							<span className="login-button-icon material-icons">east</span>
						</button>
					</div>
					{loginError && (
						<div className="mb-4 px-4" role="alert">
							<p className="d-flex mb-0 text-danger">
								<span className="material-icons">error</span>&nbsp;
								<span>{loginError}</span>
							</p>
						</div>
					)}

					<div className="login-footer px-4 py-1">
						<Link to="/register" className="login-footer-link">
							No account? No worries, click here to register.
						</Link>
					</div>
				</form>
			</AppContainer>
		</div>
	);
};

export default LoginForm;
