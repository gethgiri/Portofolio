import React, { Component } from "react";
import styles from "./home.scss";
import style from "./../../styles/button.scss";

class HomePage extends Component{
		constructor(props){
		super(props);
		this.state = {
			fixTop: true,
			showNav: false
		};
	}

	componentDidMount() {
	    document.addEventListener('scroll', () => {
	    if(window.scrollY > 900){
	    	this.setState({
	    		fixTop: false
	    	})
	    }else{
	    	this.setState({
	    		fixTop: true
	    	})
	    }
	    });
 	}

 	goTop(){
	 	document.body.scrollTop = 0;
	    document.documentElement.scrollTop = 0;
 	}

 	showNavigationSelection(){
 		this.setState({
 			showNav: !this.state.showNav
 		})
 	}

 	downloadFile(){
 		window.open('upload/Adhihtya.pdf')
 	}

	render() {
		const addCls = (this.state.fixTop) ? "" : "join-top";
		const showNavCls = (this.state.showNav) ? "show-nav" : "";
 		return (
			<div>
				<div className="portfolio-header-page ">
				<div className="w3-row">
					<div className="w3-col s3 m3 l3">&nbsp;</div>
					<div className="w3-col s6 m6 l6" style={{paddingTop: "12%"}}>
						<p  className="w3-center" style={{fontSize:"52px"}}><hr /> Software Developer  </p>
						<p  className="w3-center" style={{fontSize:"52px"}}> &   </p>
						<p  className="w3-center" style={{fontSize:"52px"}}>UI-Designer <hr /></p>
					</div>
					<div className="w3-col s3 m3 l3">&nbsp;</div>
				</div>
               </div>

				<div className={"portfolio-navigation w3-bar " + addCls}>
				
				 	<button className="w3-button w3-teal w3-large tile-icon"
				 	onClick={this.showNavigationSelection.bind(this)}>☰</button>
				  	<div className={"header-right " + showNavCls}>
						<a>PORTFOLIO </a>
					</div>
				</div>


				<div>
				<div id="goals-section">
					<section className="goals-section" 
					style={{backgroundColor: "rgb(255, 255, 255)" }}>
					<div className="w3-row">
						<div className="w3-col s12 m12 l6">
							<h1 style={{marginLeft: "100px"}}>GOALS</h1>
							<p className="w3-left" style={{fontSize: "24px", marginLeft: "120px"}}>
								My dream or goal whatever is to create a full application from 
								A to z. From 0 to every thing like designing, frontend, 
								Backend, hosting. And i also interested in cyber-security.
							 	I am very enthusiastic to learn new technologies.
							</p>
						</div>
						<div className="w3-col s12 m12 l6">
							 <h1 style={{marginLeft: "100px"}}>HOBBIES</h1>
							 <img src="./assets/ring.png" alt="logo" style={{marginLeft: "120px", maxWidth: "300px"}} />
							 <br /><br />
							 <label style={{marginLeft: "140px"}}>Sports is my only HOBBIES</label>
						</div>
					</div>
					</section>
				</div>
				 <div id="skillset-section">
				 	<section className="skillset-section" 
				 		style={{backgroundColor: "rgb(219, 236, 213)" }}>
				 		<div className="w3-container w3-row">
				 		<div className="background2">
				 		<div className="w3-col s12 m12 l6 w3-left w3-padding-16">
				 			<h1 className="skills-highlight">SKILLS</h1>
					 		<label style={{fontSize: "24px"}}>
						 		Here i mentioned some of my knowledge level 
						 		of particular skills.
					 		</label>
				 		</div>

				 		<div className="w3-col s12 m12 l6">

				 		<label>C</label><br />
				 		<div className="w3-light-grey">
				 			<div className="w3-container w3-green w3-center" style={{width: "80%"}}>80%</div>
				 		</div><br />

				 		<label>HTML &amp; CSS</label><br />
				 		<div className="w3-light-grey">
				 			<div className="w3-container w3-green w3-center" style={{width: "80%"}}>80%</div>
				 		</div><br />

				 		<label>Photoshop</label><br />
				 		<div className="w3-light-grey">
				 			<div className="w3-container w3-green w3-center" style={{width: "80%"}}>80%</div>
				 		</div><br />

				 		<label>JavaScript</label><br />
				 		<div className="w3-light-grey">
				 			<div className="w3-container w3-green w3-center" style={{width: "75%"}}>75%</div>
				 		</div>
				 		<br />

				 		<label>Python</label><br />
				 		<div className="w3-light-grey">
				 			<div className="w3-container w3-green w3-center" style={{width: "30%"}}>30%</div>
				 		</div><br />


				 		<label>React js</label><br />
				 		<div className="w3-light-grey">
				 			<div className="w3-container w3-green w3-center" style={{width: "30%"}}>30%</div>
				 		</div>

				 		</div>
				 		</div>
				 		</div>
				 		</section>
				 		</div>


				 		<div id="resume-section">
					 		<section className="resume-section w3-center" 
					 		style={{background: "rgb(242, 242, 241)"}}>
					 		<div className="w3-content w3-display-container resume-arrow">
						 		<h1 className="resume-highlight">RESUME</h1>
						 		<label style={{fontSize: "24px"}}>For further more details about me .
						 		I attached my resume with it.Please kindly 
						 		have a look at this.May be i am the person 
						 		you are looking for.</label>
						 		<br /><br />
						 		<a href="upload/giriResumeUpdated.doc" download="giriResumeUpdated.doc">
						 		<button className="portfolio-button-primary w3-button w3-center w3-hover-none"
						 		 style={{border: "1px solid green", color: "green" }}>
						 		 DOWNLOAD RESUME</button>
						 		</a><br /> <br/>
						 		<h1 className="resume-highlight">CURICULLUM VITAE</h1>
						 		<label style={{fontSize: "24px"}}>For further more details about me .
						 		I attached my curicullum vitae with it.Please kindly 
						 		have a look at this.May be i am the person 
						 		you are looking for.</label>
						 		<br /><br />
						 		<a href="upload/giriCVUpdated.doc" download="giriCVUpdated.doc">
						 		<button className="portfolio-button-primary w3-button w3-center w3-hover-none"
						 		 style={{border: "1px solid green", color: "green" }}>
						 		 DOWNLOAD CURICULLUM VITAE</button>
						 		</a>
					 		 </div>
					 		 </section>
				 		 </div>


				 		 <div id="about-section">
					 		 <section className="about-section w3-container w3-row" 
					 		 style={{backgroundColor: "rgba(34, 68, 34, 0.267)"}}>
					 		 <div className="w3-container w3-padding-16">
						 		 <div className="w3-row"><div>
						 		 <h1 className="w3-center">Some of my work sample!</h1>
						 		 <br />
						 		 <div className="w3-row">
							 		 <div className="w3-col  m12 l6 w3-center">
							 			<img src="./assets/giriwork1.png" className="detectOne" />
							 		 </div>
							 		 <div className="w3-col  m12 l6 w3-center">
							 		 	<img src="./assets/giriwork2.png" className="detectTwo" />
							 		 </div>
						 		 </div>
						 		 </div>
						 		 </div>
					 		 </div>
				 		 </section>
				 		 </div>

				 		<div id="contact-section">
					 		<section className="contact-section w3-center">
						 		<div className="parallax w3-row w3-container">
						 		<div className="w3-col s12 m12 l12 w3-padding-16 w3-left">
						 		<h1 className="contact-highlight w3-center" 
						 		style={{color: "rgb(255, 255, 255)"}}>PING ME</h1>
						 		<div className="">
						 		<div className="contact-information">
						 			<div className="w3-row">
							 			<div className="w3-col s12 m5 l5">
								 			<p style={{color: "rgb(145, 145, 145)", fontSize: "20px" }}>
								 				<ul style={{margin: "0px", padding: "0px"}}>
								 					<li className="w3-left">
								 					<label className="w3-white">Email : giriharan777@gmail.com</label></li>
								 					<br />
								 					<li className="w3-left">
								 					<label className="w3-white">Mobile &amp; Whats app : 7358873120</label>
								 					</li>
								 				</ul>
									 		</p>
							 			</div>
							 			<div className="w3-col s12 m7 l7">
								 			<p style={{color: "rgb(145, 145, 145)", fontSize: "20px"  }}>
								 				<ul style={{margin: "0px", padding: "0px"}}>
								 					<li className="w3-left">
								 					<label className="w3-white">Linked In: <a href="https://www.linkedin.com/in/giri-402a99134" >https://www.linkedin.com/in/giri-402a99134 </a></label></li><br />
								 					<li className="w3-left">
														<label className="w3-white">Github: <a href="https://github.com/gethgiri" >https://github.com/gethgiri</a></label>
								 					</li>
								 				</ul>
									 		</p>
							 			</div>
						 			</div>
						 		</div>
						 		</div>
						 		</div>
						 		</div>
					 		</section>
				 		</div>
				 		<footer className="footer-section">
				 		<label className="w3-display-middle">©	Giriharan D</label>
				 		<br /><br /><br /><br />
				 		<button className="w3-button w3-black w3-hover-cyan"
				 		onClick={this.goTop.bind(this)}>
				 		Go To Top
				 		</button>
				 		</footer></div>
			</div>
		);
	}
}

export default HomePage;