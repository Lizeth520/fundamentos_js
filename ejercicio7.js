// Arreglo simple
const ambientes = ["Sistemas 1", "Sistemas 2", "Laboratorio"];
    ambientes.push("Auditorio");
    console.log(ambientes[0], ambientes.length); // Sistemas 1 4

// Objeto
const aprendiz = { nombre: "Laura", ficha: 2876543, nota: 4.2 };
    console.log(aprendiz.nombre); // notación de punto
    console.log(aprendiz.ficha); // notación de punto
    console.log(aprendiz.nota); // notación de punto
    aprendiz.nota = 4.5; // modificar propiedad

// Arreglo de objetos

const aprendices = [
    { nombre: "Laura", nota: 4.5 },
    { nombre: "Andrés", nota: 2.8 },
    { nombre: "Camila", nota: 3.9 },
    { nombre: "Diego", nota: 3.0 }
];

// forEach: recorrer

    aprendices.forEach(a => console.log(`${a.nombre}: ${a.nota}`));

// filter: solo los aprobados

const aprobados = aprendices.filter(a => a.nota >= 3.0);
    console.log(aprobados.length); // 3

// map: solo los nombres

const nombres = aprendices.map(a => a.nombre.toUpperCase());
    console.log(nombres); // ["LAURA", "ANDRÉS", "CAMILA", "DIEGO"]