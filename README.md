# devops-homework

CLI commands:

1. Створюємо (білдимо) image
```
docker build -t secret333boy/devops-homework:1.0 .
```
2. Запускаємо на 80 локальному порті з обмеженнями на cpu та memory
```
docker run -p 80:3000 -d --rm -m 512M --memory-swap=1G --cpu-period 1000000 --cpu-quota 200000 --cpuset-cpus 0-1 secret333boy/devops-homework:1.0
```
3. Дивимось чи запустився наш контейнер
```
docker ps
```
4. Пушимо image у docker hub
```
docker push secret333boy/devops-homework:1.0
```