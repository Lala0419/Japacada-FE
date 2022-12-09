import React from "react";
import { Link } from "react-router-dom";
import APT1 from "../../assets/apt/apt1.jpeg";
import profileImg from "../../assets/person/1.jpeg";
import "./ItemDetail.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Bathroom, Bed } from "@mui/icons-material";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8080";

export const ItemDetail = () => {
	const params = useParams();
	const [postId, setPostId] = useState("");
	const [itemDetail, setItemDetail] = useState([]);
	const [user, setUser] = useState([]);

	useEffect(() => {
		const fetchItemDetail = async () => {
			const { data } = await axios.get(`${BASE_URL}/api/posts/${postId}`);
			console.log("data", data);
			setItemDetail(data.post);
			setUser(data.user);
			// console.log("item", itemDetail);
		};
		if (postId !== "") {
			fetchItemDetail();
		}
	}, [postId]);

	useEffect(() => {
		params.postId
			? setPostId(params.postId)
			: setPostId("638d41f5e94cfc5e412b56cc");
	}, [params.postId]);

	return (
		<>
			<div className="detail-box" key={itemDetail._id}>
				<div className="detail-box-left">
					<div className="detail-box-left-top">
						<h1 className="detail-box-left_title">{itemDetail.title}</h1>
						<div className="detail-box-left-icons">
							<span className="detail-box-left-icon">
								<span className="detail-box-left-num">
									{itemDetail.bedroom}
								</span>
								<Bed fontSize="large" className="detail-box-left-icon-icon" />
							</span>
							<span className="detail-box-left-icon">
								<span className="detail-box-left-num">
									{itemDetail.bathroom}
								</span>
								<Bathroom
									fontSize="large"
									className="detail-box-left-icon-icon"
								/>
							</span>
						</div>
					</div>
					<img className="detail-box-left_head-img" src={APT1} alt="apt" />
				</div>
				<div className="detail-box-right">
					<div className="detail-box-right-top">
						<div className="detail-box-right-top-top">
							<img
								className="detail-box-right-img"
								src={profileImg}
								alt="profile"
							/>
							<h2 className="detail-box-right_username">
								Tarou /{user.username}
							</h2>
						</div>
						<p className="detail-box-right_desc">{itemDetail.desc}</p>
					</div>
					<div className="detail-box-right-bottom">
						<span className="detail-box-right-bottom_button detail-box-right-bottom_button--message">
							message
						</span>
						<Link to="/">
							<span className="detail-box-right-bottom_button detail-box-right-bottom_button--back">
								go back to list
							</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
