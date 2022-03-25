import { useDispatch } from "react-redux";
import AppContainer from "../../hoc/AppContainer";
import { sessionLogoutAction } from "../../store/actions/sessionActions";
import React from 'react'

let userTranslations
const ProfileSummary = ({
	username,
	translations,
	onClearTranslationsClick,
	id
}) => {
	const dispatch = useDispatch();

	// event handler for the logout button
	const onLogoutClick = () => {
		// dispatch the redux action for logging out i.e. clearing the session from local storage
		dispatch(sessionLogoutAction());
	};

	// array that includes the latest ten translations that are not marked as deleted
	const filteredAndSlicedTranslations = translations
		.filter(t => t.deleted === false)
		.slice(-10)
		.reverse();
		const [translationz, setTranslations] = React.useState([])

	   fetch('https://mm-assignment-api.herokuapp.com/translations/' + id)
		.then(res => res.json())
		.then(data => setTranslations(data.translations))


	return (
		<div className="ProfileSummary">
			<AppContainer>
				<div className="profile-summary mt-5 p-4 shadow mb-5">
					<div className="profile-details p-3">
						<h1>{username}</h1>
						<div className="pt-5 pb-3">
							<button
								className="profile-button btn"
								onClick={onClearTranslationsClick}
							>
								Clear translation history
							</button>
							<button
								className="profile-button btn mx-3"
								onClick={onLogoutClick}
							>
								Log out
							</button>
						</div>
					</div>

					<div className="profile-history mt-3 p-3">
						<h3>Translation history</h3>
						{translationz.map((translation, index)=>{
							if(index < 10){
								return <li>{index + 1} {translation}</li>
							}})}
					</div>
				</div>
			</AppContainer>
		</div>
	);
};

export default ProfileSummary;
