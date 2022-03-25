import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { translationClearAction } from "../../store/actions/translationActions";
import ProfileSummary from "./ProfileSummary";


// profile view, route "/profile"
const Profile = () => {
	const dispatch = useDispatch();
	// user information from the current session redux state
	const { username, id, loggedIn } = useSelector(state => state.session);
	// the user's translations from the translation redux state
	const { translations } = useSelector(state => state.translation);

	// event handler for the 'clear translation history' button
	const onClearTranslationsClick = () => {
		console.log("just give it a moment...")

		const apiKey = 'T/wnxnVqkS3YQnMBM70eag=='

		fetch(`https://mm-assignment-api.herokuapp.com/translations/` + String(id), {
			method: 'PATCH', // NB: Set method to PATCH
			headers: {
			  'X-API-Key': apiKey,
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				// Provide new highScore to add to user with id 1
				translations: []
			})
			})
			.then(response => {
			  if (!response.ok) {
				throw new Error('Could not update')
			  }
			  console.log("done!")
			})

			

		};

	return (
		<div className="Profile">
			{!loggedIn && <Navigate to="/" />}
			<ProfileSummary
				username={username}
				translations={translations}
				onClearTranslationsClick={onClearTranslationsClick}
				id = {id}
			/>
		</div>
	);
};

export default Profile;
