/* ===== SECTIONS =====
   Algemene secties + problem/solution, how-it-works, values, mission, vision */

/* Sections */
section { padding: 6rem 5%; }

.section-header {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 4rem;
}

.section-header h2 {
    font-size: clamp(2rem, 3.5vw, 2.75rem);
    font-weight: 500;
    color: var(--green-main);
    margin-bottom: 1rem;
}

.section-header p {
    font-size: 1.1rem;
    color: var(--text-muted);
}

.fade-up {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}
.fade-up.visible { opacity: 1; transform: translateY(0); }

/* Problem/Solution */
.problem-solution { background: var(--white); }
.ps-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
}
.ps-card {
    padding: 2.5rem;
    border-radius: 24px;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.ps-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}
.ps-card.problem {
    background: linear-gradient(135deg, #fff5f5 0%, #fff 100%);
    border: 1px solid rgba(200, 100, 100, 0.15);
}
.ps-card.solution {
    background: linear-gradient(135deg, rgba(39, 82, 54, 0.08) 0%, rgba(168, 244, 196, 0.08) 100%);
    border: 1px solid rgba(39, 82, 54, 0.15);
}
.ps-icon {
    width: 60px; height: 60px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
}
.problem .ps-icon { background: rgba(200, 100, 100, 0.15); }
.solution .ps-icon { background: rgba(39, 82, 54, 0.15); }
.ps-card h3 {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: var(--green-main);
}
.ps-card ul { list-style: none; }
.ps-card li {
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
    color: var(--text-muted);
}
.ps-card li::before {
    content: '';
    position: absolute;
    left: 0; top: 1rem;
    width: 8px; height: 8px;
    border-radius: 50%;
}
.problem li::before { background: #e57373; }
.solution li::before { background: linear-gradient(180deg, var(--green-dark) 0%, var(--green-main) 50%, var(--green-light) 100%); }

/* How it works */
.how-it-works {
    background: linear-gradient(180deg, var(--green-dark) 0%, var(--green-main) 50%, var(--green-light) 100%);
    color: white;
}
.how-it-works .section-header h2,
.how-it-works .section-header p { color: white; }
.steps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
}
.step-card {
    text-align: center;
    padding: 2rem;
    background: rgba(255,255,255,0.05);
    border-radius: 20px;
    transition: all 0.4s ease;
}
.step-card:hover {
    transform: translateY(-10px);
    background: rgba(255,255,255,0.1);
}
.step-number {
    width: 70px; height: 70px;
    background: rgba(255,255,255,0.15);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    font-weight: 500;
    margin: 0 auto 1.5rem;
    border: 2px solid rgba(255,255,255,0.3);
    transition: all 0.4s ease;
}
.step-card:hover .step-number {
    background: white;
    color: var(--green-main);
}
.step-card h3 { font-size: 1.25rem; font-weight: 500; margin-bottom: 0.75rem; }
.step-card p { opacity: 0.85; font-size: 0.95rem; }

/* Values */
.values-section { background: var(--cream); }
.values-tabs {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
}
.tab-btn {
    padding: 0.75rem 2rem;
    border: 2px solid var(--green-main);
    background: transparent;
    color: var(--green-main);
    border-radius: 50px;
    font-weight: 500;
    font-family: 'Outfit', sans-serif;
    cursor: pointer;
    transition: all 0.3s;
}
.tab-btn.active, .tab-btn:hover {
    background: linear-gradient(180deg, var(--green-dark) 0%, var(--green-main) 50%, var(--green-light) 100%);
    color: white;
}
.values-content { display: none; max-width: 900px; margin: 0 auto; }
.values-content.active { display: block; }
.value-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}
.value-card {
    background: white;
    padding: 2rem;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    transition: all 0.4s ease;
}
.value-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.12);
}
.value-icon {
    width: 60px; height: 60px;
    background: rgba(39, 82, 54, 0.12);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin: 0 auto 1rem;
}
.value-card h4 { font-weight: 500; color: var(--green-main); margin-bottom: 0.5rem; }
.value-card p { font-size: 0.9rem; color: var(--text-muted); }

/* Mission */
.mission-section { background: var(--white); }
.mission-intro {
    max-width: 800px;
    margin: 0 auto 3rem;
    text-align: center;
}
.mission-intro p {
    font-size: 1.1rem;
    color: var(--text-muted);
    line-height: 1.8;
}
.mission-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
}
.mission-card {
    background: rgba(39, 82, 54, 0.06);
    padding: 2rem;
    border-radius: 20px;
    border: 1px solid rgba(39, 82, 54, 0.12);
    transition: all 0.4s ease;
    cursor: pointer;
}
.mission-card:hover {
    transform: translateY(-10px);
    background: rgba(39, 82, 54, 0.1);
    border-color: rgba(39, 82, 54, 0.25);
    box-shadow: 0 25px 50px rgba(39, 82, 54, 0.15);
}
.mission-icon {
    width: 50px; height: 50px;
    background: rgba(39, 82, 54, 0.15);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;
}
.mission-card h3 { font-weight: 500; color: var(--green-main); margin-bottom: 0.75rem; }
.mission-card p { font-size: 0.95rem; color: var(--text-muted); margin: 0; }

/* Vision */
.vision-section {
    background: linear-gradient(180deg, var(--green-dark) 0%, var(--green-main) 50%, var(--green-light) 100%);
    color: white;
    text-align: center;
    padding: 5rem 5%;
}
.vision-section h2 { color: white; margin-bottom: 2rem; }
.vision-quote {
    font-size: 1.4rem;
    font-style: italic;
    max-width: 800px;
    margin: 0 auto 3rem;
    line-height: 1.8;
    opacity: 0.95;
}
.vision-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    max-width: 1100px;
    margin: 0 auto 3rem;
    text-align: left;
}
.vision-block {
    background: rgba(255,255,255,0.1);
    padding: 2rem;
    border-radius: 20px;
    backdrop-filter: blur(10px);
    transition: all 0.4s ease;
    cursor: pointer;
}
.vision-block:hover {
    transform: translateY(-10px);
    background: rgba(255,255,255,0.15);
    box-shadow: 0 25px 50px rgba(0,0,0,0.2);
}
.vision-block.highlight {
    background: rgba(255,255,255,0.1);
}
.vision-block h3 {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: white;
}
.vision-block p {
    font-size: 0.95rem;
    line-height: 1.7;
    opacity: 0.9;
    margin-bottom: 1rem;
}
.vision-block p:last-child { margin-bottom: 0; }
.vision-closing {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.8;
}
@media (max-width: 768px) {
    .vision-content { grid-template-columns: 1fr; }
}
