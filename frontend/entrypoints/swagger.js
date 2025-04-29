import SwaggerUI from 'swagger-ui'
import ApiKeyFormPlugin from '@/lib/swagger_api_key_form';
import domready from 'domready';
import 'swagger-ui/dist/swagger-ui.css';

domready(() => {
  const swaggerUiEl = document.getElementById('swagger-ui');

  SwaggerUI({
    url: swaggerUiEl.dataset.swaggerUrl,
    dom_id: '#swagger-ui',
    plugins: [
      ApiKeyFormPlugin,
    ],
  });
});
