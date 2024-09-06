aws lambda update-function-configuration \
--function-name <nome-da-lambda> \
--layers arn:aws:lambda:us-east-1:184161586896:layer:opentelemetry-nodejs-0_9_0:4

aws lambda update-function-configuration \
--function-name <nome-da-lambda> \
--environment "Variables={AWS_LAMBDA_EXEC_WRAPPER=/opt/otel-handler,OTEL_SERVICE_NAME=lambda-nodejs-otel-agent,OTEL_TRACES_SAMPLER=always_on,OTEL_TRACES_EXPORTER=otlp,OTEL_METRICS_EXPORTER=otlp,OTEL_LOGS_EXPORTER=otlp,OTEL_LOG_LEVEL=ERROR,OTEL_EXPORTER_OTLP_ENDPOINT=http://3.86.89.245:4318/,OTEL_PROPAGATORS=tracecontext,baggage,xray,OTEL_LAMBDA_TRACE_MODE=capture,OTEL_RESOURCE_ATTRIBUTES=service.name=lambda-nodejs-otel-agent,environment=production}"
