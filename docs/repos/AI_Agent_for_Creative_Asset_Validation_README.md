# AI Agent for Creative Asset Validation
This service provides an AI-powered suite of tools for analyzing, validating, and researching creative assets like images and PDFs.
It operates as a standalone, interactive application built with Streamlit.

## Overview
The purpose of this project is to build a comprehensive tool for automated Quality Assurance (QA) and content enrichment of marketing and creative assets.

## Features
- Provides an interactive web UI built with Streamlit for easy access to all tools.
- Analyzes creative assets against a set of user-defined rules (Source of Truth).
- Compares two images to identify visual and textual inconsistencies.
- Performs OCR and linguistic proofreading on text within images.
- Enriches content by performing internet-based research on product names via the Perplexity API.
- Evaluates image quality (e.g., blurriness) in PDF documents using multiple AI models (OpenAI, Gemini, Groq) in parallel.
- Integrates with **LangSmith** for full observability and tracing of all AI operations.
- Features a modular architecture with a clear separation between UI, logic, and content (prompts, UI text).

## Requirements
- Python >=3.13.9 with the UV package manager

## Getting Started (Windows)
### Deploy
1. Clone the repository: \
      ```powershell
      git clone https://github.com/Cybernetic-Ransomware/AI_Agent_for_Creative_Asset_Validation.git
      ```
2. Set up the `.env` file based on the provided template.
3. Install UV:
      ```powershell
      pip install uv
      ```
4. Install dependencies:
      ```powershell
      uv sync
      ```
5. Run the application locally:
      ```powershell
      uv run python -m streamlit run src/main.py
      ```

### Dev Instance (optional steps)
1.  *After 4th step*: Install pre-commit hooks:
      ```powershell
      uv run pre-commit install
      uv run pre-commit autoupdate
      uv run pre-commit run --all-files
      ```
2. *Instead of step 5:* Import the PyCharm configuration file from `docs/ide/.run` and run via IDE.

## Testing
#### Ruff
```powershell
uv sync --extra dev
uv run ruff check
```
or as a standalone tool:
```powershell
uvx ruff check
```

#### Mypy
```powershell
uv sync --extra dev
uv run mypy .\src\
```
or as a standalone tool:
```powershell
uvx mypy .\src\
```

#### Ty
```powershell
uv sync --extra dev
uv run ty check
```
or as a standalone tool:
```powershell
uvx ty check
```

#### Codespell
```powershell
uv sync --extra dev
uv run codespell
```

## Useful links and documentation
