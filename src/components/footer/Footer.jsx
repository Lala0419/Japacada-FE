import React from "react";
import { Home, Mail, Phone } from "@mui/icons-material";
import "./Footer.scss";

export const Footer = () => {
	return (
		<div className="footer-all">
			<div className="footer">
				<div className="footer-box">
					<h4 className="footer-text">About</h4>
				</div>

				<div className="footer-box">
					<h4 className="footer-text">Support</h4>
				</div>

				<div className="footer-box">
					<div className="footer-contact">
						<h4 className="footer-text footer-text--contact">Contact</h4>

						<p className="footer-contact-box">
							<Phone fontSize="large" className="footer-icon" />
							<span className="footer-text"> 012-345-6789</span>
						</p>
						<p className="footer-contact-box">
							<Mail fontSize="large" className="footer-icon" />
							<span className="footer-text"> Japanada.com</span>
						</p>
						<p className="footer-contact-box">
							<Home fontSize="large" className="footer-icon" />
							<span className="footer-text"> Vancouver BC Canada</span>
						</p>
					</div>
				</div>
			</div>
			<p className="footer__label">&copy; JPCANADA Inc. All Rights Reserved.</p>
		</div>
	);
};
