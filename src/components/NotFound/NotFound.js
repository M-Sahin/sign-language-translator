import { Link } from "react-router-dom";

// error message for undefined routes
const NotFound = () => {
	return (
		<div className="NotFound">
			<h1>Not found</h1>
			<p>Error: This page does not exist :(</p>
			<Link to="/">Click here to get back to home</Link>
		</div>
	);
};

export default NotFound;
