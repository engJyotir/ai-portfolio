from fastapi import APIRouter
from pydantic import BaseModel

from langchain_openai import ChatOpenAI

from app.services.retriever_service import (
    RetrieverService
)

router = APIRouter()


class ChatRequest(BaseModel):
    question: str


@router.post("/chat")
def chat(request: ChatRequest):

    docs = (
        RetrieverService.retrieve(
            request.question
        )
    )

    context = "\n\n".join(
        [
            doc.page_content
            for doc in docs
        ]
    )

    llm = ChatOpenAI(
        model="gpt-4o-mini",
        temperature=0
    )

    response = llm.invoke(
        f"""
You are Jyotiraditya's AI portfolio assistant.

Your job is to answer questions about:

- Jyotiraditya
- His experience
- His projects
- His skills
- His interests
- His career goals

Rules:

- Only answer using the provided context.
- If the answer is not in the context, say:
  "I don't have enough information to answer that."
- Be concise and professional.
- When discussing projects, mention technologies used when available.
Speak naturally and professionally.

When asked about Jyotiraditya,
answer as if you are his AI representative.

Be concise but informative.

Highlight:
- AI Engineering
- RAG Systems
- Agentic AI
- Production Deployments
- Business Impact

Whenever possible mention:
- technologies
- outcomes
- deployed products

Context:

{context}

Question:

{request.question}
"""
    )

    return {
        "answer": response.content,
        "sources": list(
            set(
                [
                    doc.metadata.get(
                        "source",
                        "unknown"
                    )
                    for doc in docs
                ]
            )
        )
    }