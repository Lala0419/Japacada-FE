import { AccountCircle, Menu, Public } from "@mui/icons-material";
import "./Header.scss";
import HeaderIcon from "../../assets/person/1.jpeg";
import { Link } from "react-router-dom";

export const Header = () => {
	// const router = useRouter();

	return (
		<header className="header">
			{/* left */}

			<div className="header-left">
				<Link to="/" className="header-left-box">
					<img className="header-left_logo" src={HeaderIcon} alt="logo" />
					<span className="header-left_text">Japanada</span>
				</Link>
			</div>
			{/* right */}
			<div className="header-right">
				<Link to="/newpost">
					<p className="header-right_text">Post</p>
				</Link>
				<Public fontSize="large" className="header-right_public-icon" />
				<Link to="/profile/:username">
					<div className="header-right_icons ">
						<Menu className="header-right_icon" />
						<AccountCircle className="header-right_icon" />
					</div>
				</Link>
			</div>
		</header>
	);
};
