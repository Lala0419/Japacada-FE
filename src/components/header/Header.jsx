import { AccountCircle, Menu, Public } from "@mui/icons-material";
import "./Header.scss";
import HeaderIcon from "../../assets/person/1.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../modal/Modal.scss";

export const Header = ({ modal, setModal, modalp, setModalp }) => {
	// const router = useRouter();

	const toggleModal = () => {
		setModal(!modal);
	};

	if (modal) {
		document.body.classList.add("active-modal");
	} else {
		document.body.classList.remove("active-modal");
	}

	const toggleModalp = () => {
		setModalp(!modalp);
	};

	if (modalp) {
		document.body.classList.add("active-modal");
	} else {
		document.body.classList.remove("active-modal");
	}

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
				{/* <Link to="/newpost"> */}
				<p className="header-right_text" onClick={toggleModal}>
					Post
				</p>
				{/* </Link> */}
				<Public fontSize="large" className="header-right_public-icon" />
				{/* <Link to="/profile/:username"> */}

				<div className="header-right_icons" onClick={toggleModalp}>
					<Menu className="header-right_icon" />
					<AccountCircle className="header-right_icon" />
				</div>
				{/* </Link> */}
			</div>
		</header>
	);
};
