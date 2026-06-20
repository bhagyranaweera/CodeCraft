from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import desc, select
from sqlalchemy.orm import Session, selectinload

from app.database import get_db
from app.models import QuoteRequest, QuoteRequestExpertise, User
from app.schemas import QuoteRequestCreate, QuoteRequestRead, QuoteStatusUpdate
from app.security import get_current_user


router = APIRouter(tags=["quote requests"])


@router.post("/quote-requests", response_model=QuoteRequestRead, status_code=status.HTTP_201_CREATED)
def create_quote_request(payload: QuoteRequestCreate, db: Session = Depends(get_db)) -> QuoteRequest:
    data = payload.model_dump(exclude={"expertise"})
    quote = QuoteRequest(**data)
    quote.expertise = [QuoteRequestExpertise(expertise_name=item) for item in payload.expertise]
    db.add(quote)
    db.commit()
    db.refresh(quote)
    return quote


@router.get("/admin/quote-requests", response_model=list[QuoteRequestRead])
def list_quote_requests(db: Session = Depends(get_db), _: User = Depends(get_current_user)) -> list[QuoteRequest]:
    statement = (
        select(QuoteRequest)
        .options(selectinload(QuoteRequest.expertise))
        .order_by(desc(QuoteRequest.created_at))
    )
    return list(db.scalars(statement))


@router.patch("/admin/quote-requests/{quote_id}/status", response_model=QuoteRequestRead)
def update_quote_status(
    quote_id: int,
    payload: QuoteStatusUpdate,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_user),
) -> QuoteRequest:
    quote = db.get(QuoteRequest, quote_id)
    if quote is None:
        raise HTTPException(status_code=404, detail="Quote request not found")
    quote.status = payload.status
    db.commit()
    db.refresh(quote)
    return quote
