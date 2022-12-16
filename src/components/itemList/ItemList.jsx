import "./ItemList.scss";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ItemDetail } from "../itemDetail/ItemDetail";
import "../modal/Modal.scss";

export const ItemList = ({ posts, modalp, setModalp, modalm, setModalm }) => {
	const [modalD, setModalD] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedId, setSelectedId] = useState(undefined);

	const toggleModalD = (id) => {
		setModalD(!modalD);
		console.log("toggleModalD!!!!!", { id });
		setIsModalOpen(true);
		setSelectedId(id);
	};

	useEffect(() => {
		console.log({ isModalOpen, selectedId });
	}, [isModalOpen, selectedId]);

	if (modalD) {
		document.body.classList.add("active-modal");
	} else {
		document.body.classList.remove("active-modal");
	}

	return (
		<>
			{posts &&
				posts.map((post) => {
					// let desc = post.desc;
					// let words = desc.split(" ");
					// let first30Words = words.slice(0, 30);
					// let result = first30Words.join(" ");

					return (
						<div
							className="item-list"
							key={post._id}
							onClick={() => toggleModalD(post._id)}
						>
							<div
								style={{ transition: "all .5s ease" }}
								className="item-list-box"
							>
								<div
									style={{ backfaceVisibility: "none" }}
									className="item-list-box2"
								>
									<img
										src={post.img}
										alt="post-head-pic"
										style={{ transition: "all 3s ease" }}
										className="item-list-box2-img"
									/>
								</div>

								<div className="item-list-box3">
									<div className="item-list_right-top-box">
										<h4 className="item-list_title-text">{post.title}</h4>
										<p className="item-list_price-text">{post.price}</p>
									</div>

									<div className="item-list-box4"></div>
									<p className="item-list_location-text">{post.location}</p>
									<p className="item-list_desc-text">{post.desc}...</p>
								</div>
							</div>
						</div>
					);
				})}
			{isModalOpen && (
				<ItemDetail
					modalD={modalD}
					setModalD={setModalD}
					modalp={modalp}
					setModalp={setModalp}
					modalm={modalm}
					setModalm={setModalm}
					testID={selectedId}
					onClose={() => {
						setIsModalOpen(false);
						setSelectedId(undefined);
					}}
				/>
			)}
		</>
	);
};
