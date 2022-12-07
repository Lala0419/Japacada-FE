import React from "react";
import APT1 from "../../assets/apt/apt1.jpeg";
import "./ItemDetail.scss";
export const ItemDetail = () => {
	return (
		<div className="detail-box">
			<div className="detail-box-left">
				<h1 className="detail-box-left_title">
					Beautiful Apartment in Vancouver area
				</h1>
				<img className="detail-box-left_head-img" src={APT1} alt="apt" />
			</div>
			<div className="detail-box-right">
				<div className="detail-box-right-top">
					<h2 className="detail-box-right_username">Tarou / profile.name</h2>
					<p className="detail-box-right_desc">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
						adipisci eaque laboriosam ut distinctio facere vel dolorem, sit eum
						dignissimos ipsam, aut alias natus totam iste nihil odit itaque
						corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Nisi modi perspiciatis ab, illum sapiente facere totam, odio numquam
						quidem quibusdam debitis explicabo soluta, libero necessitatibus ad
						maiores repudiandae fugiat. Dignissimos? / post.desc
					</p>
				</div>
				<div className="detail-box-right-bottom">
					<span className="detail-box-right-bottom_button detail-box-right-bottom_button--message">
						message
					</span>
					<span className="detail-box-right-bottom_button detail-box-right-bottom_button--back">
						go back to list
					</span>
				</div>
			</div>
		</div>
	);
};
