import React from "react";
import { Home, Mail, Phone } from "@mui/icons-material";
import "./Footer.scss"

export const Footer = () => {
	return (
		<div className="footer">
			<div className="footer_about-box">
				<h4 className="footer_about-text">About</h4>
			</div>

			<div className="footer_support-box">
				<h4 className="footer_support-text">Support</h4>
			</div>

			<div className="footer_contact-box">
				<h4 className="footer_contact-text">Contact</h4>
				<p className="footer_phone-box">
					<Phone
						className="footer_phone-icon"
					/>
					<span className="footer_phone-text">: 012-345-6789</span>
				</p>
				<p className="footer_email-box">
					<Mail className="footer_email-icon" />
					<span className="footer_email-text">: Japanada.com</span>
				</p>
				<p className="footer_address-box">
					<Home className="footer_adress-icon" />{" "}
					<span className="footer_adress-text">: Vancouver BC Canada</span>
				</p>
			</div>
		</div>
	);
};
