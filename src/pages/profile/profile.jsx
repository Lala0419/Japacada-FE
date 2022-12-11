import React from "react";
import { Link } from "react-router-dom";
import UserImg from "../../assets/person/10.jpeg";
import "./Profile.scss";

export const Profile = () => {
	return (
		<>
			<div className="profile">
				<div className="profile-box">
					<div className="profile-left">
						<img src={UserImg} alt="user-img" className="profile-img" />
					</div>
					<div className="profile-right">
						<h1 className="profile-username">Taro user.name</h1>
						<p className="profile-userinfo">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Asperiores quis velit, at minus laboriosam eaque aliquid ipsum sed
							dolore doloremque saepe! Sint commodi exercitationem veritatis
							doloribus eos et voluptates eligendi?Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Est laboriosam quod repudiandae
							iusto rem, iure dolores? Eveniet, architecto, aliquam nostrum
							laboriosam dignissimos nulla officia eum placeat praesentium
							beatae repellat ad.
						</p>
					</div>
				</div>
				<Link to="/">
					<span className="profile-button">go back to list</span>
				</Link>
			</div>
		</>
	);
};
