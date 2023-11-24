import './Resume.css'
import flexwork from "../../assets/projects/flexwork.jpg";
import Doggy1 from "../../assets/projects/Doggy2.jpg";
import Doggy2 from "../../assets/projects/Doggy1.jpg";
import Doggy3 from "../../assets/projects/Doggy3.jpg";
import RyM from "../../assets/projects/RyM.jpg";
import Cert from "../../assets/docs/Certificado.png"
import { useState } from "react";

const Resume = () => {

	const [showPreview, setShowPreview] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);


	const handleImageClick = (imageSrc) => {
		setSelectedImage(imageSrc);
		setShowPreview(true);
	};

	const closePreview = () => {
		setShowPreview(false);
		setSelectedImage(null);
	};


	return (
		<div>
			<section id="resume">

				<div className="resume-header">
					<h5>Experience</h5>
					<h1>More of my path</h1>
					<p className="lead">With my FullStack approach, I not only have the ability to develop attractive and intuitive applications, but also to ensure that they work efficiently and adapt perfectly to the needs of my clients and users.</p>
				</div>

				<div>

					<div className="title-work">
						<h2>Proyect Experience</h2>
					</div>

					<div>
						<div className="timeline-wrap">

							<div className="timeline-block">
								<div className="timeline-header">
									<h3>Backend Developer</h3>
									<p>Oct 2023</p>
								</div>
								<div className="timeline-content">
									<h4>
										<a href="https://front-virid-sigma.vercel.app/">Flexwork</a>
									</h4>
									<p className="p-information">Website created to match experts on different fields of work with companies requiring professionals of all fields in Perú across the whole country with a payment system for the Flexwork company to act as a middleman between the company and professional, this website was made with React.js, Redux Toolkit, Material UI, Node.js, Sequelize.js, PostgresSQL, Express.js  technologies.</p>
									<figure className='figureImg'>
										<img className='imgPhoto' src={flexwork} onClick={() =>
											handleImageClick(flexwork)
										} />
										<figcaption>Front-End</figcaption>
									</figure>
								</div>
								{showPreview && (
									<div className="image-preview-overlay" onClick={closePreview}>
										<div className="image-preview">
											<img
												src={selectedImage}
												alt="Preview"
												className="preview-image"
												onClick={(e) => e.stopPropagation()} // Evita que el clic se propague al contenedor y cierre la vista previa
											/>
										</div>
									</div>
								)}

							</div>

							<div className="timeline-block">
								<div className="timeline-header">
									<h3>FullStack Developer</h3>
									<p>Sept 2023</p>
								</div>
								<div className="timeline-content">
									<h4>
										<a href="">The Doggy Explorer Project</a>
									</h4>
									<p className="p-information">Application developed to manage a new way of managing a health center, through monthly paid subscriptions. Direct interaction between client and different health specialists. Complete database development and updated information dashboard.</p>
									<figure className='figureImg'>
										<img className='imgPhoto' src={Doggy1} onClick={() =>
											handleImageClick(Doggy1)
										} />
										<figcaption>Front-End: Pic 1</figcaption>
									</figure>
									<figure className='figureImg'>
										<img className='imgPhoto' src={Doggy2} onClick={() =>
											handleImageClick(Doggy2)
										} />
										<figcaption>Front-End: Pic 2</figcaption>
									</figure>
									<figure className='figureImg'>
										<img className='imgPhoto' src={Doggy3} onClick={() =>
											handleImageClick(Doggy3)
										} />
										<figcaption>Front-End: Pic 3</figcaption>
									</figure>
								</div>
								{showPreview && (
									<div className="image-preview-overlay" onClick={closePreview}>
										<div className="image-preview">
											<img
												src={selectedImage}
												alt="Preview"
												className="preview-image"
												onClick={(e) => e.stopPropagation()} // Evita que el clic se propague al contenedor y cierre la vista previa
											/>
										</div>
									</div>
								)}
							</div>

							<div className="timeline-block">
								<div className="timeline-header">
									<h3>FullStack Developer</h3>
									<p>Aug 2023</p>
								</div>
								<div className="timeline-content">
									<h4>
										<a href="">Rick & Morty App</a>
									</h4>
									<p className="p-information">Application developed to manage a new way of managing a health center, through monthly paid subscriptions. Direct interaction between client and different health specialists. Complete database development and updated information dashboard.</p>
									<figure className='figureImg'>
										<img className='imgPhoto' src={RyM} onClick={() =>
											handleImageClick(RyM)
										} />
										<figcaption>Log In</figcaption>
									</figure>
									{showPreview && (
										<div className="image-preview-overlay" onClick={closePreview}>
											<div className="image-preview">
												<img
													src={selectedImage}
													alt="Preview"
													className="preview-image"
													onClick={(e) => e.stopPropagation()} // Evita que el clic se propague al contenedor y cierre la vista previa
												/>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div>
					<div className="title-work">
						<h2>Education</h2>
					</div>

					<div>
						<div className="timeline-block">
							<div className="timeline-header">
								<h3>Course: Blockchain & Solidity</h3>
								<p>Oct 2023</p>
							</div>
							<div className="timeline-content">
								<h4>Platzi</h4>
								<p>I learn about Blockchain technology & Solidity as a programming language for aplications in Dapps.</p>
							</div>
						</div>
						<div>
							<div className="timeline-block">
								<div className="timeline-header">
									<h3>BootCamp</h3>
									<p>Jul 2023 - Oct 2023</p>
								</div>
								<div className="timeline-content">
									<h4> Soy Henry</h4>
									<p>FullStack Developer Intensive Course of 800 hours of practical and theoretical development in technologies such as Javascript, ReactJS, PostgreSQL, Sequelize, Tailwind, Redux, Express, NodeJs, among others.
										Algorithms and data structure related to programming are also studied.</p>
									<figure className='figureImg'>
										<img className='imgPhoto' src={Cert} onClick={() =>
											handleImageClick(Cert)
										} />
										<figcaption>Diploma</figcaption>
									</figure>
									{showPreview && (
										<div className="image-preview-overlay" onClick={closePreview}>
											<div className="image-preview">
												<img
													src={selectedImage}
													alt="Preview"
													className="preview-image"
													onClick={(e) => e.stopPropagation()} // Evita que el clic se propague al contenedor y cierre la vista previa
												/>
											</div>
										</div>
									)}
								</div>
							</div>


						</div>
					</div>
				</div>
			</section>


		</div>


	)
}

export default Resume

/*
<figure className='figureImg'>
										<img className='imgPhoto' src={flexwork} alt="Descripción de la imagen 1"/>
											<figcaption>Imagen 1</figcaption>
									</figure>
									*/