import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.scss";
export const SignUp = () => {
	return (
		<div className="login">
			<div className="login-left">
				<div className="login-left-inside-box avatar">
					<h2 className="login-left-logo">Japanada</h2>
					<h1 className="login-left-message"></h1>
					<h2 className="login-left-messagej">ようこそ</h2>
					<p className="login-left-messagesub">第二のHOMEをカナダでも</p>
				</div>
			</div>
			<div className="login-right">
				<div className="login-right-signup-box">
					<p className="login-right-login-msg">新規登録はこちらから</p>
					<input
						type="text"
						className="login-right-input"
						placeholder="User Name/ユーザー名"
					/>
					<input
						type="text"
						className="login-right-input"
						placeholder="Where do you live?/お住まいは？"
					/>
					<input
						type="text"
						className="login-right-input"
						placeholder="You are currently looking for/探し中"
					/>
					<input
						type="text"
						className="login-right-input"
						placeholder="Email/Eメール"
					/>
					<textarea
						type="text"
						className="login-right-input login-right-textarea"
						placeholder="About yourself"
					/>

					<input
						type="password"
						className="login-right-input"
						placeholder="password/パスワード"
					/>
					<input
						type="password"
						className="login-right-input"
						placeholder="password/確認用パスワード"
					/>
					<Link to="/login">
						<button className="login-right-button">Sign up/サインアップ</button>
					</Link>
					<button className="login-right-button login-right-register-button">
						Login/ログイン
					</button>
				</div>
			</div>
		</div>
	);
};
