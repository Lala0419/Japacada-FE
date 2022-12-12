import React from "react";
import "./Login.scss";

export const Login = () => {
	return (
		<div className="login">
			<div className="login-left">
				<div className="login-left-inside-box">
					<h2 className="login-left-logo">Japanada</h2>
					<h1 className="login-left-message">Welcome back</h1>
					<h2 className="login-left-messagej">おかえりなさい</h2>
					<p className="login-left-messagesub">第二のHOMEをカナダでも</p>
				</div>
			</div>
			<div className="login-right">
				<div className="login-right-box">
					<p className="login-right-login-msg">ログインはこちらから</p>
					<input
						type="text"
						className="login-right-input"
						placeholder="Eメール"
					/>
					<input
						type="text"
						className="login-right-input"
						placeholder="パスワード"
					/>
					<button className="login-right-button">ログイン</button>
					<span className="login-rightforgot">パスワードを忘れた方へ</span>
					<button className="login-right-button login-right-register-button">
						アカウント作成
					</button>
				</div>
			</div>
		</div>
	);
};
