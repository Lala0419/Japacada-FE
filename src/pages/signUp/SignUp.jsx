import React from "react";
import "./SignUp.scss";
export const SignUp = () => {
	return (
		<div className="login">
			<div className="login-left">
				<div className="login-left-inside-box">
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
						placeholder="ユーザー名"
					/>
					<input
						type="text"
						className="login-right-input"
						placeholder="Eメール"
					/>
					<input
						type="password"
						className="login-right-input"
						placeholder="パスワード"
					/>
					<input
						type="password"
						className="login-right-input"
						placeholder="確認用パスワード"
					/>
					<button className="login-right-button">サインアップ</button>
					<button className="login-right-button login-right-register-button">
						ログイン
					</button>
				</div>
			</div>
		</div>
	);
};
