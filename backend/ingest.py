from app.services.ingestion_service import (
    IngestionService
)

count = (
    IngestionService
    .ingest_portfolio()
)

print(
    f"Ingested {count} chunks"
)