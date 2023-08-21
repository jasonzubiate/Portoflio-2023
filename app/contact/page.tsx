"use client";

import { emailRedirect } from "@/utils";
import "@/styles/ContactPage.css";
import { Footer, PageHeader } from "@/components";

import { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

export default function page() {
	useEffect(() => {
		let tl = gsap.timeline({
			defaults: { ease: "power2", delay: 0.1 },
		});
		const textLines = document.querySelectorAll(".link");

		textLines.forEach((textLine: any) => {
			const split = new SplitType(textLine, {
				types: "chars",
			});
		});

		tl.from(".catchline", {
			duration: 1,
			opacity: 0,
			stagger: 0.1,
		});
		tl.from(".link .char", {
			duration: 1,
			yPercent: 100,
			stagger: 0.1,
		});
	});

	return (
		<div id="contact-page" className="fade-in">
			<section id="contact-landing">
				<PageHeader />
				<div className="content">
					<div className="cta-group">
						<h4 className="text-m catchline">Send me a message</h4>
						<div className="mask">
							<button className="text-2xl link" onClick={emailRedirect}>
								jzubiate.dev@gmail.com
							</button>
						</div>
					</div>
					<div className="cta-group">
						<h4 className="text-m catchline">Or connect with me elsewhere</h4>
						<div className="links">
							<a
								className="text-2xl link"
								href="https://www.linkedin.com/in/jasonzubiate/"
							>
								LinkedIn
							</a>
							<a
								className="text-2xl link"
								href="https://github.com/jasonzubiate?tab=repositories"
							>
								Github
							</a>
							<a
								className="text-2xl link"
								href="https://dribbble.com/jasonzubiate"
							>
								Dribbble
							</a>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}
