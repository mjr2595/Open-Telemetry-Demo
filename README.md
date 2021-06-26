# Open-Telemetry-Demo
OpenTel demo and tutorial from https://www.youtube.com/watch?v=r8UvWSX3KA8
Additional sample code taken from https://github.com/open-telemetry/opentelemetry-js/blob/main/getting-started/README.md

to start this app run:

`docker run -d -p 9411:9411 openzipkin/zipkin` to start a zipkin container

#`npm i` to install the packages

#`node -r ./tracing.js app.js`

then visit http://localhost:8080/date

Now view the tracing data in zipkin : http://localhost:9411/zipkin/