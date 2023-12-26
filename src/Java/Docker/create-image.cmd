docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proba19-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t proba19-java/app ../../..
