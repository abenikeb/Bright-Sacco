import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/cusor";
import LoadingScreen from "@/components/common/loader";
import Footer from "@/components/common/Footer";
import Marq2 from "@/components/common/Marq2";
import Navbar from "@/components/common/Navbar";
import Script from "next/script";
import Clients from "@/components/common/Clients";
import Services from "@/components/home-digital-agency/Services";
import Intro2 from "@/components/home-digital-agency/Intro2";
import Testimonials from "@/components/home-digital-agency/Testimonials";
import Testimonialss from "@/components/home-creative-agency/Testimonials";

import Blog from "@/components/home-digital-agency/Blog";
import Header from "@/components/page-publication/HeaderTestimonaial";
import Numbers from "@/components/page-services/Numbers";
import Marq from "@/components/home-personal/Marq";

export const metadata = {
	title: "Bright Sacco",
	icons: {
		icon: "/assets/imgs/favicon.ico",
		shortcut: "/assets/imgs/favicon.ico",
		other: generateStylesheetObject([
			"/assets/css/plugins.css",
			"/assets/css/style.css",
			"https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
			"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap",
		]),
	},
};

export default function Home() {
	return (
		<body>
			{/* <LoadingScreen /> */}
			<Cursor />
			<ProgressScroll />
			<Lines />
			<Navbar />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main className="main-bg o-hidden">
						<Header />
						<div className="research-publication-container">
							<div className="research-publication-list">
								<div className="research-publication-item">
									<i className="fas fa-file-pdf"></i>
									<div className="research-publication-info secondary-color">
										<h3>ብራይት ቡክሌት</h3>
										<p>Bright Booklet</p>
									</div>
									<div className="research-publication-buttons">
										<a
											href="/Bright_Booklet.pdf"
											className="research-publication-download"
											download>
											አውርድ
										</a>
										<a
											href="/Bright_Booklet.pdf"
											target="_blank"
											rel="noopener noreferrer"
											className="research-publication-read">
											አንብብ
										</a>
									</div>
								</div>
								<div className="research-publication-item">
									<i className="fas fa-file-word"></i>
									<div className="research-publication-info secondary-color">
										<h3>የማመልከቻ ቅጽ</h3>
										<p>የማመልከቻ ቅጽ</p>
									</div>
									<div className="research-publication-buttons">
										<a
											href="/Application_Form.pdf"
											className="research-publication-download"
											download>
											አውርድ
										</a>
										<a
											href="/Application_Form.pdf"
											target="_blank"
											rel="noopener noreferrer"
											className="research-publication-read">
											አንብብ
										</a>
									</div>
								</div>
							</div>
						</div>
						{/* <Services />
						<Intro2 /> */}
						{/* <Numbers /> */}
						{/* <Testimonials />
						<Testimonialss /> */}
						{/* <Clients />
						<Blog /> */}
						<Marq />
					</main>
					<Footer />
				</div>
			</div>

			<Script
				src="/assets/js/ScrollTrigger.min.js"
				strategy="beforeInteractive"
			/>
			<Script
				src="/assets/js/ScrollSmoother.min.js"
				strategy="beforeInteractive"
			/>

			<Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
			<Script
				strategy="beforeInteractive"
				src="/assets/js/TweenMax.min.js"></Script>
			<Script
				strategy="beforeInteractive"
				src="/assets/js/charming.min.js"></Script>
			<Script
				strategy="beforeInteractive"
				src="/assets/js/countdown.js"></Script>

			<Script
				strategy="beforeInteractive"
				src="/assets/js/gsap.min.js"></Script>
			<Script
				strategy="beforeInteractive"
				src="/assets/js/splitting.min.js"></Script>
			<Script
				strategy="beforeInteractive"
				src="/assets/js/isotope.pkgd.min.js"></Script>
			<Script
				strategy="beforeInteractive"
				src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"></Script>

			{/* <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" /> */}

			<Script src="/assets/js/scripts.js"></Script>
		</body>
	);
}
