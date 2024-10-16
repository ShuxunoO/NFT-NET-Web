# Main FastAPI entry point
from fastapi import FastAPI, Depends
from .routers import user, project, task

app = FastAPI()

# 注册路由
app.include_router(user.router)
app.include_router(project.router)
app.include_router(task.router)

# ... 其他代码 ...
