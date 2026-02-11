import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import {
    Brain,

    ChevronRight,
    LayoutDashboard,
    Target,

    MessageSquare,
    Zap,
    ExternalLink,
    User
} from 'lucide-react';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-royal-blue/30">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
                    <a href="#" className="flex items-center gap-3 group cursor-pointer" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                        <img src="/logos/Altera/Altera-Logo-Cropped.png" alt="Altera Labs" className="h-14 group-hover:opacity-80 transition-opacity" />
                    </a>

                    <div className="hidden md:flex items-center gap-10">
                        <a href="#problem" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">The Problem</a>
                        <a href="#solution" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Our Solution</a>
                        <a href="#product" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Product</a>
                        <a href="#traction" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Traction</a>
                        <a href="https://altera-labs.web.app" target="_blank" rel="noopener noreferrer">
                            <button className="bg-royal-blue hover:bg-royal-blue/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:shadow-[0_0_20px_rgba(71,110,227,0.3)]">
                                Try the Beta
                            </button>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header id="mission" className="relative pt-40 pb-24 px-8 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-royal-blue/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px]"></div>
                </div>

                <div className="max-w-7xl mx-auto text-center">


                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-[0.95] text-white">
                        State-Aware AI <br />
                        <span className="text-zinc-100">Tutoring for STEM.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                        Helping educators and students utilize AI to create a smarter, more efficient world.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
                        <a href="https://altera-labs.web.app" target="_blank" rel="noopener noreferrer">
                            <button className="bg-royal-blue hover:bg-royal-blue/90 text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 group transition-all text-base hover:shadow-lg hover:shadow-royal-blue/20 border border-white/5">
                                Try the Beta
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>
                        <a href="#problem" className="text-zinc-400 hover:text-white font-bold text-sm transition-all uppercase tracking-widest px-8 py-3 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5">
                            Our Mission
                        </a>
                    </div>
                </div>
            </header>

            {/* Partner / Trust Banner */}
            <div className="py-12 border-y border-white/5 bg-zinc-950">
                <div className="max-w-7xl mx-auto px-8">
                    <p className="text-center text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] mb-8">Institutional Partners & Support</p>
                    <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-8 md:gap-16 transition-opacity duration-300 w-full">
                        <a href="https://pavacenter.jhu.edu/programs/student-programs/fuel/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group whitespace-nowrap opacity-90 hover:opacity-100 transition-all hover:scale-105 origin-center">
                            <img src="/logos/JHU/JHU.logo_horizontal.white.svg" alt="JHU Logo" className="h-10 md:h-14" />
                            <div className="h-10 w-px bg-zinc-600 mx-1"></div>
                            <img src="/logos/JHU/pava_logo_stacked.svg" alt="Pava Center Shield" className="h-8 md:h-10" />
                            <div className="flex flex-col items-start leading-none gap-0.5 font-['Work_Sans']">
                                <span className="text-[10px] font-bold text-zinc-300 group-hover:text-white transition-colors uppercase tracking-wide">Pava Marie LaPere Center</span>
                                <span className="text-[10px] font-bold text-zinc-300 group-hover:text-white transition-colors uppercase tracking-wide">for Entrepreneurship</span>
                            </div>
                        </a>
                        <a href="https://www.nvidia.com/en-us/startups/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group whitespace-nowrap opacity-90 hover:opacity-100 transition-opacity">
                            <img src="/logos/NVIDIA/nvidia-inception-logo-cropped-white.png" alt="NVIDIA Inception" className="h-8 md:h-10 object-contain transition-transform group-hover:scale-105" />
                        </a>
                        <a href="https://cloud.google.com/startup" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group whitespace-nowrap opacity-90 hover:opacity-100 transition-opacity">
                            <img src="/logos/Google/gcloud-cropped-white.png" alt="Google Cloud Startup" className="h-8 md:h-10 object-contain transition-transform group-hover:scale-105" />
                        </a>
                        <a href="https://www.instructure.com/canvas" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group whitespace-nowrap opacity-90 hover:opacity-100 transition-all hover:scale-105 origin-center transform-gpu">
                            <img src="/logos/Canvas/Canvas_Horizontal_Full-Color_RGB-cropped-white.png" alt="Canvas" className="h-7 md:h-9 object-contain" />
                            <div className="flex flex-col leading-none gap-0.5">
                                <span className="text-[9px] font-bold tracking-wide text-zinc-300 group-hover:text-white transition-colors uppercase">Integrated Tier</span>
                                <span className="text-[9px] font-bold tracking-wide text-zinc-300 group-hover:text-white transition-colors uppercase">Partner</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* The Problem Section */}
            <section id="problem" className="py-24 px-8 border-b border-white/5 bg-zinc-950/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-royal-blue font-bold text-xs uppercase tracking-widest mb-4 block">The Crisis</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">The Substitution Model.</h2>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                Current AI tools create a "substitution" effect where students bypass critical reasoning.
                                We are seeing a 75% reduction in critical thinking and a "black box" of learning loss that leaves faculty blind.
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <p className="text-2xl font-bold text-white mb-1">86%</p>
                                    <p className="text-[9px] text-zinc-500 uppercase font-bold tracking-wider leading-tight">of students use AI tools</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <p className="text-2xl font-bold text-white mb-1">75%</p>
                                    <p className="text-[9px] text-zinc-500 uppercase font-bold tracking-wider leading-tight">report weaker critical thinking</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <p className="text-2xl font-bold text-white mb-1">73%</p>
                                    <p className="text-[9px] text-zinc-500 uppercase font-bold tracking-wider leading-tight">depend on AI over own skills</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <p className="text-2xl font-bold text-white mb-1">70%</p>
                                    <p className="text-[9px] text-zinc-500 uppercase font-bold tracking-wider leading-tight">encounter AI misinformation</p>
                                </div>
                            </div>
                            <a href="https://www.mdpi.com/2075-4698/15/1/6" target="_blank" rel="noopener noreferrer" className="text-zinc-600 text-[10px] mt-3 inline-block hover:text-zinc-400 transition-colors">
                                Source: Gerlich, 2025 — AI Tools in Society (n=666) <ExternalLink className="w-2.5 h-2.5 inline ml-0.5" />
                            </a>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-royal-blue/20 blur-[80px] -z-10"></div>
                            <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl skew-y-1">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <p className="text-xs font-mono text-zinc-500 uppercase">Input: Homework Problem #4</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 italic text-zinc-500 text-sm">
                                        Here is the answer. Don't worry about the proof steps.
                                    </div>
                                    <div className="flex justify-end">
                                        <div className="px-4 py-2 rounded-lg bg-red-500/10 text-red-400 text-[10px] font-bold uppercase tracking-widest border border-red-500/20">
                                            Stateless Answer Machine
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 pt-8 border-t border-zinc-800">
                                    <p className="text-sm font-bold text-zinc-400 mb-2">Outcome: Student bypasses reasoning entirely</p>
                                    <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                                        <div className="h-full w-1/4 bg-zinc-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Solution Section */}
            <section id="solution" className="py-24 px-8 bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div className="order-2 md:order-1 relative">
                            <div className="absolute inset-0 bg-royal-blue/20 blur-[80px] -z-10"></div>
                            <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl -skew-y-1 overflow-hidden">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-royal-blue/50"></div>
                                    </div>
                                    <span className="text-[10px] font-mono text-royal-blue bg-royal-blue/10 px-3 py-1 rounded-full uppercase font-bold">State-Aware Mode</span>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-zinc-700 flex-shrink-0 flex items-center justify-center">
                                            <User className="w-4 h-4 text-zinc-400" />
                                        </div>
                                        <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-300">
                                            How do I solve for displacement?
                                        </div>
                                    </div>
                                    <div className="flex gap-4 justify-end">
                                        <div className="p-4 rounded-2xl bg-royal-blue/10 border border-royal-blue/20 text-xs text-zinc-200 italic max-w-[80%]">
                                            Instead of the answer, let's look at your knowledge graph. You master Velocity, but are struggling with Area Under the Curve. Let's explore the geometric relationship first.
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-royal-blue flex-shrink-0 flex items-center justify-center">
                                            <Brain className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 bg-zinc-800/20 p-4 rounded-xl border border-white/5">
                                    <div className="flex justify-between items-center mb-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                                        <span>Mastery Score</span>
                                        <span className="text-royal-blue">84%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                                        <div className="h-full w-[84%] bg-royal-blue animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <span className="text-royal-blue font-bold text-xs uppercase tracking-widest mb-4 block">Our Solution</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Adaptive Knowledge Tracking.</h2>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                Our engine builds a real-time, personalized model of each student's mastery.
                                This state-aware approach ensures deep understanding while providing faculty with precise,
                                actionable analytics to optimize teaching.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Bayesian Knowledge Tracing (BKT) Engine',
                                    'State-Aware Cognitive Modeling',
                                    'Institutional Insight Dashboard',
                                    'Integrated Tier Canvas Partner'
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-zinc-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-royal-blue shadow-[0_0_8px_rgba(71,110,227,1)]"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Faculty Testimonial */}
                            <div className="mt-10 p-5 rounded-2xl bg-white/[0.03] border border-white/10 relative">
                                <div className="absolute -top-3 left-5 px-3 py-0.5 bg-zinc-950 text-[9px] font-bold text-royal-blue uppercase tracking-widest">Faculty Endorsement</div>
                                <p className="text-zinc-400 text-sm leading-relaxed italic">
                                    "A tool that would be <strong className="text-zinc-200 not-italic">indispensable to me as an instructor</strong>."
                                </p>
                                <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-wider mt-3">— Prof. Kobe Marshall-Stevens, JHU Mathematics</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Section - Bento */}
            <section id="product" className="py-24 px-8 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 tracking-tight">Cognitive Architecture.</h2>
                        <p className="text-zinc-500 max-w-2xl mx-auto">A complete learning lifecycle powered by state-aware intelligence and institutional scale.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        {/* Phase 1: BKT Engine */}
                        <div className="md:col-span-8 bento-card p-10 flex flex-col justify-between group overflow-hidden relative">
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="p-2.5 bg-royal-blue/10 rounded-xl border border-royal-blue/20">
                                        <Target className="w-5 h-5 text-royal-blue" />
                                    </div>
                                    <span className="text-[11px] font-bold text-royal-blue uppercase tracking-[0.15em]">Core Engine</span>
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Bayesian Mastery Engine</h3>
                                <p className="text-zinc-400 text-base leading-relaxed max-w-md mb-8">
                                    Precision-weighted Bayesian fusion mathematically combines prior knowledge
                                    with real-time evidence to generate accurate concept mastery probabilities.
                                </p>
                            </div>

                            {/* BKT Equation */}
                            <div className="relative z-10 mt-auto">
                                <div className="p-5 rounded-2xl bg-zinc-900/80 border border-white/10 backdrop-blur-sm">
                                    <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Bayesian Knowledge Tracing Update</p>
                                    <div className="text-center overflow-x-auto [&_.katex]:text-white" dangerouslySetInnerHTML={{
                                        __html: katex.renderToString(
                                            String.raw`P(\textcolor{#476EE3}{L_n}) = P(\textcolor{#476EE3}{L_{n-1}} \mid \text{obs}) + \bigl(1 - P(\textcolor{#476EE3}{L_{n-1}} \mid \text{obs})\bigr) \cdot \textcolor{#34d399}{P(T)}`,
                                            { displayMode: true, throwOnError: false }
                                        )
                                    }} />
                                    <div className="flex gap-6 mt-3 justify-center [&_.katex]:text-zinc-600 [&_.katex]:text-[11px]">
                                        <span dangerouslySetInnerHTML={{ __html: katex.renderToString(String.raw`\textcolor{#476EE3}{L_n} = \text{Mastery}`, { throwOnError: false }) }} />
                                        <span dangerouslySetInnerHTML={{ __html: katex.renderToString(String.raw`\textcolor{#34d399}{P(T)} = \text{Transit}`, { throwOnError: false }) }} />
                                        <span dangerouslySetInnerHTML={{ __html: katex.renderToString(String.raw`\text{obs} = \text{Evidence}`, { throwOnError: false }) }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phase 2: FastAPI / Graph */}
                        <div className="md:col-span-4 bento-card p-10 flex flex-col group bg-zinc-900 border-zinc-800">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="p-2.5 bg-royal-blue/10 rounded-xl border border-royal-blue/20">
                                    <Zap className="w-5 h-5 text-royal-blue" />
                                </div>
                                <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.15em]">Infrastructure</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 leading-tight">Semantic Knowledge Graph</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                                Structured pedagogical graph (7-Edge Ontology) preventing hallucinations via map-based reasoning.
                            </p>
                            <div className="mt-auto flex items-center gap-3">
                                <div className="px-3 py-1 rounded bg-zinc-800 border border-white/5 text-[10px] font-bold text-zinc-400 uppercase">FastAPI</div>
                                <div className="px-3 py-1 rounded bg-zinc-800 border border-white/5 text-[10px] font-bold text-zinc-400 uppercase">Python</div>
                            </div>
                        </div>

                        {/* Phase 3 & 4: Socratic & Canvas */}
                        <div className="md:col-span-4 bento-card p-10 flex flex-col justify-between group">
                            <div>
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="p-2.5 bg-zinc-800/50 rounded-xl border border-zinc-700/50">
                                        <MessageSquare className="w-5 h-5 text-zinc-300" />
                                    </div>
                                    <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.15em]">Interface</span>
                                </div>
                                <h4 className="text-xl font-bold mb-2">Socratic AI Tutor</h4>
                                <p className="text-xs text-zinc-500 leading-relaxed uppercase font-bold tracking-widest italic">Guiding labor, not answers.</p>
                            </div>
                        </div>

                        <div className="md:col-span-4 bento-card p-10 flex flex-col justify-between group border-royal-blue/20">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <img src="/logos/Canvas/Canvas_Horizontal_Full-Color_RGB-cropped-white.png" alt="Canvas" className="h-8 object-contain" />
                                    <span className="text-[11px] font-bold text-royal-blue uppercase tracking-[0.15em]">Integrated Tier Partner</span>
                                </div>
                                <h4 className="text-xl font-bold mb-2">Canvas / LTI 1.3</h4>
                                <p className="text-[11px] text-zinc-500 font-medium">LTI Advantage certified integration with grade services.</p>
                            </div>
                        </div>

                        {/* Phase 5: Dashboard */}
                        <div className="md:col-span-4 bento-card p-10 flex flex-col justify-between group bg-royal-blue">
                            <div>
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="p-2.5 bg-white/10 rounded-xl border border-white/20">
                                        <LayoutDashboard className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-[11px] font-bold text-white/50 uppercase tracking-[0.15em]">Insights</span>
                                </div>
                                <h4 className="text-xl font-bold mb-2 text-white">Institutional Intelligence</h4>
                                <p className="text-sm text-white/70 leading-relaxed">Quantifiable impact on student retention for administrators.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Traction / Timeline Section */}
            <section id="traction" className="py-24 px-8 border-t border-white/5 bg-zinc-950">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-royal-blue font-bold text-[10px] uppercase tracking-widest mb-4 block">Our Journey</span>
                        <h2 className="text-4xl font-bold tracking-tight text-white">Traction & Milestones.</h2>
                    </div>

                    <div className="relative">
                        {/* Vertical Axis */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform md:-translate-x-1/2"></div>

                        <div className="space-y-12">
                            {/* 1. Dec 17, 2025: Canvas */}
                            <div className="relative flex flex-col md:flex-row items-center">
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-royal-blue rounded-full border-4 border-zinc-950 transform -translate-x-1/2 z-10"></div>

                                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-16 md:text-right">
                                    <span className="inline-block px-3 py-1 rounded-full bg-royal-blue/10 text-royal-blue text-[10px] font-bold uppercase tracking-wider mb-2">Dec 17, 2025</span>
                                    <h3 className="text-xl font-bold text-white mb-2">Integrated Tier Partnership</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed">
                                        Secured <strong className="text-zinc-200">Integrated Tier Partnership</strong> with Instructure. Verified LTI 1.3 standards implementation for seamless institutional LMS integration.
                                    </p>
                                </div>
                                <div className="hidden md:block md:w-1/2"></div>
                            </div>

                            {/* 2. Dec 7, 2025: JHU FUEL */}
                            <div className="relative flex flex-col md:flex-row items-center">
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-royal-blue rounded-full border-4 border-zinc-950 transform -translate-x-1/2 z-10"></div>

                                <div className="hidden md:block md:w-1/2"></div>
                                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-16 text-left">
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-zinc-400 text-[10px] font-bold uppercase tracking-wider mb-2">Dec 7, 2025</span>
                                    <h3 className="text-xl font-bold text-white mb-2">JHU FUEL Demo Day Win</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed mb-3">
                                        Winner of the <strong className="text-zinc-200">Audience Award</strong> at the 2025 Johns Hopkins FUEL Demo Day. Recognized for pedagogical innovation in applied AI.
                                    </p>
                                    <a href="https://pavacenter.jhu.edu/news/catching-up-with-the-fall-2025-fuel-winners/" target="_blank" rel="noopener noreferrer" className="text-royal-blue text-xs font-bold uppercase tracking-wider flex items-center gap-1 hover:text-white transition-colors mb-4">
                                        Read Article <ExternalLink className="w-3 h-3" />
                                    </a>
                                    <div className="rounded-xl overflow-hidden shadow-lg mt-4 group cursor-pointer">
                                        <div className="aspect-video relative">
                                            <img src="/logos/FUEL.JPEG" alt="JHU FUEL Demo Day Win" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100 transition-transform duration-700" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Late 2025: PROOF Pivot (Correction: Strategic Pivot) */}
                            <div className="relative flex flex-col md:flex-row items-center">
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-zinc-700 rounded-full border-4 border-zinc-950 transform -translate-x-1/2 z-10"></div>

                                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-16 md:text-right">
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-zinc-400 text-[10px] font-bold uppercase tracking-wider mb-2">Late 2025</span>
                                    <h3 className="text-xl font-bold text-white mb-2">The Strategic Pivot</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed">
                                        Strategic shift from "Verifiable AI" (Lean 4) to <strong className="text-zinc-200">State-Aware Cognitive Modeling</strong>.
                                        Prioritizing scalable mastery tracking over formal proof correctness.
                                    </p>
                                </div>
                                <div className="hidden md:block md:w-1/2"></div>
                            </div>

                            {/* 4. Q4 2025: Institutional Support */}
                            <div className="relative flex flex-col md:flex-row items-center">
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-zinc-700 rounded-full border-4 border-zinc-950 transform -translate-x-1/2 z-10"></div>

                                <div className="hidden md:block md:w-1/2"></div>
                                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-16 text-left">
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-zinc-400 text-[10px] font-bold uppercase tracking-wider mb-2">Q4 2025</span>
                                    <h3 className="text-xl font-bold text-white mb-2">Institutional Support</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                                        Accepted into elite startup programs to secure infrastructure and resources.
                                    </p>
                                    <div className="flex gap-4">
                                        <div className="px-3 py-1.5 rounded border border-white/10 bg-white/5 text-[10px] font-bold text-zinc-300">NVIDIA Inception</div>
                                        <div className="px-3 py-1.5 rounded border border-white/10 bg-white/5 text-[10px] font-bold text-zinc-300">Google Cloud</div>
                                    </div>
                                </div>
                            </div>

                            {/* 5. Nov 2025: Faculty Champion */}
                            <div className="relative flex flex-col md:flex-row items-center">
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-royal-blue rounded-full border-4 border-zinc-950 transform -translate-x-1/2 z-10"></div>

                                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-16 md:text-right">
                                    <span className="inline-block px-3 py-1 rounded-full bg-royal-blue/10 text-royal-blue text-[10px] font-bold uppercase tracking-wider mb-2">Nov 2025</span>
                                    <h3 className="text-xl font-bold text-white mb-2">Faculty Champion Endorsement</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                                        Secured endorsement from <strong className="text-zinc-200">Prof. Kobe Marshall-Stevens</strong> (JHU Mathematics) as primary Faculty Champion for the TEDCO Baltimore Innovation Initiative.
                                    </p>
                                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-left">
                                        <p className="text-zinc-400 text-sm leading-relaxed italic">
                                            "I strongly believe that the platform has potential to <strong className="text-zinc-200 not-italic">scale to large-scale classes with hundreds of students</strong>. I am hopeful that their platform will help to better shape university environments in the years to come."
                                        </p>
                                        <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-wider mt-3">— Prof. Kobe Marshall-Stevens</p>
                                    </div>
                                    <a href="/Altera Labs recommendation letter.pdf" target="_blank" rel="noopener noreferrer" className="text-royal-blue text-xs font-bold uppercase tracking-wider flex items-center gap-1 hover:text-white transition-colors mt-4 md:justify-end">
                                        Read Letter <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                                <div className="hidden md:block md:w-1/2"></div>
                            </div>

                            {/* 6. May 2025: Research Publication */}
                            <div className="relative flex flex-col md:flex-row items-center">
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-zinc-700 rounded-full border-4 border-zinc-950 transform -translate-x-1/2 z-10"></div>

                                <div className="hidden md:block md:w-1/2"></div>
                                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-16 text-left">
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-zinc-400 text-[10px] font-bold uppercase tracking-wider mb-2">May 2025</span>
                                    <h3 className="text-xl font-bold text-white mb-2">Research Foundation</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed mb-3">
                                        CEO publishes <strong className="text-zinc-200">"AI and Education: A Neurocognitive Perspective"</strong> at Johns Hopkins, establishing the scientific foundation for Altera's state-aware approach. The paper synthesizes research demonstrating a <strong className="text-zinc-200">significant negative correlation between AI tool use and critical thinking</strong> (<a href="https://www.mdpi.com/2075-4698/15/1/6" target="_blank" rel="noopener noreferrer" className="text-royal-blue hover:text-white transition-colors">Gerlich, 2025</a>).
                                    </p>
                                    <a href="/Artificial Intelligence and the Brain_ A Neurocognitive Perspective.pdf" target="_blank" rel="noopener noreferrer" className="text-royal-blue text-xs font-bold uppercase tracking-wider flex items-center gap-1 hover:text-white transition-colors">
                                        Read Paper <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-32 px-8 border-t border-white/5 bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold tracking-tight mb-4 text-white">Built by Altera Labs</h2>
                        <p className="text-zinc-500 font-medium max-w-2xl mx-auto">
                            Our founding team has raised over <strong className="text-zinc-200">$190,000</strong> for previous ventures from NIH, NSF I-Corps, JHU, and more.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                name: 'Peter Seelman',
                                role: 'CEO',
                                headshot: '/Headshots/Peter.jpg',
                                imgPosition: 'center 15%',
                                university: 'Johns Hopkins University',
                                degrees: 'BS, Physics | BA, Mathematics',
                                bio: 'AI researcher with experience at JHU Applied Physics Lab (APL) and NASA. Expert in multi-agent AI systems and B2B customer discovery.'
                            },
                            {
                                name: 'Alex Kroumov',
                                role: 'CFO',
                                headshot: '/Headshots/Alex.jpeg',
                                imgPosition: 'center 10%',
                                university: 'Johns Hopkins University',
                                degrees: 'BS/MSE, Biomedical Engineering | BS, Applied Mathematics & Statistics',
                                bio: 'JHU BME and Applied Math researcher specializing in entrepreneurship and financial management.'
                            },
                            {
                                name: 'Akira Lonske',
                                role: 'CTO, Lead Developer',
                                headshot: '/Headshots/Akira.jpeg',
                                imgPosition: 'center 45%',
                                university: 'Johns Hopkins University',
                                degrees: 'BS Computer Science | BS Applied Mathematics & Statistics',
                                bio: 'Former Amazon software engineer with expertise in full-stack development, AI systems, and rigorous software engineering practices.'
                            },
                            {
                                name: 'Qiyue (Chris) Yao',
                                role: 'Carey Strategic Venture Fellow',
                                headshot: '/Headshots/Chris.jpeg',
                                imgPosition: 'center 20%',
                                university: 'Johns Hopkins University, Carey Business School',
                                degrees: 'MS, Business Analytics and Artificial Intelligence',
                                bio: 'Strategic advisor specializing in business analytics, AI applications, and commercialization strategy.'
                            }
                        ].map((member) => (
                            <div key={member.name} className="rounded-3xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-900 transition-all cursor-pointer group hover:border-royal-blue/30 h-full flex flex-col overflow-hidden">
                                <div className="p-6 pb-0">
                                    <h4 className="text-xl font-bold text-zinc-100 mb-1">{member.name}</h4>
                                    <p className="text-royal-blue text-[10px] font-bold tracking-wider uppercase">{member.role}</p>
                                </div>
                                <div className="aspect-[4/3] mt-4 overflow-hidden">
                                    <img src={member.headshot} alt={member.name} style={{ objectPosition: member.imgPosition }} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-6 pt-5 flex flex-col flex-1">
                                    <div className="mb-4 space-y-1">
                                        <p className="text-zinc-300 text-xs font-bold">{member.university}</p>
                                        <p className="text-zinc-500 text-[10px] uppercase tracking-wide leading-tight">{member.degrees}</p>
                                    </div>
                                    <p className="text-zinc-500 text-xs leading-relaxed mt-auto font-medium border-t border-white/5 pt-4">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Advisory Board */}
                    <div className="mt-24 pt-20 border-t border-white/5">
                        <div className="text-center mb-12">
                            <span className="text-royal-blue text-[10px] font-bold uppercase tracking-[0.2em] block mb-3">Advisory Board</span>
                            <p className="text-zinc-600 text-sm max-w-xl mx-auto">Domain, institutional, and commercial validation from leading experts.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                            {[
                                {
                                    name: 'Dr. Emily Riehl',
                                    title: 'Associate Professor of Mathematics, JHU',
                                    headshot: '/Headshots/Dr_Riehl.png',
                                    imgStyle: { objectPosition: '55% 40%' }, // Move head right and down
                                    focus: 'Formal Verification & AI-Generated Math',
                                    detail: 'Leading expert on mathlib and formal proof systems. Provides unmatched insight into competitor weaknesses in AI mathematics.',
                                },
                                {
                                    name: 'Dr. Richard Brown',
                                    title: 'Dean of Undergraduate Studies, JHU Mathematics',
                                    headshot: '/Headshots/Dr_Brown.png',
                                    focus: 'Institutional Adoption & Procurement',
                                    detail: 'Our "voice of the customer," guiding pricing, procurement strategy, and institutional adoption pathways.',
                                },
                                {
                                    name: 'Dr. Kobe Marshall-Stevens',
                                    title: 'Mathematics Faculty, JHU',
                                    headshot: '/Headshots/Dr_Marhsall-Stevens.jpg',
                                    imgStyle: { objectPosition: 'center 15%', transform: 'scale(0.9)' }, // Fixed: center 15% to see forehead and chin
                                    focus: 'Faculty Champion & Pilot Data',
                                    detail: 'Primary Faculty Champion providing direct access to our pilot cohort and the ground-truth data to validate our BKT engine.',
                                },
                                {
                                    name: 'Jennifer Harvey',
                                    title: 'Ex-Google Accelerator Program Manager',
                                    headshot: '/Headshots/Jen_Harvey.jpeg',
                                    focus: 'Brand Strategy & Community Building',
                                    detail: '15-year Google veteran guiding brand strategy and community-building to de-risk early adoption.',
                                },
                                {
                                    name: 'Iris Gupta',
                                    title: 'Founder & CEO, ProCounsel',
                                    headshot: '/Headshots/Iris.jpeg',
                                    focus: 'FUEL Program Advisor',
                                    detail: 'JHU CS & Economics alum. Bisciotti Award winner and founder of ProCounsel, an AI-powered legal discovery platform.',
                                },
                            ].map((advisor) => (
                                <div key={advisor.name} className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/40 hover:border-zinc-700/60 transition-all group h-full">
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8">
                                        <div className="w-32 h-32 rounded-full flex-shrink-0 overflow-hidden border-2 border-zinc-700 shadow-xl bg-zinc-900">
                                            {advisor.headshot ? (
                                                <img src={advisor.headshot} alt={advisor.name} style={advisor.imgStyle} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full bg-royal-blue/10 flex items-center justify-center">
                                                    <span className="text-royal-blue text-3xl font-bold">{advisor.name.split(' ').pop()![0]}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="min-w-0">
                                            <h4 className="text-2xl font-bold text-zinc-200 group-hover:text-white transition-colors">{advisor.name}</h4>
                                            <p className="text-zinc-500 text-sm font-medium leading-tight mt-1">{advisor.title}</p>
                                            <p className="text-royal-blue text-xs font-bold uppercase tracking-widest mt-4">{advisor.focus}</p>
                                            <p className="text-zinc-400 text-base leading-relaxed mt-3">{advisor.detail}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-8 border-t border-white/5 text-zinc-500 text-[10px] tracking-wide font-medium uppercase">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4">
                        <img src="/logos/Altera/Altera-Logo-Cropped.png" alt="Altera Labs" className="h-4 opacity-30 grayscale contrast-50" />
                        <span className="text-zinc-700">© 2026 Altera-Labs.</span>
                    </div>
                    <div className="flex gap-10">
                        <a href="/privacy.html" className="hover:text-zinc-100 transition-colors tracking-[0.15em] font-bold">Privacy Policy</a>
                        <a href="/terms.html" className="hover:text-zinc-100 transition-colors tracking-[0.15em] font-bold">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
