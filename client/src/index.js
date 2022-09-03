'use strict';
import { api, loadApi } from './api/api';

document.addEventListener('DOMContentLoaded', async () => {
  await loadApi({ secure: true });
  console.log(await api.example.method({ param1: 1 }));
  console.log(await api.introspection.getErrors());
});
