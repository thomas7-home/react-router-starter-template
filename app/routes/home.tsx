import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "BiteDex | Snap, Track, and Optimize" },
		{ name: "description", content: "BiteDex - AI-Powered Nutrition Tracking" },
	];
}

export default function Home() {
	return (
		<div className="antialiased selection:bg-emerald-500 selection:text-white bg-[#0f172a] text-slate-100 min-h-screen font-sans">
			{/* Navigation */}
			<nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex-shrink-0 flex items-center gap-2">
							<span className="text-2xl">🥗</span>
							<span className="font-bold text-xl tracking-tight text-white">BiteDex</span>
						</div>
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-8">
								<a href="#features" className="hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
								<a href="#privacy" className="hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Privacy</a>
								<a href="#contact" className="hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
							</div>
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
					<div className="text-center">
						<h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-white">
							Know your food <br className="hidden md:block" />
							<span className="gradient-text">in a single snap.</span>
						</h1>
						<p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-400 mx-auto mb-10">
							BiteDex uses cutting-edge AI to identify meals, estimate macronutrients, and help you hit your daily goals effortlessly. Available soon on the Play Store.
						</p>
						<div className="flex justify-center gap-4">
							<a href="#" className="px-8 py-4 text-base font-semibold rounded-full text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-[0_0_30px_rgba(52,211,153,0.3)]">
								Get Early Access
							</a>
							<a href="#privacy" className="px-8 py-4 text-base font-semibold rounded-full text-white bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700">
								Read Privacy Policy
							</a>
						</div>
					</div>

					{/* Decorative blur elements */}
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
					<div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
				</div>
			</section>

			{/* Features Section */}
			<section id="features" className="py-20 bg-slate-800/50 border-y border-slate-800">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center mb-16 text-white">Smart Nutrition Tracking</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-colors">
							<div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
								<svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-3 text-white">AI Vision</h3>
							<p className="text-slate-400">Just point your camera. Our Gemini-powered AI identifies meals and ingredients instantly.</p>
						</div>
						<div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
							<div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
								<svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-3 text-white">Macro Estimation</h3>
							<p className="text-slate-400">Get detailed estimates for calories, protein, carbs, and fat alongside precise micronutrients.</p>
						</div>
						<div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-colors">
							<div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
								<svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-3 text-white">Pantry Management</h3>
							<p className="text-slate-400">Scan your fridge or pantry to automatically inventory your ingredients for smarter meal prep.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Privacy Policy Section */}
			<section id="privacy" className="py-20 lg:py-32">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 shadow-xl">
						<h2 className="text-3xl font-bold mb-8 text-white">Privacy Policy</h2>

						<div className="space-y-6 text-slate-300 leading-relaxed text-sm md:text-base">
							<p><strong className="text-white">Last Updated: March 2026</strong></p>

							<p>Welcome to BiteDex ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our mobile application (the "App") and website (BiteDex.com). This Privacy Policy explains how we collect, use, and protect your information.</p>

							<h3 className="text-xl font-bold text-white mt-8 mb-4">1. Information We Collect</h3>
							<ul className="list-disc pl-5 space-y-2">
								<li><strong className="text-white">Account Information:</strong> If you sign up using email or social login (Google), we collect basic profile information like your name, email address, and profile picture.</li>
								<li><strong className="text-white">Camera & Photos:</strong> When you use our scanning features, we analyze the photos you take within the App to identify food items. These images are processed using third-party AI services (Google Gemini).</li>
								<li><strong className="text-white">Health Data:</strong> With your explicit permission, we integrate with Health Connect, Apple Health, or Google Fit to read basic fitness data and write nutritional data. We do not use this data for advertising.</li>
								<li><strong className="text-white">Usage Analytics & Crash Logs:</strong> We use Firebase Analytics and Crashlytics to monitor app stability and understand usage patterns to improve the app.</li>
							</ul>

							<h3 className="text-xl font-bold text-white mt-8 mb-4">2. How We Use Your Information</h3>
							<ul className="list-disc pl-5 space-y-2">
								<li>To provide and maintain the core functionality of the App (e.g., logging meals, analyzing macronutrients).</li>
								<li>To synchronize your nutritional data with your chosen health APIs (e.g., Health Connect).</li>
								<li>To improve app stability and AI accuracy through anonymized usage data.</li>
							</ul>

							<h3 className="text-xl font-bold text-white mt-8 mb-4">3. Data Sharing and Third Parties</h3>
							<p>We do not sell your personal data. We may share limited data with trusted third-party service providers solely to operate our service:</p>
							<ul className="list-disc pl-5 space-y-2">
								<li><strong className="text-white">Google Cloud & Gemini:</strong> For securely authenticating users, hosting databases, and running AI image analysis.</li>
								<li><strong className="text-white">Firebase:</strong> For crash reporting and analytics.</li>
							</ul>

							<h3 className="text-xl font-bold text-white mt-8 mb-4">4. Data Retention and Deletion</h3>
							<p>We retain your data as long as your account is active. You can request account deletion directly within the App settings or by contacting us. Upon request, we will delete your personal data within 30 days.</p>

							<h3 className="text-xl font-bold text-white mt-8 mb-4">5. Contact Us</h3>
							<p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
							<p className="font-mono text-emerald-400">privacy@bitedex.com</p>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer id="contact" className="bg-slate-950 py-12 border-t border-slate-900 text-center">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-center gap-2 mb-6 text-slate-400">
						<span className="text-xl">🥗</span>
						<span className="font-bold text-lg text-white">BiteDex</span>
					</div>
					<p className="text-slate-500 mb-6">info@bitedex.com | BiteDex.com</p>
					<p className="text-slate-600 text-sm">
						&copy; {new Date().getFullYear()} BiteDex. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
