FROM public.ecr.aws/lambda/nodejs:20

COPY ./apps/lambda/dist/index.js ${LAMBDA_TASK_ROOT}
  
CMD [ "index.handler" ]