import { initService } from '@mono-pnpm-temple/toolbox';
import { graphQlGateway } from './graphql.js';
import { crudGateway } from './crud.js';

initService(async app => {
  await graphQlGateway(app);
  crudGateway(app);
});
