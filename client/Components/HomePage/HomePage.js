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
				<div className="portfolio-header-page">

				 
					<label className="w3-display-middle" style={{fontSize:"52px"}}> <hr/>  UI Developer & designer  <hr/> </label>
				
               </div>

				<div className={"portfolio-navigation w3-bar " + addCls}>
				
				 	<button className="w3-button w3-teal w3-large tile-icon"
				 	onClick={this.showNavigationSelection.bind(this)}>☰</button>
				  	<div className={"header-right " + showNavCls}>
						<a>HOME </a>
						<a>ABOUT ME </a>
						<a>SKILLS </a>
						<a>RESUME </a>
						<a>CONTACT US </a>
					</div>
				</div>

				<div>
					<section style={{backgroundColor:"#2424"}}>
						<div className="">
						
							<div className="w3-col s12 m12 l6">
								<h1 style={{marginLeft:"100px"}}>GOALS</h1>
								<p className="w3-left" style={{fontSize:"16px",marginLeft:"120px"}}>
									My dream or goal whatever. i would like to create a full application
									from A to z. from 0 to every thing own idea designing, frontend,
									Backend, hosting.i believe experience and learning give everything.
						   	    </p>
							</div>
							<div className="w3-col s12 m12 l6">
								<h1 style={{marginLeft:"100px"}} >HOBBIES</h1>
								
								<img style={{width:"450px",height:"200px",marginLeft:"120px"}} src="./assets/ring.png" alt="logo" /><br/><br/>

								<label style={{marginLeft:"140px"}}>
									 Sports is my only HOBBIES
						   	    </label>
							</div>
						</div>
					</section>
					<section className="about-section w3-container w3-row" style={{backgroundColor:"#2424"}}>
						
			                <div className="w3-container w3-padding-16">
					   	    	<div className="w3-row">
					   	    		<div className="">
					   	    			
					   	    			<h1>My Work</h1>
					   	    			<label>
											Here I add some of my work during the learings.
								   	    </label> <br/>
								   	   <div className="w3-row">
								   	       <div className="w3-col l6 m12 s12">
								   	        		<img src="./assets/Screen 1.png" style={{width:"600px",padding:"10px"}}/>
								   	       </div>

								   	        <div className="w3-col l6 m12 s12">
								   	        		<img src="./assets/Screen 3.png" style={{width:"600px",padding:"10px"}}/>
								   	        </div>
								   	   </div>

								   	    <div className="w3-row">
								   	       <div className="w3-col l6 m12 s12">
								   	        		<img src="./assets/Screen 2.png" style={{width:"600px",padding:"10px"}}/>
								   	       </div>

								   	        <div className="w3-col l6 m12 s12">
								   	        		<img src="./assets/Screen 4.png" style={{width:"600px",padding:"10px"}}/>
								   	        </div>
								   	   </div>

								   	   </div>
					   	    		</div>
					   	    		
					   	    	</div>
					   	    	
					   	  
						
					</section>
					<section className="skillset-section" style={{backgroundColor:"#dbecd5"}}>
						<div className="w3-container w3-row">
						    <div className="background2">
							<div className="w3-col s12 m12 l6 w3-left w3-padding-16">
								<h1 className="skills-highlight">SKILLS</h1>
								<label>
									Here i mentioned some of my knowledge level of particular skills. I put it on my own knowledge 
						   	    </label>
							</div>
							<div className="w3-col s12 m12 l6">
								<label>Illustrator</label><br />
								<div className="w3-light-grey">
								  <div className="w3-container w3-green w3-center" style={{width: "80%"}}>80%</div>
								</div><br />
								<label>CSS</label><br />
								<div className="w3-light-grey">
								  <div className="w3-container w3-green w3-center" style={{width: "75%"}}>75%</div>
								</div><br />
								<label>React js</label><br />
								<div className="w3-light-grey">
								  <div className="w3-container w3-green w3-center" style={{width: "80%"}}>80%</div>
								</div><br />
								<label>JavaScript</label><br />
								<div className="w3-light-grey">
								  <div className="w3-container w3-green w3-center" style={{width: "80%"}}>80%</div>
								</div>
							</div>
						  </div>
						</div>
					</section>
					<section className="resume-section w3-center " style={{background: "#f2f2f1"}}>
						
							<div className="w3-content w3-display-container resume-arrow">
							<h1 className="resume-highlight">RESUME</h1>
							<label>
								For further more details about me .i attached my resume with it.
								please kindly have a look at this. may be i am the person you are looking for. 
						   </label><br /><br />
						   <a href="upload/Resume.pdf" download="Resume.pdf">
						   <button className="portfolio-button-primary w3-button w3-center w3-hover-none"
						   	style={{border: "1px solid green", color: "green"}}>
						   	DOWNLOAD RESUME
							</button>
							</a>
						</div>
					</section>
					<section className="work-experience-section">
						<div className="w3-container">
							<h1 className="work-highlight w3-left">WORK EXPERIENCE</h1>
							<br />
							<div className="w3-row">
								<div className="w3-col s12 m12 l6 w3-padding-16">
								<label>
										I Started my carrer as a technical guy
										i have much more intrested in hardwares.
										so I decided to choses this field. later 
										i started focussing on all the domains. 
								</label>
								</div>
								<div className="w3-col s12 m12 l6 w3-row">
									<div className="w3-card w3-col s12 m12 l12 w3-padding-16 w3-container"
									style={{marginBottom: "22px"}}>
										<h1 className="w3-center company-highlight">Airlet softwares</h1>
										
										<br />
										<label>Position:   ATE (Tech Engg)</label><br/>
										<label>Position:   Part time (UI Designer)</label>
									</div>
								</div>
							</div>
						</div>
					</section>
					
					<section className="contact-section">
						<div className="parallax w3-row w3-container">
							<div className="w3-col s12 m12 l6 w3-padding-16 w3-left">
								<h1 className="contact-highlight w3-center" style={{color: "#fff"}}>CONTACT ME</h1>
								<div className="">
								<div className="contact-information">
									<label style={{color: "#919191"}}>
										Email : saravanan.r2394@gmail.com <br />
										Mobile & Whats app : 9487789913<br />
									</label>
								</div>
								</div>
							</div>
							<div className="w3-col s12 m12 l6 w3-padding-16">
								<form>
									<div className="w3-row">
										<label style={{color: "#fff"}}>Name  </label><mark>*</mark><br />
										<input type="text" placeholder="Name here...." className="contact-fields" />
									</div><br />
									<div className="w3-row">
										<label style={{color: "#fff"}}>E-Mail  </label><mark>*</mark><br />
										<input type="text" placeholder="E-Mail here...." className="contact-fields" />
									</div><br />
									<div className="w3-row">
										<label style={{color: "#fff"}}>Message  </label><mark>*</mark><br />
										<textarea className="contact-fields" rows="10" />
									</div>
									<div className="w3-row" style={{paddingTop: "20px"}}>
									   <button className="portfolio-button-primary w3-button w3-left w3-hover-none"
									   	style={{background: "#191f21", color: "white", border: "none"}}>
									   	CONTACT ME
										</button>
									</div>
								</form>
							</div>
						</div>
					</section>
					<footer className="footer-section">
						<label className="w3-display-middle">&copy; 2018 Saravanan r</label>
					</footer>
				</div>


			</div>
		);
	}
}

export default HomePage;