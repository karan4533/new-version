/* Case Studies Data */
export const CASES = [
  {
    cat: "E-Commerce",
    weeks: "8 weeks",
    shortTitle: "Product Taxonomy and Enrichment Engine",
    title: "Product Taxonomy and Attribute Enrichment Engine",
    body: "A large e-commerce operator managed 100,000+ SKUs across suppliers with inconsistent schemas.",
    objective:
      "A large e-commerce operator managed 100,000+ SKUs across suppliers with inconsistent schemas. Manual classification across 4,000+ taxonomy end nodes was taking 3 months per cycle, creating data backlogs, pricing errors, and delayed product listings.",
    solution:
      "Built a fully automated agentic enrichment pipeline using a fine-tuned Llama 3.2 model for multi-domain taxonomy classification. Deployed a Hybrid RAG system combining semantic vector search and keyword retrieval across all 4,000+ taxonomy endpoints. Added a multimodal LLM layer capable of reasoning over text, PDFs, product images, and supplier websites simultaneously. The system was schema-agnostic - new suppliers could be onboarded without code changes.",
    outcome:
      "Processing time for 100,000 SKUs reduced from 3 months to approximately 2 weeks. End-to-end automation rate of 92%. Significant reduction in manual classification effort and data normalisation cost.",
    techTags: [
      "Agentic AI Orchestration pipeline",
      "Hybrid RAG 4,000+ taxonomy endpoints",
    ],
    metrics: [
      { val: "92%", label: "end-to-end automation" },
      { val: "3 mo to 2 wks", label: "processing time for 100K SKUs" },
    ],
  },
  {
    cat: "Legal",
    weeks: "8 weeks",
    shortTitle: "Contracts Intelligence Assistant",
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
    shortTitle: "Clinical Document Intelligence",
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
];
