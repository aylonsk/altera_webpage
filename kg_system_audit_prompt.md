# AI Agent Repo Audit Prompt: Knowledge Graph System

**Objective**: Conduct a comprehensive technical audit of the Knowledge Graph (KG) system within the Altera Labs repository to extract architectural details, operational logic, and data structures. This information will be used to update the "Interactive Cognitive Graph" documentation on the marketing landing page.

---

## 🔍 Audit Scope

### 1. Model Architecture
- Identify the core KG engine (e.g., D3, Graphology, or custom implementations).
- Locate the "State-Aware Cognitive Modeling" logic. How is student "state" represented and transitioned?
- Look for **Bayesian Knowledge Tracing (BKT)** or **Item Response Theory (IRT)** implementations.
- Identify how "Mastery" is calculated and encoded in the graph data.

### 2. Curriculum Ontology
- Find the schema for "Concepts," "Misconceptions," and "Prerequisites."
- Identify the relationship types supported (e.g., `is_prerequisite_for`, `conflicts_with`, `is_component_of`).
- Extract the "Conceptual Weighting" logic. How is conceptual importance determined or calculated?

### 3. Real-time Processing
- Trace the pipeline for "evidence processing." How does a student interaction trigger a node state change?
- Identify any "Socratic Insight" or "Error Detection" patterns in the backend logic.

---

## 📋 Delivery Requirements

Please provide a report structured as follows:

1.  **System Summary**: A high-level overview of the KG's role in the Altera ecosystem.
2.  **Key Patterns**: 3-5 distinct, verified features of the current implementation (e.g., "Non-linear prerequisite traversal," "Dynamic misconception hijacking").
3.  **Data Schema Snippets**: Examples of the node/link JSON structures found in the backend.
4.  **Feature Descriptions**: Concise, "marketing-ready" descriptions for each identified pattern, similar to:
    - *Mastery Encoding*: [...]
    - *Pedagogical Physics*: [...]
    - *Conceptual Weighting*: [...]

---

## 🛠️ Tools to Use
- `grep_search` to find "KG", "Cognitive", "Mastery", "BKT", "Ontology".
- `list_dir` to explore the `backend/` and `services/` architecture.
- `view_file` to analyze core logic files.
- `find_by_name` to locate schema definitions.
