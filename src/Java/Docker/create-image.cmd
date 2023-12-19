docker build --no-cache -f SQL\Dockerfile.PostgreSql -t newex-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t newex-java/app ../../..
