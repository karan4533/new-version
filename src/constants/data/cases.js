/* Case Studies Data */
export const CASES = [
  {
    cat: "Legal",
    weeks: "8 weeks",
    shortTitle: "Legal Contracts Assistant",
    title: "Legal Contracts Intelligence Assistant",
    body: "A legal and business services organisation needed to make over 500,000 contracts searchable and conversational.",
    objective:
      "A legal and business services organisation needed to make over 500,000 contracts searchable and conversational. Legal teams were spending hours per query manually reviewing document stacks to find specific clauses, obligations, or counterparty terms - a process that was slow, inconsistent, and non-scalable.",
    solution:
      "Designed and deployed a domain-specific knowledge graph indexing 400,000+ legal contracts for high-accuracy semantic retrieval. Built a Hybrid RAG system layering semantic vector search with structured metadata filtering - enabling clause-level precision. The conversational interface generates grounded, human-readable responses with source citations pinned to specific contract pages. RBAC controls and a full audit log were embedded from day one.",
    outcome:
      "Contract lookup time reduced from hours to seconds. Improved answer accuracy and consistency across legal and commercial teams. Enabled self-serve access to a 500,000+ document repository without requiring legal expertise to operate.",
    techTags: [
      "Agentic RAG Knowledge graph retrieval",
      "Hybrid RAG Semantic + metadata search",
    ],
    metrics: [
      { val: "Hours to seconds", label: "contract lookup time" },
      { val: "500,000+", label: "contracts indexed" },
    ],
  },
  {
    cat: "Construction",
    weeks: "12 weeks",
    shortTitle: "Real-Time Safety Vision System",
    title: "Real-Time Safety Vision System",
    body: "Large construction sites were relying on manual supervision for PPE compliance and boundary enforcement.",
    objective:
      "Large construction sites were relying on manual supervision for PPE compliance and boundary enforcement. Violations were only caught post-incident, creating regulatory exposure, insurance risk, and worker safety gaps. Site managers had no real-time visibility across multiple zones simultaneously.",
    solution:
      "Deployed an edge-based computer vision system using YOLOv8 for real-time detection of PPE violations and restricted zone breaches. DeepSORT multi-object tracking monitored simultaneous movement of workers and vehicles across all camera zones. Inference was run on-device (edge deployment) to achieve sub-second alert latency without relying on cloud round-trips. A centralised dashboard aggregated all events, and automated compliance logs were generated daily for regulatory submission.",
    outcome:
      "60% reduction in on-site violations within the first month of deployment. Sub-second real-time safety alerts across all monitored zones. Fully automated audit trail eliminating manual compliance reporting.",
    techTags: [
      "Multimodal Vision AI YOLOv8 + DeepSORT",
      "Edge AI Deployment On-device inference",
    ],
    metrics: [
      { val: "60%", label: "reduction in on-site violations" },
      { val: "Under 1 sec", label: "real-time alert latency" },
    ],
  },
  {
    cat: "Medico-Legal",
    weeks: "4 weeks",
    shortTitle: "Multimodal Clinical Document Intelligence",
    title: "Multimodal Clinical Document Intelligence",
    body: "Legal and healthcare teams were required to review and summarise 10,000+ pages of handwritten, scanned, and typed medical records per case.",
    objective:
      "Legal and healthcare teams were required to review and summarise 10,000+ pages of handwritten, scanned, and typed medical records per case. The manual process took days per file, introduced inconsistency, and created bottlenecks in case preparation - with real consequences for legal timelines and clinical accuracy.",
    solution:
      "Deployed a multimodal LLM pipeline optimised for OCR on handwritten and low-quality medical scans. Document layout analysis preserved clinical structure and page context across fragmented record formats. The system generated structured, chronologically ordered medical timelines with source annotations pinned to specific pages and record types. A human-in-the-loop review workflow captured all provenance decisions and maintained full auditability.",
    outcome:
      "Review time reduced from days to minutes per case. 97% extraction and summarisation accuracy across handwritten and printed document types. Accelerated case preparation with structured clinical insight outputs ready for legal and medical review.",
    techTags: [
      "Multimodal AI OCR + layout analysis",
      "Agentic AI Human-in-the-loop pipeline",
    ],
    metrics: [
      { val: "97%", label: "extraction accuracy" },
      { val: "Days to minutes", label: "per-case review time" },
    ],
  },
  {
    cat: "D2C Brand",
    weeks: "10 weeks",
    shortTitle: "Customer Support Voice Agent",
    title: "Customer Support Voice Agent",
    body: "A fast-growing D2C brand was managing high-volume customer queries across orders, returns, payments, and product discovery.",
    objective:
      "A fast-growing D2C brand was managing high-volume customer queries across orders, returns, payments, and product discovery. Their support team was overwhelmed, first-contact resolution was low, and response times were degrading customer experience - especially during peak periods.",
    solution:
      "Built a modular multi-agent framework with dedicated specialist agents for order management, payment queries, product search, and escalation routing. Hybrid RAG pipelines grounded all responses in real-time order data, return policies, and live product catalogs. Persistent memory and context management enabled multi-turn personalised conversations - the agent remembered prior context within and across sessions. Inference and orchestration layers were optimised to achieve approximately 800ms average end-to-end response latency for a voice-native experience.",
    outcome:
      "80% reduction in resolution time for common query types. Improved first-contact resolution through verified execution flows with no hallucinated responses. Scalable voice-based support deployed without increasing headcount.",
    techTags: [
      "Agentic AI Multi-agent orchestration",
      "Hybrid RAG Real-time grounded responses",
    ],
    metrics: [
      { val: "80%", label: "resolution time reduction" },
      { val: "800ms", label: "avg end-to-end voice latency" },
    ],
  },
  {
    cat: "Sales Tech",
    tabLabel: "Sales Copilot",
    weeks: "8 weeks",
    shortTitle: "Conversational Business Intelligence Copilot",
    title: "Conversational Business Intelligence Copilot",
    body: "The organisation relied on static dashboards and manual reporting workflows, limiting real-time decision-making.",
    objective:
      "The organisation relied on static dashboards and manual reporting workflows, limiting real-time decision-making and requiring technical teams for ad hoc analysis.",
    solution:
      "Built a conversational GenAI engine combining Hybrid RAG with Text-to-SQL query generation. Designed orchestration workflows to dynamically query and synthesise data across multiple structured and unstructured sources. Implemented validation layers to verify SQL accuracy and prevent hallucinated outputs. Enabled automatic generation of charts, tables, and narrative insights in a unified interface.",
    outcome:
      "Delivered instant on-demand access to trustworthy insights across complex datasets. Reduced dependency on manual reporting and BI teams. Enabled faster data-driven decision-making across business functions.",
    techTags: [
      "Hybrid RAG + Text-to-SQL pipelines",
      "Dynamic visualisation generation",
    ],
    metrics: [
      { val: "Instant", label: "access to trusted insights" },
      { val: "Lower", label: "dependency on manual reporting" },
    ],
  },
  {
    cat: "Enterprise",
    tabLabel: "Enterprise Search",
    weeks: "10 weeks",
    shortTitle: "Hybrid Search/Open Search for Enterprise",
    title: "Hybrid Search/Open Search for Enterprise",
    body: "Enterprises with millions of internal documents needed contextual search in regulated environments.",
    objective:
      "Enterprises managing millions of internal documents required contextual and accurate search in regulated or air-gapped environments where cloud GenAI solutions were not permitted.",
    solution:
      "Built a hybrid retrieval engine combining BM25 keyword search, semantic vector search, and metadata filtering. Added agentic RAG orchestration with parsing, retrieval, reasoning, and response validation agents. Deployed fully on-prem LLMs with zero external API dependency. Enforced RBAC with audit logging and document-grounded citations.",
    outcome:
      "Reduced enterprise knowledge-search time by 70-85%. Achieved near-zero hallucinations through citation-only responses. Enabled GenAI adoption in regulated and restricted environments.",
    techTags: [
      "Hybrid retrieval (BM25 + vector + metadata)",
      "On-prem agentic RAG with RBAC",
    ],
    metrics: [
      { val: "70-85%", label: "knowledge search time reduction" },
      { val: "Near-zero", label: "hallucinations with cited outputs" },
    ],
  },
  {
    cat: "Enterprise",
    tabLabel: "AI Governance",
    weeks: "8 weeks",
    shortTitle: "AI Governance and Model Risk",
    title: "AI Governance and Model Risk Management Framework",
    body: "Rapid AI adoption created risks around hallucinations, bias, and weak traceability.",
    objective:
      "Rapid AI adoption across business functions created risks around hallucinations, bias, regulatory non-compliance, and lack of traceability in regulated industries.",
    solution:
      "Implemented a centralised AI governance layer enforcing enterprise-wide usage policies. Added a model registry with lifecycle management, approvals, and version control. Deployed agent-based validation for hallucination detection, bias monitoring, and output verification. Captured immutable audit logs with prompt/response traceability aligned to regulatory frameworks.",
    outcome:
      "Reduced AI-related compliance and operational risk. Improved audit readiness through automated traceability. Enabled safe and scalable GenAI deployment across business units.",
    techTags: [
      "AI governance + model risk controls",
      "Explainable validation + immutable audit logs",
    ],
    metrics: [
      { val: "Lower", label: "compliance and operational AI risk" },
      { val: "Faster", label: "regulatory audit readiness" },
    ],
  },
  {
    cat: "Automotive",
    weeks: "16 weeks",
    shortTitle: "Assembly Line Quality Control",
    title: "Vision Inspection System: Assembly Line Quality Control",
    body: "Manual inspection on high-speed automotive lines caused defect leakage and bottlenecks.",
    objective:
      "Manual inspection on high-speed automotive assembly lines resulted in defect leakage, inspection bottlenecks, and inconsistent quality control.",
    solution:
      "Built multi-point high-resolution image capture using industrial cameras. Trained custom CNN models for alignment, fixation, and surface-defect detection. Synced real-time inference with PLC control logic. Added a centralised dashboard with anomaly flagging and automated corrective triggers.",
    outcome:
      "Achieved near-zero false positives in automated inspection. Detected defects earlier to reduce downstream rework. Improved line throughput and operational reliability.",
    techTags: [
      "CNN-based defect detection",
      "Industrial vision + PLC integration",
    ],
    metrics: [
      { val: "Near-zero", label: "false positives in inspection" },
      { val: "Higher", label: "line throughput reliability" },
    ],
  },
  {
    cat: "Enterprise",
    tabLabel: "Translation",
    weeks: "6 weeks",
    shortTitle: "Vernacular-First Translation Model",
    title: "Machine Translation: Vernacular-First Enterprise Model",
    body: "Enterprises across multilingual regions needed faster and consistent translation of manuals and SOPs.",
    objective:
      "Enterprises operating across multilingual regions required accurate translation of manuals, SOPs, and policies while maintaining terminology consistency and reducing turnaround time.",
    solution:
      "Built a domain-adapted neural machine translation engine trained on industry corpora. Added terminology management for technical consistency. Implemented XML-aware parsing to preserve document structure and formatting. Added a version-linked pipeline with human-in-the-loop validation.",
    outcome:
      "Reduced translation turnaround by 60-70%. Delivered 40-50% cost savings versus manual workflows. Improved multilingual consistency from a single source of truth.",
    techTags: [
      "Neural machine translation + domain adaptation",
      "Terminology management + XML-aware parsing",
    ],
    metrics: [
      { val: "60-70%", label: "turnaround time reduction" },
      { val: "40-50%", label: "cost savings vs manual process" },
    ],
  },
  {
    cat: "Enterprise",
    tabLabel: "Video Localization",
    weeks: "8 weeks",
    shortTitle: "Voice-to-Voice Video Localization",
    title: "Voice-to-Voice Multilingual Conversion: Video Localization",
    body: "The enterprise needed scalable multilingual video localization without manual dubbing delays.",
    objective:
      "The enterprise required scalable multilingual video localization for training and compliance content without manual dubbing delays, terminology loss, or timeline misalignment.",
    solution:
      "Implemented ASR-based speech-to-text transcription with word-level timestamps. Applied LLM-driven translation with SSML-based prosody and timing control. Generated high-quality TTS output with domain terminology preservation. Automated audio alignment and synchronised video rendering.",
    outcome:
      "Reduced localization time by 70-80%. Lowered cost significantly compared to manual dubbing. Accelerated global rollout of training and compliance content.",
    techTags: [
      "ASR + LLM translation + SSML/TTS",
      "Automated audio/video synchronization pipeline",
    ],
    metrics: [
      { val: "70-80%", label: "video localization time reduction" },
      { val: "Lower", label: "localization cost vs manual dubbing" },
    ],
  },
];
