from fastapi import APIRouter, Depends, status
from sqlalchemy import desc, select
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import ContactMessage, User
from app.schemas import ContactMessageCreate, ContactMessageRead, ContactStatusUpdate
from app.security import get_current_user


router = APIRouter(tags=["contact"])


@router.post("/contact", response_model=ContactMessageRead, status_code=status.HTTP_201_CREATED)
def create_contact_message(payload: ContactMessageCreate, db: Session = Depends(get_db)) -> ContactMessage:
    message = ContactMessage(**payload.model_dump())
    db.add(message)
    db.commit()
    db.refresh(message)
    return message


@router.get("/admin/contact-messages", response_model=list[ContactMessageRead])
def list_contact_messages(db: Session = Depends(get_db), _: User = Depends(get_current_user)) -> list[ContactMessage]:
    return list(db.scalars(select(ContactMessage).order_by(desc(ContactMessage.created_at))))


@router.patch("/admin/contact-messages/{message_id}", response_model=ContactMessageRead)
def update_contact_status(
    message_id: int,
    payload: ContactStatusUpdate,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_user),
) -> ContactMessage:
    message = db.get(ContactMessage, message_id)
    if message is None:
        from fastapi import HTTPException

        raise HTTPException(status_code=404, detail="Contact message not found")
    message.status = payload.status
    db.commit()
    db.refresh(message)
    return message
