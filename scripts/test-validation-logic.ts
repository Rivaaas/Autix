// Test de validación estricta para preguntas de opción múltiple

console.log('🧪 Test de Validación Estricta de Respuestas Múltiples\n');

// Simulación de la lógica de validación
function validateAnswer(correctIds: string[], selectedIds: string[]): boolean {
  const correctSorted = [...correctIds].sort();
  const selectedSorted = [...selectedIds].sort();
  return JSON.stringify(correctSorted) === JSON.stringify(selectedSorted);
}

// Caso 1: Pregunta con 3 respuestas correctas
const correctAnswers = ['id1', 'id2', 'id3'];

console.log('📋 Pregunta: 3 respuestas correctas (id1, id2, id3)\n');

// Test 1: Selecciona las 3 correctas ✅
console.log('Test 1: Usuario selecciona [id1, id2, id3]');
console.log(`Resultado: ${validateAnswer(correctAnswers, ['id1', 'id2', 'id3']) ? '✅ CORRECTO' : '❌ INCORRECTO'}\n`);

// Test 2: Selecciona 2 correctas + 1 incorrecta ❌
console.log('Test 2: Usuario selecciona [id1, id2, id_incorrecta]');
console.log(`Resultado: ${validateAnswer(correctAnswers, ['id1', 'id2', 'id_incorrecta']) ? '✅ CORRECTO' : '❌ INCORRECTO'}`);
console.log('   → Tiene 1 respuesta incorrecta incluida\n');

// Test 3: Selecciona solo 2 de las 3 correctas ❌
console.log('Test 3: Usuario selecciona [id1, id2]');
console.log(`Resultado: ${validateAnswer(correctAnswers, ['id1', 'id2']) ? '✅ CORRECTO' : '❌ INCORRECTO'}`);
console.log('   → Falta 1 respuesta correcta (id3)\n');

// Test 4: Selecciona todas correctas + 1 incorrecta ❌
console.log('Test 4: Usuario selecciona [id1, id2, id3, id_incorrecta]');
console.log(`Resultado: ${validateAnswer(correctAnswers, ['id1', 'id2', 'id3', 'id_incorrecta']) ? '✅ CORRECTO' : '❌ INCORRECTO'}`);
console.log('   → Tiene 1 respuesta incorrecta adicional\n');

// Test 5: Selecciona solo 1 correcta ❌
console.log('Test 5: Usuario selecciona [id1]');
console.log(`Resultado: ${validateAnswer(correctAnswers, ['id1']) ? '✅ CORRECTO' : '❌ INCORRECTO'}`);
console.log('   → Faltan 2 respuestas correctas\n');

// Test 6: No selecciona nada ❌
console.log('Test 6: Usuario selecciona []');
console.log(`Resultado: ${validateAnswer(correctAnswers, []) ? '✅ CORRECTO' : '❌ INCORRECTO'}`);
console.log('   → No seleccionó ninguna respuesta\n');

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('📊 Resumen de la Validación:');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
console.log('✅ Para que una respuesta sea CORRECTA:');
console.log('   • Debe incluir TODAS las respuestas correctas');
console.log('   • NO debe incluir ninguna respuesta incorrecta');
console.log('   • La cantidad debe coincidir exactamente\n');
console.log('❌ Se marca como INCORRECTA si:');
console.log('   • Falta alguna respuesta correcta');
console.log('   • Incluye alguna respuesta incorrecta');
console.log('   • Tiene más o menos respuestas de las necesarias\n');
