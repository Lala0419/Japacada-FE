import "./Message.scss";
import "../../components/modal/Modal.scss";

import React from "react";
import { Close } from "@mui/icons-material";

export const Message = ({ modalm, setModalm }) => {
	const toggleModalm = () => {
		setModalm(!modalm);
	};
	return (
		<div className="modal modal-message">
			<div className="overlay" onClick={toggleModalm}></div>
			<div className="message modal-content">
				<div className="message-box">
					<label htmlFor="name" className="upload__middle-form-label">
						名前
					</label>
					<input type="text" placeholder="Name" className="message-name" />

					<div className="message-bottom">
						<label htmlFor="name" className="upload__middle-form-label">
							メッセージ
						</label>
						<textarea
							type="text"
							placeholder="Message"
							className="message-textarea"
						/>
						<span className="message-button" onClick={toggleModalm}>
							Send
						</span>
					</div>
					<div className="message-X" onClick={toggleModalm}>
						<Close fontSize="large" />
					</div>
				</div>
			</div>
		</div>
	);
};
