/* Case Studies Data */
export const CASES = [
  {
    cat: "E-Commerce",
    weeks: "8 weeks",
    shortTitle: "Product Taxonomy and Attribute Enrichment",
    title: "Product Taxonomy and Attribute Enrichment Engine",
    body: "Classify 100,000+ SKUs across 4,000+ taxonomy nodes from multi-format supplier data (PDFs, images, blueprints) without manual bottlenecks.",
    objective:
      "Classify 100,000+ SKUs across 4,000+ taxonomy nodes from multi-format supplier data (PDFs, images, blueprints) — manually slow, inconsistent, and non-scalable.",
    solution:
      "Fine-tuned Llama 3.2 for multi-domain taxonomy classification, implemented agentic RAG with hybrid retrieval across 4,000+ taxonomy endpoints, added multimodal extraction for text/PDF/image/web sources, and delivered a schema-agnostic onboarding engine for supplier integration.",
    solutionPoints: [
      "Fine-tuned Llama 3.2 for multi-domain taxonomy classification",
      "Agentic RAG with hybrid search across 4,000+ taxonomy endpoints",
      "Multimodal LLM extracting data from text, PDFs, images & websites",
      "Schema-agnostic engine for plug-and-play supplier integration",
    ],
    outcome:
      "Reduced taxonomy enrichment cycle from 3 months to 2 weeks, achieved 92% automation, and significantly lowered manual effort.",
    techTags: [
      "Llama 3.2 taxonomy classifier",
      "Agentic RAG hybrid retrieval",
      "Multimodal extraction pipeline",
      "Schema-agnostic supplier onboarding",
    ],
    metrics: [
      { val: "3 Months to 2 Weeks", label: "taxonomy cycle time" },
      { val: "92%", label: "automation rate" },
      { val: "Lower", label: "manual effort" },
    ],
  },
  {
    cat: "Construction",
    weeks: "12 weeks",
    shortTitle: "Real-Time Safety Monitoring",
    title: "Real-Time Safety Monitoring for Construction Sites",
    body: "Large construction sites lacked real-time PPE compliance monitoring and depended on manual supervision with post-incident reporting.",
    objective:
      "Large construction sites lacked real-time PPE compliance monitoring — relying on manual supervision and post-incident reporting, creating safety gaps and regulatory risk.",
    solution:
      "Deployed edge-based YOLOv8 for PPE and boundary detection, added DeepSORT tracking for workers and vehicles, delivered centralized real-time alerting, and automated compliance logs with daily audit reports.",
    solutionPoints: [
      "Edge-deployed YOLOv8 models for PPE and boundary violation detection",
      "DeepSORT multi-object tracking for workers and vehicle movement",
      "Real-time event detection with a centralized alert dashboard",
      "Automated compliance logging and daily audit report generation",
    ],
    outcome:
      "Reduced violations by 60%, delivered sub-second alerts, and created an automated audit trail.",
    techTags: [
      "YOLOv8 edge safety detection",
      "DeepSORT multi-object tracking",
      "Centralized real-time alerts",
      "Automated compliance reports",
    ],
    metrics: [
      { val: "60%", label: "violation reduction" },
      { val: "Under 1 Second", label: "alert latency" },
      { val: "Auto", label: "audit reporting" },
    ],
  },
  {
    cat: "D2C Brand",
    weeks: "10 weeks",
    shortTitle: "Customer Support Voice Agent",
    title: "Customer Support Voice Agent",
    body: "High-volume customer queries across orders, returns, payments, and product discovery needed a scalable voice agent with strong accuracy.",
    objective:
      "High-volume customer queries across orders, returns, payments, and product discovery required a scalable intelligent agent maintaining accuracy and personalization.",
    solution:
      "Built a modular multi-agent framework for orders/payments/search/escalation, grounded responses with RAG over real-time data and policies, added persistent context memory for multi-turn conversations, and optimized inference to ~800 ms end-to-end latency.",
    solutionPoints: [
      "Modular multi-agent framework: orders, payments, product search & escalation",
      "RAG pipelines grounded in real-time order data, policies & product catalogs",
      "Persistent memory and context management for multi-turn conversations",
      "Optimised inference layer achieving ~800 ms end-to-end latency",
    ],
    outcome:
      "Cut resolution time by 80%, improved first-contact resolution, and scaled voice support operations.",
    techTags: [
      "Multi-agent orchestration",
      "RAG with live order grounding",
      "Persistent conversational memory",
      "Low-latency voice inference",
    ],
    metrics: [
      { val: "80%", label: "resolution time reduction" },
      { val: "Higher", label: "first-contact resolution" },
      { val: "Approximately 800 Milliseconds", label: "end-to-end latency" },
    ],
  },
  {
    cat: "Sales Tech",
    tabLabel: "Sales Copilot",
    weeks: "8 weeks",
    shortTitle: "Conversational BI Copilot",
    title: "Conversational Business Intelligence Copilot",
    body: "Static dashboards and manual reporting slowed decision-making and required technical teams for every ad hoc analysis.",
    objective:
      "Static dashboards and manual reporting workflows limited real-time decision-making and required technical teams for every ad hoc analysis request.",
    solution:
      "Built a conversational GenAI layer combining hybrid RAG and Text-to-SQL, orchestrated cross-source query workflows, added SQL validation to prevent hallucinations, and auto-generated charts, tables, and narrative insights.",
    solutionPoints: [
      "Conversational GenAI engine combining Hybrid RAG with Text-to-SQL",
      "Orchestration workflows querying across structured and unstructured sources",
      "Validation layer to verify SQL accuracy and prevent hallucinated outputs",
      "Automatic generation of charts, tables, and narrative insights",
    ],
    outcome:
      "Delivered instant on-demand insights, lowered BI team dependency, and accelerated decision-making.",
    techTags: [
      "Hybrid RAG + Text-to-SQL",
      "Structured/unstructured orchestration",
      "Query validation guardrails",
      "Auto insight visualization",
    ],
    metrics: [
      { val: "Instant", label: "insight access" },
      { val: "Lower", label: "BI dependency" },
      { val: "Faster", label: "decision cycle" },
    ],
  },
  {
    cat: "Enterprise",
    tabLabel: "Enterprise Search",
    weeks: "10 weeks",
    shortTitle: "Hybrid Search for Enterprise",
    title: "Hybrid Search / OpenSearch for Enterprise",
    body: "Millions of internal documents needed contextual and accurate retrieval in regulated, air-gapped environments.",
    objective:
      "Millions of internal documents needed contextual, accurate search inside air-gapped or regulated environments where cloud-based GenAI was not permitted.",
    solution:
      "Implemented hybrid retrieval (BM25 + vectors + metadata), added agentic RAG for parsing/retrieval/reasoning/validation, deployed on-prem LLMs, and enforced RBAC with full audit logging and cited outputs.",
    solutionPoints: [
      "Hybrid retrieval: BM25 keyword search + semantic vector search + metadata filtering",
      "Agentic RAG: query parsing, retrieval, reasoning, and response validation agents",
      "Fully on-premises LLM deployment — zero external API dependency",
      "RBAC-enforced access control with audit logging and cited responses",
    ],
    outcome:
      "Reduced search time by 70-85%, achieved near-zero hallucination, and enabled GenAI in regulated environments.",
    techTags: [
      "BM25 + vector + metadata retrieval",
      "Agentic RAG execution chain",
      "On-prem LLM deployment",
      "RBAC + auditable citations",
    ],
    metrics: [
      { val: "70-85%", label: "search time reduction" },
      { val: "Near-zero", label: "hallucination rate" },
      { val: "Enabled", label: "regulated GenAI use" },
    ],
  },
  {
    cat: "Legal",
    weeks: "8 weeks",
    shortTitle: "Legal Contracts Assistant",
    title: "Legal Contracts Assistant",
    body: "Over 500,000 contracts needed conversational search so legal and business teams could get precise answers without manual review.",
    objective:
      "Over 500,000 legal contracts needed to be searchable and conversational, enabling legal and business teams to get precise answers without manual document review.",
    solution:
      "Built a domain knowledge graph over 400,000+ contracts, delivered RAG-based cited answers, combined vector retrieval with metadata filtering, and exposed a secure RBAC chat experience with audit logs.",
    solutionPoints: [
      "Domain-specific knowledge graph indexing 400,000+ legal contracts",
      "RAG-based system generating grounded, human-readable answers with citations",
      "Advanced vector search combined with structured metadata filtering",
      "Secure chat interface with RBAC and full audit logging",
    ],
    outcome:
      "Reduced lookup from hours to seconds, improved answer accuracy, and enabled conversational legal access.",
    techTags: [
      "Legal knowledge graph indexing",
      "Cited RAG legal responses",
      "Vector + metadata retrieval",
      "Secure RBAC legal chat",
    ],
    metrics: [
      { val: "Hours to Seconds", label: "lookup time" },
      { val: "Higher", label: "answer accuracy" },
      { val: "Self-serve", label: "legal access" },
    ],
  },
  {
    cat: "Enterprise",
    tabLabel: "AI Governance",
    weeks: "8 weeks",
    shortTitle: "AI Governance and Model Risk",
    title: "AI Governance and Model Risk Management Framework",
    body: "Rapid AI adoption increased hallucination, bias, compliance, and traceability risk in regulated business functions.",
    objective:
      "Rapid AI adoption created risks around hallucinations, bias, regulatory non-compliance, and lack of traceability across regulated business functions.",
    solution:
      "Implemented a centralized governance layer, model registry with lifecycle controls, agent-based validation for bias/hallucination/output checks, and immutable prompt-response traceability logs.",
    solutionPoints: [
      "Centralized AI governance layer enforcing enterprise-wide usage policies",
      "Model registry with lifecycle management, approvals, and version control",
      "Agent-based validation for hallucination detection, bias monitoring & output verification",
      "Immutable audit logs with prompt and response traceability",
    ],
    outcome:
      "Lowered compliance risk, accelerated regulatory audits, and enabled safer GenAI deployment.",
    techTags: [
      "Central AI governance layer",
      "Model registry lifecycle control",
      "Bias and hallucination validation",
      "Immutable traceability logs",
    ],
    metrics: [
      { val: "Lower", label: "compliance risk" },
      { val: "Faster", label: "regulatory audits" },
      { val: "Safe", label: "GenAI deployment" },
    ],
  },
  {
    cat: "Automotive",
    weeks: "16 weeks",
    shortTitle: "Assembly Line Quality Control",
    title: "Vision Inspection System: Assembly Line Quality Control",
    body: "Manual inspection on high-speed automotive lines caused defect leakage, bottlenecks, and inconsistent quality control.",
    objective:
      "Manual inspection on high-speed automotive assembly lines caused defect leakage, bottlenecks, and inconsistent quality control across production.",
    solution:
      "Implemented multi-point industrial camera capture, trained custom CNNs for alignment/fixation/defect detection, synchronized real-time inference with PLC logic, and deployed a central anomaly dashboard with corrective triggers.",
    solutionPoints: [
      "Multi-point high-resolution industrial camera image capture",
      "Custom CNN models for alignment, fixation, and surface defect detection",
      "Real-time inference synchronized with PLC control logic",
      "Centralized dashboard with anomaly flagging and automated corrective triggers",
    ],
    outcome:
      "Reached near-zero false positives, improved early defect detection, and increased line throughput.",
    techTags: [
      "Industrial vision capture",
      "Custom CNN defect detection",
      "PLC-synced real-time inference",
      "Anomaly dashboard automation",
    ],
    metrics: [
      { val: "Near-zero", label: "false positives" },
      { val: "Earlier", label: "defect detection" },
      { val: "Higher", label: "line throughput" },
    ],
  },
  {
    cat: "Enterprise",
    tabLabel: "Translation",
    weeks: "6 weeks",
    shortTitle: "Vernacular-First Translation Model",
    title: "Machine Translation: Vernacular-First Enterprise Model",
    body: "Multilingual enterprises needed accurate translation of manuals and SOPs while preserving technical terminology at scale.",
    objective:
      "Enterprises across multilingual regions required accurate translation of manuals, SOPs, and policies while maintaining consistent technical terminology at scale.",
    solution:
      "Built domain-adapted NMT, added terminology management controls, preserved structure with XML-aware parsing, and integrated human-in-the-loop review for versioned quality assurance.",
    solutionPoints: [
      "Domain-adapted Neural Machine Translation trained on industry-specific corpora",
      "Terminology management layer ensuring consistent technical vocabulary",
      "XML-aware parsing preserving document structure and formatting",
      "Version-linked translation pipeline with human-in-the-loop validation",
    ],
    outcome:
      "Reduced turnaround time by 60-70%, delivered 40-50% cost savings, and improved multilingual consistency.",
    techTags: [
      "Domain-adapted NMT",
      "Terminology management layer",
      "XML-aware document parsing",
      "Human-in-the-loop QA",
    ],
    metrics: [
      { val: "60-70%", label: "turnaround reduction" },
      { val: "40-50%", label: "cost savings" },
      { val: "Consistent", label: "multilingual output" },
    ],
  },
  {
    cat: "Enterprise",
    tabLabel: "Video Localization",
    weeks: "8 weeks",
    shortTitle: "Voice-to-Voice Video Localization",
    title: "Voice-to-Voice Multilingual Conversion: Video Localization",
    body: "Global training and compliance videos needed multilingual localization without manual dubbing delays or timeline drift.",
    objective:
      "Enterprise required scalable multilingual video localization for training and compliance content without manual dubbing delays, terminology loss, or timeline misalignment.",
    solution:
      "Implemented ASR transcription with timestamps, LLM translation with SSML timing controls, high-quality TTS with domain preservation, and automated audio-video synchronization.",
    solutionPoints: [
      "Speech-to-text transcription with word-level timestamping using ASR (Whisper)",
      "LLM-driven multilingual translation with SSML-based prosody and timing control",
      "High-quality TTS synthesis with domain terminology preservation",
      "Automated audio alignment and synchronized video rendering pipeline",
    ],
    outcome:
      "Reduced localization time by 70-80%, lowered dubbing costs, and accelerated global rollout.",
    techTags: [
      "ASR timestamped transcription",
      "LLM translation + SSML",
      "Domain-safe multilingual TTS",
      "Audio-video sync automation",
    ],
    metrics: [
      { val: "70-80%", label: "time reduction" },
      { val: "Lower", label: "dubbing costs" },
      { val: "Faster", label: "global rollout" },
    ],
  },
  {
    cat: "Medico-Legal",
    weeks: "4 weeks",
    shortTitle: "Multimodal Clinical Document Intelligence",
    title: "Multimodal Clinical Document Intelligence",
    body: "Legal and healthcare teams needed to summarize 10,000+ handwritten and scanned medical pages quickly and accurately.",
    objective:
      "Legal and healthcare teams needed to review and summarize 10,000+ pages of handwritten and scanned medical records — manual, time-consuming, and error-prone.",
    solution:
      "Used multimodal LLM OCR for low-quality scans, applied layout-aware parsing for clinical context, generated chronological timelines with source annotations, and added provenance-first review workflows.",
    solutionPoints: [
      "Multimodal LLMs optimized for OCR on handwritten and low-quality medical scans",
      "Document layout analysis to preserve clinical structure and context",
      "Structured, chronologically ordered medical timelines with source annotations",
      "Review workflow with full provenance capture and auditability",
    ],
    outcome:
      "Reduced review time from days to minutes, achieved 97% accuracy, and accelerated case preparation.",
    techTags: [
      "Multimodal OCR intelligence",
      "Layout-aware clinical parsing",
      "Timeline + source annotations",
      "Audit-ready review workflow",
    ],
    metrics: [
      { val: "Days to Minutes", label: "review time" },
      { val: "97%", label: "accuracy" },
      { val: "Higher", label: "prep speed" },
    ],
  },
  {
    cat: "Fintech",
    weeks: "8 weeks",
    shortTitle: "Construction Progress Tracker",
    title: "Construction Progress Tracker: AI-Based Milestone Validation",
    body: "Stage-based construction lending relied on slow and subjective site validation, increasing financial and operational risk.",
    objective:
      "Financing institutions disbursing stage-based construction loans relied on slow, subjective manual site visits or image review — creating financial and operational risk.",
    solution:
      "Used VLM comparison of current vs historical site images, mapped visual progress to milestone checklists, automated rule-based validation before disbursement, and integrated approvals with loan management workflows.",
    solutionPoints: [
      "VLM engine compares current vs. historical site images to detect structural progress",
      "Milestone verification AI agent maps visual completion to construction checklists",
      "Automated rule engine validates milestone fulfillment before disbursement triggers",
      "Integrated workflow connected to loan management platforms for approvals",
    ],
    outcome:
      "Delivered objective AI validation, reduced manual inspections, and accelerated loan disbursement cycles.",
    techTags: [
      "VLM image progress comparison",
      "Milestone verification agent",
      "Automated disbursement rules",
      "Loan workflow integration",
    ],
    metrics: [
      { val: "Objective", label: "milestone validation" },
      { val: "Lower", label: "manual inspection" },
      { val: "Faster", label: "loan disbursement" },
    ],
  },
];
