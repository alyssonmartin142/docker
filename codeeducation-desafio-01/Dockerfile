FROM golang:alpine AS build-env
WORKDIR /src/app
COPY ./app .
RUN go build -o CodeEducation

FROM scratch
WORKDIR /app
COPY --from=build-env /src/app /app/
CMD ["./CodeEducation"]