'use strict';

const { LogLevel } = require("@opentelemetry/core")
const { ZipkinExporter } = require("@opentelemetry/exporter-zipkin")
const { NodeTracerProvider } = require("@opentelemetry/node")
const { SimpleSpanProcessor } = require("@opentelemetry/tracing")
//causing error, need to fix
const provider = new NodeTracerProvider({
  logLevel: LogLevel.ERROR
})

provider.register()

provider.addSpanProcessor(
    new SimpleSpanProcessor(
        new ZipkinExporter({
            serviceName: 'get-date'
        })
    )
)