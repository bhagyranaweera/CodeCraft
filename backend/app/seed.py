from sqlalchemy import select

from app.database import SessionLocal
from app.models import FAQ, PricingPlan, PricingPlanFeature, Service, TeamMember, Testimonial, User, UserRole
from app.security import hash_password


DEFAULT_SERVICES = [
    {
        "title": "Custom Software Development",
        "description": "Bespoke solutions for complex systems and scalable business operations.",
        "icon": "database",
        "category": "engineering",
    },
    {
        "title": "Web Development",
        "description": "Responsive and modern websites tailored to client requirements.",
        "icon": "window",
        "category": "frontend",
    },
    {
        "title": "Mobile App Development",
        "description": "Cross-platform mobile apps with seamless performance and user-friendly interfaces.",
        "icon": "sliders",
        "category": "mobile",
    },
    {
        "title": "Software Maintenance & Support",
        "description": "System updates, bug fixes, technical support, and ongoing maintenance.",
        "icon": "shield",
        "category": "support",
    },
]

DEFAULT_PLANS = [
    {
        "name": "Startup",
        "description": "For MVPs and early ventures.",
        "price": "$4,500",
        "billing_type": "project",
        "cta_text": "Get Started",
        "features": ["MVP Architecture", "Core Web Application", "Mobile App Development", "2 Months Support"],
    },
    {
        "name": "Growth",
        "description": "Scaling businesses and tech teams.",
        "price": "$8,900",
        "billing_type": "month",
        "is_popular": True,
        "cta_text": "Start Scaling",
        "features": [
            "Dedicated Engineering Squad",
            "Advanced AI Integration",
            "DevOps & Security Audits",
            "CI/CD Implementation",
            "Priority 24/7 Support",
        ],
    },
    {
        "name": "Enterprise",
        "description": "Custom mission-critical solutions.",
        "price": "Custom",
        "billing_type": "custom",
        "cta_text": "Contact Sales",
        "features": ["Legacy Transformation", "Distributed Systems", "Governance & Compliance", "White-Glove Support"],
    },
]


def main() -> None:
    db = SessionLocal()
    try:
        if db.scalar(select(User).where(User.email == "admin@codecraft.solutions")) is None:
            db.add(
                User(
                    name="CodeCraft Admin",
                    email="admin@codecraft.solutions",
                    password_hash=hash_password("ChangeMe123!"),
                    role=UserRole.admin,
                )
            )

        if db.scalar(select(Service)) is None:
            db.add_all(Service(**service) for service in DEFAULT_SERVICES)

        if db.scalar(select(PricingPlan)) is None:
            for item in DEFAULT_PLANS:
                features = item.pop("features")
                plan = PricingPlan(**item)
                plan.features = [PricingPlanFeature(feature=feature) for feature in features]
                db.add(plan)

        if db.scalar(select(FAQ)) is None:
            db.add_all(
                [
                    FAQ(
                        question="How do you handle project management?",
                        answer="We use milestone planning, regular reviews, and transparent status updates.",
                        page="services",
                        sort_order=1,
                    ),
                    FAQ(
                        question="Do we own the source code?",
                        answer="Yes. Ownership terms are defined in your project agreement and handover plan.",
                        page="services",
                        sort_order=2,
                    ),
                ]
            )

        if db.scalar(select(Testimonial)) is None:
            db.add(
                Testimonial(
                    client_name="Marcus Thorne",
                    client_position="CTO",
                    company_name="NexaCore Systems",
                    message="CodeCraft rebuilt our engineering culture with unmatched technical precision.",
                    image_url="/Images/person-icon.png",
                )
            )

        if db.scalar(select(TeamMember)) is None:
            db.add_all(
                [
                    TeamMember(
                        name="Dinusha Sewwandi",
                        role="Chief Executive Officer",
                        bio="A former CTO with a passion for scalable systems and growth strategies.",
                        image_url="/Images/dinusha-leadership.png",
                        sort_order=1,
                    ),
                    TeamMember(
                        name="Bhagya Ranaweera",
                        role="Chief Technology Officer",
                        bio="Specialized in distributed systems and high availability.",
                        image_url="/Images/bhagya-leadership.png",
                        sort_order=2,
                    ),
                ]
            )

        db.commit()
        print("Seed data inserted.")
        print("Default admin: admin@codecraft.solutions / ChangeMe123!")
    finally:
        db.close()


if __name__ == "__main__":
    main()
