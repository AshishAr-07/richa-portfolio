"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Award, House, Menu, MessageCircle, UserRound, X } from "lucide-react";

const navigation = [
	{ label: "Home", href: "#home", icon: House },
	{ label: "My Works", href: "#work", icon: Award },
	{ label: "About Me", href: "#about", icon: UserRound },
	{ label: "Why Work with Me", href: "#whyworkwithme", icon: MessageCircle },
];

export default function Header() {
	const [activeSection, setActiveSection] = useState("home");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		let frameId;
		const sections = navigation
			.map(({ href }) => document.querySelector(href))
			.filter(Boolean);

		const updateActiveSection = () => {
			frameId = undefined;
			const marker = window.scrollY + window.innerHeight * 0.65;
			const currentSection = sections.reduce((current, section) => {
				return section.offsetTop <= marker ? section : current;
			}, sections[0]);

			if (currentSection) {
				setActiveSection((activeSection) =>
					activeSection === currentSection.id ? activeSection : currentSection.id
				);
			}
		};

		const handleScroll = () => {
			if (!frameId) {
				frameId = window.requestAnimationFrame(updateActiveSection);
			}
		};

		updateActiveSection();
		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleScroll);
			if (frameId) window.cancelAnimationFrame(frameId);
		};
	}, []);

	const handleNavigation = (event, sectionId) => {
		event.preventDefault();
		const section = document.getElementById(sectionId);

		if (!section) return;

		setActiveSection(sectionId);
		setIsMenuOpen(false);
		window.history.replaceState(null, "", `#${sectionId}`);
		section.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:px-8">
			<nav className="relative mx-auto flex w-fit max-w-full items-center gap-1 rounded-full border border-white/10 bg-black/80 p-1.5 shadow-2xl shadow-black/30 backdrop-blur-xl">
				{navigation.map(({ label, href, icon: Icon }) => {
					const sectionId = href.slice(1);
					const isActive = activeSection === sectionId;

					return (
						<Link
							key={label}
							href={href}
							onClick={(event) => handleNavigation(event, sectionId)}
							className={`${sectionId !== "home" ? "hidden md:flex" : "flex"} shrink-0 items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition-all duration-300 md:px-5 ${
								isActive
									? "bg-white text-black shadow-lg shadow-white/10"
									: "text-white/75 hover:bg-white/10 hover:text-white max-md:bg-white max-md:text-black"
							}`}
						>
							<Icon size={20} strokeWidth={2} />
							<span>{label}</span>
						</Link>
					);
				})}

				<button
					type="button"
					onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
					aria-expanded={isMenuOpen}
					aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
					className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white/75 transition-colors hover:bg-white/10 hover:text-white md:hidden"
				>
					{isMenuOpen ? <X size={21} /> : <Menu size={21} />}
				</button>

				{isMenuOpen && (
					<div className="absolute right-0 top-[calc(100%+0.6rem)] min-w-56 rounded-2xl border border-white/10 bg-black/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden">
						{navigation.slice(1).map(({ label, href, icon: Icon }) => {
							const sectionId = href.slice(1);

							return (
								<Link
									key={label}
									href={href}
									onClick={(event) => handleNavigation(event, sectionId)}
									className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-white/75 transition-colors hover:bg-white/10 hover:text-white"
								>
									<Icon size={18} />
									<span>{label}</span>
								</Link>
							);
						})}
					</div>
				)}
			</nav>
		</header>
	);
}
