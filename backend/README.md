# CodeCraft Backend

FastAPI backend for the CodeCraft Solutions website.

## Setup

1. Create a PostgreSQL database named `codecraft`.
2. Copy `.env.example` to `.env`.
3. Update `DATABASE_URL` with your PostgreSQL username and password.
4. Install dependencies:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

5. Create database tables:

```powershell
python -m app.create_tables
```

6. Run the API:

```powershell
uvicorn app.main:app --reload
```

API docs will be available at:

```text
http://127.0.0.1:8000/docs
```

## Main Tables

- `users`
- `contact_messages`
- `quote_requests`
- `quote_request_expertise`
- `services`
- `pricing_plans`
- `pricing_plan_features`
- `faqs`
- `testimonials`
- `team_members`
- `uploaded_files`
