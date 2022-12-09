import "./ItemList.scss";
// import postdammyImg from "../../assets/apt/apt1.jpeg";
import { Link } from "react-router-dom";
export const ItemList = ({ posts }) => {
	return (
		<>
			{posts &&
				posts.map((post) => (
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
										src={post.img}
										alt="post-head-pic"
										style={{ transition: "all 3s ease" }}
										className="item-list-box2-img"
									/>
								</div>

								<div className="item-list-box3">
									<div className="item-list_right-top-box">
										<h4 className="item-list_title-text">{post.title}</h4>
										<p className="item-list_price-text">price</p>
									</div>

									<div className="item-list-box4"></div>
									<p className="item-list_location-text">{post.location}</p>
									<p className="item-list_desc-text">{post.desc}</p>
								</div>
							</div>
						</div>
					</Link>
				))}
		</>
	);
};
