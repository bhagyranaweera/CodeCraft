from datetime import datetime
from enum import Enum

from sqlalchemy import Boolean, DateTime, Enum as SAEnum, ForeignKey, Integer, String, Text, func
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database import Base


class UserRole(str, Enum):
    admin = "admin"
    staff = "staff"


class MessageStatus(str, Enum):
    new = "new"
    read = "read"
    archived = "archived"


class QuoteStatus(str, Enum):
    new = "new"
    reviewing = "reviewing"
    quoted = "quoted"
    accepted = "accepted"
    rejected = "rejected"


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(120), nullable=False)
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True, nullable=False)
    password_hash: Mapped[str] = mapped_column(String(255), nullable=False)
    role: Mapped[UserRole] = mapped_column(SAEnum(UserRole), default=UserRole.admin, nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False)


class ContactMessage(Base):
    __tablename__ = "contact_messages"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    full_name: Mapped[str] = mapped_column(String(120), nullable=False)
    email: Mapped[str] = mapped_column(String(255), nullable=False)
    subject: Mapped[str] = mapped_column(String(160), nullable=False)
    message: Mapped[str] = mapped_column(Text, nullable=False)
    status: Mapped[MessageStatus] = mapped_column(SAEnum(MessageStatus), default=MessageStatus.new, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False)


class QuoteRequest(Base):
    __tablename__ = "quote_requests"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    full_name: Mapped[str] = mapped_column(String(120), nullable=False)
    company_email: Mapped[str] = mapped_column(String(255), nullable=False)
    company_name: Mapped[str] = mapped_column(String(160), nullable=True)
    job_title: Mapped[str] = mapped_column(String(160), nullable=True)
    project_summary: Mapped[str] = mapped_column(Text, nullable=False)
    budget_range: Mapped[str] = mapped_column(String(80), nullable=False)
    timeline_goal: Mapped[str] = mapped_column(String(80), nullable=False)
    status: Mapped[QuoteStatus] = mapped_column(SAEnum(QuoteStatus), default=QuoteStatus.new, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False)

    expertise: Mapped[list["QuoteRequestExpertise"]] = relationship(
        back_populates="quote_request",
        cascade="all, delete-orphan",
    )
    uploaded_files: Mapped[list["UploadedFile"]] = relationship(
        back_populates="quote_request",
        cascade="all, delete-orphan",
    )


class QuoteRequestExpertise(Base):
    __tablename__ = "quote_request_expertise"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    quote_request_id: Mapped[int] = mapped_column(ForeignKey("quote_requests.id", ondelete="CASCADE"), nullable=False)
    expertise_name: Mapped[str] = mapped_column(String(160), nullable=False)

    quote_request: Mapped[QuoteRequest] = relationship(back_populates="expertise")


class Service(Base):
    __tablename__ = "services"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    title: Mapped[str] = mapped_column(String(160), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=False)
    icon: Mapped[str] = mapped_column(String(80), nullable=True)
    category: Mapped[str] = mapped_column(String(120), nullable=True)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False)


class PricingPlan(Base):
    __tablename__ = "pricing_plans"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(120), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=False)
    price: Mapped[str] = mapped_column(String(80), nullable=False)
    billing_type: Mapped[str] = mapped_column(String(80), nullable=True)
    is_popular: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    cta_text: Mapped[str] = mapped_column(String(80), default="Get Started", nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False)

    features: Mapped[list["PricingPlanFeature"]] = relationship(
        back_populates="pricing_plan",
        cascade="all, delete-orphan",
    )


class PricingPlanFeature(Base):
    __tablename__ = "pricing_plan_features"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    pricing_plan_id: Mapped[int] = mapped_column(ForeignKey("pricing_plans.id", ondelete="CASCADE"), nullable=False)
    feature: Mapped[str] = mapped_column(String(255), nullable=False)

    pricing_plan: Mapped[PricingPlan] = relationship(back_populates="features")


class FAQ(Base):
    __tablename__ = "faqs"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    question: Mapped[str] = mapped_column(String(255), nullable=False)
    answer: Mapped[str] = mapped_column(Text, nullable=False)
    page: Mapped[str] = mapped_column(String(80), default="general", nullable=False)
    sort_order: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)


class Testimonial(Base):
    __tablename__ = "testimonials"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    client_name: Mapped[str] = mapped_column(String(120), nullable=False)
    client_position: Mapped[str] = mapped_column(String(120), nullable=True)
    company_name: Mapped[str] = mapped_column(String(160), nullable=True)
    message: Mapped[str] = mapped_column(Text, nullable=False)
    image_url: Mapped[str] = mapped_column(String(500), nullable=True)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)


class TeamMember(Base):
    __tablename__ = "team_members"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(120), nullable=False)
    role: Mapped[str] = mapped_column(String(120), nullable=False)
    bio: Mapped[str] = mapped_column(Text, nullable=True)
    image_url: Mapped[str] = mapped_column(String(500), nullable=True)
    sort_order: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)


class UploadedFile(Base):
    __tablename__ = "uploaded_files"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    quote_request_id: Mapped[int] = mapped_column(ForeignKey("quote_requests.id", ondelete="CASCADE"), nullable=False)
    file_name: Mapped[str] = mapped_column(String(255), nullable=False)
    file_url: Mapped[str] = mapped_column(String(500), nullable=False)
    file_type: Mapped[str] = mapped_column(String(120), nullable=True)
    uploaded_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False)

    quote_request: Mapped[QuoteRequest] = relationship(back_populates="uploaded_files")
