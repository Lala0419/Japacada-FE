import React from "react";
import profileImg from "../../assets/person/nanaya1.jpg";
import "./ItemDetail.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Bathroom, Bed } from "@mui/icons-material";

const BASE_URL =
	process.env.REACT_APP_BASE_URL || "japanada-b-production.up.railway.app";

export const ItemDetail = ({
	modalD,
	setModalD,
	testID,
	onClose,
	modalp,
	setModalp,
	modalm,
	setModalm,
}) => {
	const params = useParams();
	const [postId, setPostId] = useState("");
	const [itemDetail, setItemDetail] = useState([]);
	const [user, setUser] = useState([]);

	useEffect(() => {
		const fetchItemDetail = async () => {
			const { data } = await axios.get(`${BASE_URL}/api/posts/${testID}`);
			console.log("fetchItemDetail data", data);
			setItemDetail(data.post);
			setUser(data.user);
		};
		if (postId !== "") {
			fetchItemDetail();
		}
	}, [postId, testID]);

	useEffect(() => {
		params.postId
			? setPostId(params.postId)
			: setPostId("638d41f5e94cfc5e412b56cc");
	}, [params.postId]);

	// const imgs = itemDetail.img;

	// if (imgs.length > 1) {
	// 	imgs.map((img) => {
	// 		return setImg(img[0]);
	// 	});
	// } else {
	// 	return setImg(imgs);
	// }

	const toggleModalD = () => {
		setModalD(!modalD);
		onClose();
	};

	const toggleModalp = () => {
		setModalp(!modalp);
	};
	const toggleModalm = () => {
		setModalm(!modalm);
	};

	// if (modalp) {
	// 	document.body.classList.add("active-modal");
	// } else {
	// 	document.body.classList.remove("active-modal");
	// }
	// if (modalm) {
	// 	document.body.classList.add("active-modal");
	// } else {
	// 	document.body.classList.remove("active-modal");
	// }

	return (
		<div className="detail-box" key={itemDetail._id}>
			<div className="modal">
				<div className="overlay" onClick={toggleModalD}></div>
				<div className="detail-box detail modal-content" key={itemDetail._id}>
					<div className="detail-box-left">
						<div className="detail-box-left-top">
							<h1 className="detail-box-left_title">{itemDetail.title}</h1>
							<div className="detail-box-left-icons">
								<div className="detail-box-left-left-box">
									<span className="detail-box-left-icon">
										<span className="detail-box-left-num">
											{itemDetail.bedroom}
										</span>
										<Bed
											fontSize="large"
											className="detail-box-left-icon-icon"
										/>
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
								<div className="detail-box-left-right-box">
									<span className="detail-box-left-icon detail-box-left-icon--bottom">
										<span className="detail-box-left-num">Move in Avail</span>
										<span className=" detail-box-left-num detail-box-left-num--bold">
											{itemDetail.calender}
										</span>
									</span>
								</div>
							</div>
						</div>
						<img
							className="detail-box-left_head-img"
							src={itemDetail.img}
							alt="apt"
						/>
					</div>
					<div className="detail-box-right">
						<div className="detail-box-right-top">
							<div className="detail-box-right-top-top" onClick={toggleModalp}>
								<img
									className="detail-box-right-img"
									src={profileImg}
									alt="profile"
								/>
								<h2 className="detail-box-right_username">{user.username}</h2>
							</div>
							<p className="detail-box-right_desc">{itemDetail.desc}</p>
						</div>
						<div className="detail-box-right-bottom">
							<span
								onClick={toggleModalm}
								className="detail-box-right-bottom_button detail-box-right-bottom_button--message"
							>
								message
							</span>

							<span
								onClick={toggleModalD}
								className="detail-box-right-bottom_button detail-box-right-bottom_button--back"
							>
								go back to list
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
