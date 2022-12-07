
import { AccountCircle, Menu, Public } from "@mui/icons-material";
import "./Header.scss";
import HeaderIcon from "../../assets/person/1.jpeg";

export const Header = () => {
	// const router = useRouter();

	return (
		<header className="header">
			{/* left */}
			<div
				className="header-left"
			>
				<img
					className="header-left_logo"
					src={HeaderIcon}
          alt="logo"
				/>
				<span className="header-left_text">Japanada</span>
			</div>

			{/* right */}
			<div className="header-right">
				<p className="header-right_text">Post</p>
				<Public className="header-right_public-icon" />

				<div className="header-right_icons ">
					<Menu className="header-right_icon" />
					<AccountCircle className="header-right_icon" />
				</div>
			</div>
		</header>
	);
};
