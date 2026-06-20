from datetime import datetime

from pydantic import BaseModel, EmailStr, Field

from app.models import MessageStatus, QuoteStatus, UserRole


class UserCreate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    password: str = Field(min_length=8)
    role: UserRole = UserRole.admin


class UserRead(BaseModel):
    id: int
    name: str
    email: EmailStr
    role: UserRole
    is_active: bool
    created_at: datetime

    model_config = {"from_attributes": True}


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


class ContactMessageCreate(BaseModel):
    full_name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    subject: str = Field(min_length=2, max_length=160)
    message: str = Field(min_length=5)


class ContactMessageRead(BaseModel):
    id: int
    full_name: str
    email: EmailStr
    subject: str
    message: str
    status: MessageStatus
    created_at: datetime

    model_config = {"from_attributes": True}


class ContactStatusUpdate(BaseModel):
    status: MessageStatus


class QuoteRequestCreate(BaseModel):
    full_name: str = Field(min_length=2, max_length=120)
    company_email: EmailStr
    company_name: str | None = Field(default=None, max_length=160)
    job_title: str | None = Field(default=None, max_length=160)
    project_summary: str = Field(min_length=10)
    budget_range: str = Field(min_length=2, max_length=80)
    timeline_goal: str = Field(min_length=2, max_length=80)
    expertise: list[str] = Field(default_factory=list)


class QuoteExpertiseRead(BaseModel):
    id: int
    expertise_name: str

    model_config = {"from_attributes": True}


class QuoteRequestRead(BaseModel):
    id: int
    full_name: str
    company_email: EmailStr
    company_name: str | None
    job_title: str | None
    project_summary: str
    budget_range: str
    timeline_goal: str
    status: QuoteStatus
    created_at: datetime
    expertise: list[QuoteExpertiseRead] = []

    model_config = {"from_attributes": True}


class QuoteStatusUpdate(BaseModel):
    status: QuoteStatus


class ServiceBase(BaseModel):
    title: str = Field(min_length=2, max_length=160)
    description: str = Field(min_length=5)
    icon: str | None = Field(default=None, max_length=80)
    category: str | None = Field(default=None, max_length=120)
    is_active: bool = True


class ServiceCreate(ServiceBase):
    pass


class ServiceRead(ServiceBase):
    id: int
    created_at: datetime

    model_config = {"from_attributes": True}


class PricingPlanFeatureCreate(BaseModel):
    feature: str = Field(min_length=2, max_length=255)


class PricingPlanFeatureRead(BaseModel):
    id: int
    feature: str

    model_config = {"from_attributes": True}


class PricingPlanCreate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    description: str = Field(min_length=5)
    price: str = Field(min_length=1, max_length=80)
    billing_type: str | None = Field(default=None, max_length=80)
    is_popular: bool = False
    cta_text: str = Field(default="Get Started", max_length=80)
    features: list[str] = Field(default_factory=list)


class PricingPlanRead(BaseModel):
    id: int
    name: str
    description: str
    price: str
    billing_type: str | None
    is_popular: bool
    cta_text: str
    created_at: datetime
    features: list[PricingPlanFeatureRead] = []

    model_config = {"from_attributes": True}


class FAQCreate(BaseModel):
    question: str = Field(min_length=2, max_length=255)
    answer: str = Field(min_length=2)
    page: str = Field(default="general", max_length=80)
    sort_order: int = 0
    is_active: bool = True


class FAQRead(FAQCreate):
    id: int

    model_config = {"from_attributes": True}


class TestimonialCreate(BaseModel):
    client_name: str = Field(min_length=2, max_length=120)
    client_position: str | None = Field(default=None, max_length=120)
    company_name: str | None = Field(default=None, max_length=160)
    message: str = Field(min_length=5)
    image_url: str | None = Field(default=None, max_length=500)
    is_active: bool = True


class TestimonialRead(TestimonialCreate):
    id: int

    model_config = {"from_attributes": True}


class TeamMemberCreate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    role: str = Field(min_length=2, max_length=120)
    bio: str | None = None
    image_url: str | None = Field(default=None, max_length=500)
    sort_order: int = 0
    is_active: bool = True


class TeamMemberRead(TeamMemberCreate):
    id: int

    model_config = {"from_attributes": True}
