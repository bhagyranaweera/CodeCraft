from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.orm import Session, selectinload

from app.database import get_db
from app.models import FAQ, PricingPlan, PricingPlanFeature, Service, TeamMember, Testimonial, User
from app.schemas import (
    FAQCreate,
    FAQRead,
    PricingPlanCreate,
    PricingPlanRead,
    ServiceCreate,
    ServiceRead,
    TeamMemberCreate,
    TeamMemberRead,
    TestimonialCreate,
    TestimonialRead,
)
from app.security import get_current_user


router = APIRouter(tags=["website content"])


@router.get("/services", response_model=list[ServiceRead])
def list_services(db: Session = Depends(get_db)) -> list[Service]:
    return list(db.scalars(select(Service).where(Service.is_active.is_(True)).order_by(Service.id)))


@router.post("/admin/services", response_model=ServiceRead, status_code=status.HTTP_201_CREATED)
def create_service(payload: ServiceCreate, db: Session = Depends(get_db), _: User = Depends(get_current_user)) -> Service:
    service = Service(**payload.model_dump())
    db.add(service)
    db.commit()
    db.refresh(service)
    return service


@router.put("/admin/services/{service_id}", response_model=ServiceRead)
def update_service(
    service_id: int,
    payload: ServiceCreate,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_user),
) -> Service:
    service = db.get(Service, service_id)
    if service is None:
        raise HTTPException(status_code=404, detail="Service not found")
    for key, value in payload.model_dump().items():
        setattr(service, key, value)
    db.commit()
    db.refresh(service)
    return service


@router.delete("/admin/services/{service_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_service(service_id: int, db: Session = Depends(get_db), _: User = Depends(get_current_user)) -> None:
    service = db.get(Service, service_id)
    if service is None:
        raise HTTPException(status_code=404, detail="Service not found")
    db.delete(service)
    db.commit()


@router.get("/pricing-plans", response_model=list[PricingPlanRead])
def list_pricing_plans(db: Session = Depends(get_db)) -> list[PricingPlan]:
    statement = select(PricingPlan).options(selectinload(PricingPlan.features)).order_by(PricingPlan.id)
    return list(db.scalars(statement))


@router.post("/admin/pricing-plans", response_model=PricingPlanRead, status_code=status.HTTP_201_CREATED)
def create_pricing_plan(
    payload: PricingPlanCreate,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_user),
) -> PricingPlan:
    data = payload.model_dump(exclude={"features"})
    plan = PricingPlan(**data)
    plan.features = [PricingPlanFeature(feature=item) for item in payload.features]
    db.add(plan)
    db.commit()
    db.refresh(plan)
    return plan


@router.get("/faqs", response_model=list[FAQRead])
def list_faqs(page: str | None = None, db: Session = Depends(get_db)) -> list[FAQ]:
    statement = select(FAQ).where(FAQ.is_active.is_(True))
    if page:
        statement = statement.where(FAQ.page == page)
    return list(db.scalars(statement.order_by(FAQ.sort_order, FAQ.id)))


@router.post("/admin/faqs", response_model=FAQRead, status_code=status.HTTP_201_CREATED)
def create_faq(payload: FAQCreate, db: Session = Depends(get_db), _: User = Depends(get_current_user)) -> FAQ:
    faq = FAQ(**payload.model_dump())
    db.add(faq)
    db.commit()
    db.refresh(faq)
    return faq


@router.get("/testimonials", response_model=list[TestimonialRead])
def list_testimonials(db: Session = Depends(get_db)) -> list[Testimonial]:
    return list(db.scalars(select(Testimonial).where(Testimonial.is_active.is_(True)).order_by(Testimonial.id)))


@router.post("/admin/testimonials", response_model=TestimonialRead, status_code=status.HTTP_201_CREATED)
def create_testimonial(
    payload: TestimonialCreate,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_user),
) -> Testimonial:
    testimonial = Testimonial(**payload.model_dump())
    db.add(testimonial)
    db.commit()
    db.refresh(testimonial)
    return testimonial


@router.get("/team-members", response_model=list[TeamMemberRead])
def list_team_members(db: Session = Depends(get_db)) -> list[TeamMember]:
    statement = select(TeamMember).where(TeamMember.is_active.is_(True)).order_by(TeamMember.sort_order, TeamMember.id)
    return list(db.scalars(statement))


@router.post("/admin/team-members", response_model=TeamMemberRead, status_code=status.HTTP_201_CREATED)
def create_team_member(
    payload: TeamMemberCreate,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_user),
) -> TeamMember:
    team_member = TeamMember(**payload.model_dump())
    db.add(team_member)
    db.commit()
    db.refresh(team_member)
    return team_member
