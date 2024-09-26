## Docker Setup
1. Pull Docker
` docker pull postgres:<version> `
2. Run Docker Container
` docker run -itd -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -v ./data:/var/lib/postgresql/data --name postgresql postgres`
3. Run this on Docker CMD to modify databases
` $ PGPASSWORD=password psql -h localhost -p 5432 -U postgres `
4. create db: `create database <db_name>`
5. show dbs: `\l`
6. drop db `drop database <db_name>`