import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import UserImg from "../../assets/person/nanaya1.jpg";
import "./Profile.scss";
import "../../components/modal/Modal.scss";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8080";

export const Profile = ({ modalp, setModalp, setFilter }) => {
	const toggleModalp = () => {
		setModalp(!modalp);
	};

	// console.log("filter", setFilter);
	// useEffect(() => {
	// 	const fetchUserInfo = async () => {
	// 		const { data } = await axios.get(`${BASE_URL}/api/users`);
	// 		console.log("data", data);
	// 	};
	// 	// if (postId !== "") {
	// 	fetchUserInfo();
	// 	// }
	// }, []);

	return (
		<div className="modal">
			<div className="overlay" onClick={toggleModalp}></div>
			<div className="profile modal-content">
				<div className="profile-box">
					<div className="profile-top">
						<div className="profile-left">
							<img src={UserImg} alt="user-img" className="profile-img" />
						</div>
						<div className="profile-right">
							<h1 className="profile-username">Nanaya Miki</h1>
							<div className="profile-userinfo">
								<p className="profile-userinfo-label">Where I live</p>
								<h3 className="profile-userinfo-text">Vancouver</h3>
								<p className="profile-userinfo-label">
									I am currently looking for
								</p>
								<h3 className="profile-userinfo-text">A Room</h3>
							</div>
						</div>
					</div>
					<div className="profile-bottom">
						<p className="profile-userinfo-label">About me</p>
						<p className="profile-aboutme">
							今回は、日本での自己紹介について紹介してきました。日本では、さまざまな場面で、「自己紹介をしてください」と言われます。
							どんなに日本語が苦手でも、日本語を使って笑顔で元気よく挨拶できれば、相手にいい印象を与えることができます。
							相手によっては、なかなか名前を聞き取ってもらえないときもありますが、そんなときもイライラせず、笑顔で乗り切りましょう。どんな時も笑顔を忘れず！頑張れ自分！負けるな自分！
						</p>
						<span className="profile-button" onClick={toggleModalp}>
							go back to list
						</span>
					</div>
				</div>
				{/* <Link to="/"> */}
				{/* </Link> */}
			</div>
		</div>
	);
};
