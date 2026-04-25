# SauceDemo E2E Playwright

Automatización E2E del flujo de compra en SauceDemo usando Playwright e integración con QASE.

## Proyecto QASE
- Project Name: SauceDemo E2E Playwright
- Project Code: SEEP
- Test Case: SEEP-1

## Flujo automatizado
- Login con usuario válido
- Verificación de botón Add to cart
- Agregar producto al carrito
- Checkout
- Captura de datos de envío
- Finalización de compra
- Verificación del mensaje final

## Ejecutar localmente
```bash
npm install
npx playwright test
```

## Configuración
Crear un archivo `.env` con:
```env
QASE_TOKEN=TU_TOKEN
QASE_PROJECT_CODE=SEEP
QASE_RUN_TITLE=SauceDemo E2E Playwright Run
```
