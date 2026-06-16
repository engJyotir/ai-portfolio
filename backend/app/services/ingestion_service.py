from pathlib import Path

from langchain_core.documents import (
    Document
)

from langchain_text_splitters import (
    RecursiveCharacterTextSplitter
)

from app.services.pinecone_service import (
    PineconeService
)


class IngestionService:

    @staticmethod
    def ingest_portfolio():

        docs = []

        kb_path = Path(
            "../portfolio-kb"
        )

        for file in kb_path.glob("*.md"):

            content = (
                file.read_text(
                    encoding="utf-8"
                )
            )

            docs.append(
    Document(
        page_content=f"""
FILE: {file.stem}

{content}
""",
        metadata={
            "source": file.name,
            "category": file.stem
        }
    )
)

        splitter = (
            RecursiveCharacterTextSplitter(
                chunk_size=1000,
                chunk_overlap=200
            )
        )

        chunks = splitter.split_documents(
            docs
        )

        vector_store = (
            PineconeService
            .get_vector_store()
        )

        vector_store.add_documents(
            chunks
        )

        return len(chunks)