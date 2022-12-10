import "./ItemList.scss";
import { Link } from "react-router-dom";
// import APT2 from "../../assets/apt/apt2.webp";

export const ItemList = ({ posts, filter }) => {
	return (
		<>
			{posts &&
				posts.map((post) => {
					let desc = post.desc;
					let words = desc.split(" ");
					let first30Words = words.slice(0, 30);
					let result = first30Words.join(" ");
					return (
						<Link to={`/${post._id}`} key={post._id}>
							<div className="item-list">
								<div
									style={{ transition: "all .5s ease" }}
									className="item-list-box"
								>
									<div
										style={{ backfaceVisibility: "none" }}
										className="item-list-box2"
									>
										<img
											// src={APT2}
											src={post.img[0]}
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
										<p className="item-list_desc-text">{result}...</p>
									</div>
								</div>
							</div>
						</Link>
					);
				})}
		</>
	);
};
