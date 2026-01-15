# Scripts de Gestión de Preguntas

Este proyecto incluye varios scripts útiles para la gestión de las preguntas del examen.

## Scripts Disponibles

### 1. Verificar Estado de Preguntas
```bash
npx tsx scripts/verify-questions.ts
```
**Muestra:**
- Total de preguntas en BD
- Preguntas con imágenes reales vs placeholders
- Detección de duplicados

### 2. Limpiar Duplicados
```bash
npx tsx scripts/clean-duplicates.ts
```
**Función:**
- Detecta preguntas con texto idéntico
- Mantiene la versión con imagen real (si existe)
- Elimina duplicados automáticamente

### 3. Parsear Preguntas desde TXT
```bash
python scripts/parse_questions_v2.py
```
**Función:**
- Lee `questions.txt`
- Genera `prisma/seed.ts`
- Detecta palabras clave para placeholders

### 4. Recargar Base de Datos
```bash
npx prisma db seed
```
**Función:**
- Ejecuta el archivo `prisma/seed.ts`
- Limpia y recarga todas las preguntas

## Flujo de Trabajo Recomendado

### Al agregar/actualizar preguntas:
1. Editar `questions.txt`
2. Ejecutar: `python scripts/parse_questions_v2.py`
3. Ejecutar: `npx prisma db seed`
4. Verificar: `npx tsx scripts/verify-questions.ts`
5. Si hay duplicados: `npx tsx scripts/clean-duplicates.ts`

## Sistema de Selección Aleatoria

El examen ahora funciona así:
- **Total de preguntas únicas:** 130
- **Preguntas por examen:** 35 (seleccionadas aleatoriamente)
- **Algoritmo:** Fisher-Yates shuffle (garantiza distribución uniforme)

### Cada vez que inicias un examen:
✅ Se seleccionan 35 preguntas DIFERENTES de las 130 disponibles
✅ El orden es completamente aleatorio
✅ Pueden repetirse preguntas entre exámenes distintos (es aleatorio)

## Nota Importante

⚠️ Después de ejecutar `clean-duplicates.ts`, la base de datos quedó con **130 preguntas únicas**.

Esto significa que cada usuario tendrá acceso a un pool de 130 preguntas distintas, y en cada intento verá una combinación diferente de 35 preguntas.
