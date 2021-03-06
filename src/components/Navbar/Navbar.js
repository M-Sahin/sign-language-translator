import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sessionLogoutAction } from "../../store/actions/sessionActions";
import AppContainer from "../../hoc/AppContainer";
import "./Navbar.css";

// navbar that includes links to the translation view, profile view and a logout button
const Navbar = () => {
	const dispatch = useDispatch();
	const { username, loggedIn } = useSelector(state => state.session);

	// event handler for the logout button
	const onLogoutClick = () => {
		// dispatch the redux action for logging out
		dispatch(sessionLogoutAction());
	};

	return (
		<div className="Navbar">
			<nav className="navbar shadow p-3">
				<AppContainer>
					<Link className="navbar-link" to="/translate">
						<h2 className="navbar-text navbar-brand">
							{loggedIn && (
								<img
									className="mx-4 pb-2"
									src="/assets/Logo.png"
									alt="Navbar logo"
									width="40px"
								/>
							)}
							Sign Language Translator
						</h2>
					</Link>
					<form className="d-flex">
						{loggedIn && (
							<Link className="navbar-link" to="/profile">
								<button className="user-button btn d-flex">
									<span className="material-icons mx-1">person</span>
									<span className="user-button-text">{username}</span>
								</button>
							</Link>
						)}

						{loggedIn && (
							<button
								className="logout-button btn d-flex"
								type="button"
								onClick={onLogoutClick}
							>
								<span className="logout-button-icon material-icons">
									logout
								</span>
							</button>
						)}
					</form>
				</AppContainer>
			</nav>
		</div>
	);
};

export default Navbar;
