from pinecone import Pinecone

from langchain_pinecone import (
    PineconeVectorStore
)

from app.config import (
    PINECONE_API_KEY,
    PINECONE_INDEX_NAME
)

from app.services.embedding_service import (
    EmbeddingService
)


class PineconeService:

    @staticmethod
    def get_vector_store():

        pc = Pinecone(
            api_key=PINECONE_API_KEY
        )

        index = pc.Index(
            PINECONE_INDEX_NAME
        )

        embeddings = (
            EmbeddingService
            .get_embeddings()
        )

        return PineconeVectorStore(
            index=index,
            embedding=embeddings
        )