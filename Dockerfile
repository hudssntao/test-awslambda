FROM public.ecr.aws/lambda/nodejs:20

ARG LAMBDA_DIR

COPY ./apps/lambda/dist/${LAMBDA_DIR}/index.js ${LAMBDA_TASK_ROOT}

CMD ["index.handler"] 
