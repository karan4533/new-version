/* Case Studies Data */
export const CASES = [
  {
    cat: "E-Commerce",
    weeks: "8 weeks",
    shortTitle: "Product Taxonomy and Enrichment Engine",
    title: "Product Taxonomy and Attribute Enrichment Engine",
    body: "A large e-commerce operator needed fast, accurate enrichment across 100,000+ SKUs and 4,000+ taxonomy endpoints.",
    objective:
      "A large e-commerce operator managed 100,000+ SKUs across suppliers with inconsistent schemas. Manual classification across 4,000+ taxonomy end nodes took nearly 3 months per cycle, creating data backlogs, pricing errors, and delayed listings.",
    solution:
      "Built a fully automated agentic enrichment pipeline using a fine-tuned Llama 3.2 model for multi-domain taxonomy classification. A Hybrid RAG layer combined semantic retrieval with keyword search across 4,000+ taxonomy endpoints. A multimodal layer processed text, PDFs, product images, and supplier websites, with schema-agnostic onboarding for new suppliers.",
    outcome:
      "Processing time for 100,000 SKUs dropped from roughly 3 months to about 2 weeks, with a 92% end-to-end automation rate and a major reduction in manual classification effort.",
    techTags: ["Agentic AI Orchestration", "Hybrid RAG", "Multimodal AI"],
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
    body: "A legal and business services organization needed to make 500,000+ contracts searchable and conversational.",
    objective:
      "Legal teams were spending hours per query manually reviewing document stacks for clauses, obligations, and counterparty terms. The process was slow, inconsistent, and non-scalable.",
    solution:
      "Designed a domain-specific knowledge graph indexing 400,000+ legal contracts with Hybrid RAG that combines semantic retrieval and structured metadata filters. Added grounded conversational responses with page-level citations, RBAC, and full audit logging.",
    outcome:
      "Contract lookup time reduced from hours to seconds, with improved answer consistency across legal and commercial teams and self-serve access to a 500,000+ document repository.",
    techTags: ["Agentic RAG", "Hybrid RAG", "Knowledge Graph Retrieval"],
    metrics: [
      { val: "hours to seconds", label: "contract lookup time" },
      { val: "500,000+", label: "contracts indexed" },
    ],
  },
  {
    cat: "Construction",
    weeks: "12 weeks",
    shortTitle: "Real-Time Safety Vision System",
    title: "Real-Time Safety Vision System",
    body: "Construction sites needed real-time PPE compliance and zone breach visibility across multiple camera zones.",
    objective:
      "Manual supervision was catching violations only after incidents, creating regulatory exposure, insurance risk, and worker safety gaps.",
    solution:
      "Deployed edge computer vision with YOLOv8 for PPE and boundary violations, plus DeepSORT multi-object tracking. Alerts run on-device for sub-second latency, with centralized dashboards and automated compliance logs.",
    outcome:
      "Achieved a 60% reduction in on-site violations within the first month, with sub-second alerts and automated audit trails for compliance reporting.",
    techTags: ["Multimodal Vision AI", "Edge AI Deployment", "DeepSORT Tracking"],
    metrics: [
      { val: "60%", label: "reduction in on-site violations" },
      { val: "<1 sec", label: "real-time alert latency" },
    ],
  },
  {
    cat: "Medico-Legal",
    weeks: "4 weeks",
    shortTitle: "Clinical Document Intelligence",
    title: "Multimodal Clinical Document Intelligence",
    body: "Legal and healthcare teams needed to review and summarize 10,000+ pages of mixed-format medical records per case.",
    objective:
      "Manual review of handwritten, scanned, and typed records took days per file and created bottlenecks that impacted legal timelines and clinical accuracy.",
    solution:
      "Built a multimodal LLM pipeline for handwritten OCR and layout-aware extraction, generating structured chronological timelines with source annotations and human-in-the-loop auditability.",
    outcome:
      "Reduced review time from days to minutes per case, with 97% extraction and summarization accuracy across handwritten and printed records.",
    techTags: ["Multimodal AI", "OCR + Layout Analysis", "Agentic Human-in-the-Loop"],
    metrics: [
      { val: "97%", label: "extraction accuracy" },
      { val: "days to minutes", label: "per-case review time" },
    ],
  },
  {
    cat: "D2C Brand",
    weeks: "10 weeks",
    shortTitle: "Customer Support Voice Agent",
    title: "Customer Support Voice Agent",
    body: "A fast-growing D2C brand needed scalable support across orders, returns, payments, and product discovery.",
    objective:
      "Support teams were overloaded, first-contact resolution was low, and response times were degrading customer experience during peak demand.",
    solution:
      "Built a modular multi-agent framework for order management, payment queries, product search, and escalation routing. Hybrid RAG grounded responses in live order data, return policies, and product catalogs. Persistent memory enabled multi-turn voice interactions with around 800ms average response latency.",
    outcome:
      "Cut common-query resolution time by 80%, improved first-contact resolution through verified execution flows, and scaled voice support without increasing headcount.",
    techTags: ["Agentic AI", "Hybrid RAG", "Voice Agent Orchestration"],
    metrics: [
      { val: "80%", label: "resolution time reduction" },
      { val: "800ms", label: "avg voice response latency" },
    ],
  },
];
