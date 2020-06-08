import React, { useEffect } from "react";
import "./index.scss";
import AOS from 'aos';

const Header = () => {
	useEffect(() => {
		AOS.init({
			// initialise with other settings
			duration: 2000
		});
	}, [])
	return (
		<header className="header header--fixed">
			<div className="container">
				<div className="row align-items-center h-100">
					<nav className="col-9 col-lg-6">
						<div className="header__logo">
							<div className="header__logo-icon" />
							<a href="#main">july.me</a>
						</div>
						<div className="header__status header__status--success">Online</div>
					</nav>
					<nav className="col-3 col-lg-6">
						<ul className="header__menu">
							<li className="header__menu-item d-none">
								<a className="header__menu-link nav-link active" href="#hero">About</a>
							</li>
							<li className="header__menu-item">
								<a className="header__menu-link nav-link" href="#services">Services</a>
							</li>
							<li className="header__menu-item">
								<a className="header__menu-link nav-link" href="#portfolio">Portfolio</a>
							</li>
							<li className="header__menu-item">
								<a className="header__menu-link nav-link" href="#pricing">Pricing</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}
export default Header;
