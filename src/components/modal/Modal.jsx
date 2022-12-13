// import React, { useState } from "react";
// import { ItemDetail } from "../itemDetail/ItemDetail";
// import "./Modal.scss";

// export default function Modal() {
// 	const [modal, setModal] = useState(false);

// 	const toggleModal = () => {
// 		setModal(!modal);
// 	};

// 	if (modal) {
// 		document.body.classList.add("active-modal");
// 	} else {
// 		document.body.classList.remove("active-modal");
// 	}

// 	return (
// 		<>
// 			{modal && (
// 				<div className="modal">
// 					<div onClick={toggleModal} className="overlay"></div>
// 					<div className="modal-content">
// 						<ItemDetail />
// 						<button className="close-modal" onClick={toggleModal}>
// 							CLOSE
// 						</button>
// 					</div>
// 				</div>
// 			)}
// 		</>
// 	);
// }
