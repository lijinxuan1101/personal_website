export const education = [
	{
		school: 'National University of Singapore',
		link: 'https://www.comp.nus.edu.sg/',
		place: 'Singapore',
		degree: 'Master of Computing (Information Systems specialisation)',
		dates: 'Aug 2025 – Dec 2027',
		notes: [],
	},
	{
		school: 'Central South University',
		link: 'https://bs.csu.edu.cn/',
		place: 'Changsha, China',
		degree: 'B.S. in Information Management and Information System; Minor in Statistics',
		dates: 'Sep 2021 – Jun 2025',
		notes: ['GPA: 91.57/100'],
	},
];

export const experience = [
	{
		org: 'Thales',
		place: 'Singapore',
		link: 'https://www.thalesgroup.com/',
		role: 'AI Engineer Intern',
		dates: 'Sep 2026 – Dec 2026',
		points: [
			'Agent Evaluation Harness: contributed to a JavaCard-based evaluation harness for coding agents on smart-card tasks. Used Harbor to orchestrate isolated, reproducible, parallel evaluations and developed a hybrid scoring pipeline combining LLM-as-a-judge with deterministic metrics.',
			'Agent Evaluation Benchmark: constructed a domain-specific benchmark from internal CI/CD tasks, developing five evaluation methods based on the SWE-smith methodology. Used RepoLaunch to generate repository-specific Dockerfiles and build containerized environments for reproducible task execution.',
		],
	},
	{
		org: 'JD',
		place: 'China',
		link: 'https://about.jd.com/company',
		role: 'Algorithm Engineer Intern',
		dates: 'Mar 2026 – Aug 2026',
		points: [
			'RectifyGuard: built a data pipeline using rule-guided Qwen3.5 grounding, pseudo-labeling, and supervised fine-tuning for violation placement, followed by controlled image composition to generate 100K training samples and a 50K-image benchmark. Developed a framework combining violation-type-aware mask prediction, image inpainting, pixel-level paste-back, and bounded residual refinement. Reduced protected-region pixel drift from 23.8% to 0.1% versus standalone Qwen-Image-Edit on the detector-driven benchmark.',
			'Internal Compliance Data Management System: built a Flask-based platform for data management and compliance monitoring. Designed scheduled pipelines to aggregate trillion-row-scale Hive data into ClickHouse, with Redis caching for millisecond-level frequent queries, and developed metric computation and visualization modules.',
		],
	},
	{
		org: 'Meituan',
		place: 'China',
		link: 'https://www.meituan.com/en-US/about-us',
		role: 'AI Forward Deployed Engineer Intern',
		dates: 'Jan 2026 – Mar 2026',
		points: [
			'Agent Product Evaluation: co-developed a hierarchical evaluation framework across model capability, agent harness, and end-to-end performance, and built a weekly benchmark to identify gaps and inform product iterations.',
			'Business Analytics Data Agent: designed a LangChain-based agent integrating internal data sources, an analysis agent, and an enterprise messaging bot. Developed tool-calling workflows for SQL-based data retrieval and grep-based file search, enabling natural-language queries, drill-down analysis, and report generation.',
		],
	},
	{
		org: '6Estates',
		place: 'Singapore',
		link: 'https://www.6estates.com/',
		role: 'Data Scientist Intern',
		dates: 'Sep 2025 – Jan 2026',
		points: [
			'Intelligent Document Processing System: built a Python-based pipeline using PaddleOCR to extract financial fields and transaction tables from thousands of bank statements across more than ten banks. Optimized PostgreSQL and data-processing workflows to standardize bank-specific formats and improve robustness.',
			'Financial Report RAG: built a question-answering system for Chinese listed-company annual reports using structure-aware chunking, Qwen3 embeddings, BM25, and reranking. Implemented a LangGraph workflow with query rewriting, company and year verification, scope routing, and web-search fallback; evaluated answer accuracy, citations, and routing.',
		],
	},
];

export const projects = [
	{
		title: 'ML-Based Equity Selection Research',
		tag: 'Machine Learning',
		date: 'Nov 2026',
		link: null,
		points: [
			'Engineered Alpha158-based features and reproduced a three-LightGBM DoubleEnsemble for equity selection. Addressed leakage with chronological splits, boundary-purged labels, training-only preprocessing, and next-open execution.',
			'In a 2023–2025 backtest using current S&P 500 constituents, achieved 135.5% cumulative return after simulated costs and a net Sharpe of 1.18, versus 7.6% for Ridge and 86.6% for SPY before costs.',
		],
	},
	{
		title: 'C++ Order Matching System',
		tag: 'C++ Systems Engineering',
		date: 'Oct 2026',
		link: null,
		points: [
			'Constructed an order matching system with open-source components for NASDAQ ITCH parsing, order-book management, and order matching. Used direct-indexed order arrays, sorted price-level vectors, and pooled allocation.',
			'Achieved approximately 2× the throughput of a hash-table-and-AVL-tree baseline on 1.56 million ITCH messages (62.7M vs. 31.6M messages per second).',
		],
	},
	{
		title: 'Freddie Mac Mortgage Default Anomaly Detection',
		tag: 'Machine Learning',
		date: 'Nov 2025',
		link: null,
		points: [
			'Built an end-to-end machine learning pipeline with 68 domain-informed features across seven reusable modules; compared four unsupervised detectors and selected LOF for an ensemble with delinquency and repayment signals.',
			'Achieved a Kaggle private leaderboard AUPRC of 0.5600 versus a 0.1295 baseline, ranking 2nd out of 51 teams.',
		],
	},
];
