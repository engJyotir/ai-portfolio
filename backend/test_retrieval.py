from app.services.retriever_service import (
    RetrieverService
)

results = RetrieverService.retrieve(
    "What AI projects has Jyotiraditya built?"
)

for i, doc in enumerate(results):

    print("=" * 50)

    print(
        f"Result {i+1}"
    )

    print(
        doc.metadata
    )

    print(
        doc.page_content[:500]
    )