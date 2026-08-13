/**
 * Hospital del Bosque - Mock Data Store
 */

const HOSPITAL_DATA = {
  stats: {
    pacientesAtendidos: 42,
    citasPendientes: 15,
    recetasEmitidas: 89,
    ventasFarmacia: 'L. 45,200'
  },

  actividades: [
    {
      tipo: 'blue',
      tiempo: 'Hace 5 min',
      html: 'Nuevo expediente de <strong>Pediatría</strong> creado por <strong>Dra. Martínez</strong>.'
    },
    {
      tipo: 'green',
      tiempo: 'Hace 12 min',
      html: 'Venta procesada en <strong>Farmacia</strong> (Ticket #00452).'
    },
    {
      tipo: 'gold',
      tiempo: 'Hace 25 min',
      html: 'Resultados de <strong>Laboratorio</strong> listos para <strong>Juan Pérez</strong>.'
    }
  ],

  pacientes: [
    {
      id: '0801-1985-12345',
      nombre: 'Juan Antonio Pérez',
      edad: '41 años',
      genero: 'Masculino',
      telefono: '9988-7766',
      direccion: 'Col. Palmira, Tegucigalpa',
      tipo_sangre: 'O+'
    },
    {
      id: '0501-1990-54321',
      nombre: 'María Elena Gómez',
      edad: '36 años',
      genero: 'Femenino',
      telefono: '8877-6655',
      direccion: 'Res. El Trapiche, Tegucigalpa',
      tipo_sangre: 'A+'
    },
    {
      id: '1804-2015-00112',
      nombre: 'Carlos Andrés Ruiz',
      edad: '11 años',
      genero: 'Masculino',
      telefono: 'Padre: 9911-2233',
      direccion: 'Col. Loarque, Tegucigalpa',
      tipo_sangre: 'B+'
    },
    {
      id: '0801-1960-99887',
      nombre: 'Ana Leticia Licona',
      edad: '66 años',
      genero: 'Femenino',
      telefono: '3322-1144',
      direccion: 'Col. Miraflores, Tegucigalpa',
      tipo_sangre: 'O-'
    }
  ],

  expedientesRecientes: [
    {
      paciente: 'María Gómez',
      fecha: '10/08/2026',
      especialidad: 'Ginecología',
      motivo: 'Embarazo 12 semanas, control normal.'
    },
    {
      paciente: 'Carlos Ruiz',
      fecha: '08/08/2026',
      especialidad: 'Pediatría',
      motivo: 'Amigdalitis aguda.'
    },
    {
      paciente: 'Juan Antonio Pérez',
      fecha: '02/08/2026',
      especialidad: 'Cardiología',
      motivo: 'Chequeo rutinario de hipertensión arterial bajo control.'
    }
  ],

  medicos: [
    {
      nombre: 'Dra. Sofía Martínez',
      especialidad: 'Pediatría',
      colegiado: 'CMP-4589',
      horario: 'Lunes a Viernes (08:00 - 16:00)',
      estado: 'Disponible',
      avatar: 'SM'
    },
    {
      nombre: 'Dr. Roberto Mendoza',
      especialidad: 'Cardiología',
      colegiado: 'CMP-3120',
      horario: 'Lunes, Miércoles, Viernes (09:00 - 15:00)',
      estado: 'En Consulta',
      avatar: 'RM'
    },
    {
      nombre: 'Dra. Carmen Estrada',
      especialidad: 'Ginecología y Obstetricia',
      colegiado: 'CMP-5192',
      horario: 'Lunes a Jueves (10:00 - 18:00)',
      estado: 'Disponible',
      avatar: 'CE'
    },
    {
      nombre: 'Dr. Fernando Paz',
      especialidad: 'Medicina General',
      colegiado: 'CMP-6014',
      horario: 'Lunes a Sábado (07:00 - 15:00)',
      estado: 'En Consulta',
      avatar: 'FP'
    },
    {
      nombre: 'Dra. Valeria Rivera',
      especialidad: 'Cirugía General',
      colegiado: 'CMP-2980',
      horario: 'Guardias y Cirugías programadas',
      estado: 'En Procedimiento',
      avatar: 'VR'
    }
  ],

  farmaciaProductos: [
    {
      id: 1,
      nombre: 'Amoxicilina 500mg',
      categoria: 'Antibióticos',
      precio: 185.00,
      stock: 45,
      imagen: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      nombre: 'Paracetamol 500mg',
      categoria: 'Analgésicos',
      precio: 45.00,
      stock: 120,
      imagen: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      nombre: 'Ibuprofeno 400mg',
      categoria: 'Antiinflamatorios',
      precio: 90.00,
      stock: 80,
      imagen: 'https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      nombre: 'Azitromicina 500mg',
      categoria: 'Antibióticos',
      precio: 240.00,
      stock: 35,
      imagen: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      nombre: 'Loratadina 10mg',
      categoria: 'Antihistamínicos',
      precio: 65.00,
      stock: 95,
      imagen: 'https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      nombre: 'Omeprazol 20mg',
      categoria: 'Gastrointestinal',
      precio: 130.00,
      stock: 60,
      imagen: 'https://images.pexels.com/photos/3683077/pexels-photo-3683077.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 7,
      nombre: 'Suero Fisiológico 500ml',
      categoria: 'Soluciones',
      precio: 110.00,
      stock: 40,
      imagen: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 8,
      nombre: 'Complejo B Inyectable',
      categoria: 'Vitaminas',
      precio: 95.00,
      stock: 50,
      imagen: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ],

  laboratorioOrdenes: [
    { codigo: 'LAB-0892', examen: 'Hemograma Completo', paciente: 'Juan Antonio Pérez', medico: 'Dra. Martínez', fecha: 'Hoy 15:30', estado: 'Listo' },
    { codigo: 'LAB-0891', examen: 'Glucosa y Perfil Lipídico', paciente: 'Ana Leticia Licona', medico: 'Dr. Paz', fecha: 'Hoy 14:15', estado: 'Listo' },
    { codigo: 'LAB-0890', examen: 'Panel Respiratorio Viral', paciente: 'Carlos Andrés Ruiz', medico: 'Dra. Martínez', fecha: 'Hoy 13:00', estado: 'En Proceso' },
    { codigo: 'LAB-0889', examen: 'Cultivo y Antibiograma', paciente: 'María Elena Gómez', medico: 'Dra. Estrada', fecha: 'Hoy 11:20', estado: 'Pendiente' }
  ],

  rrhhPersonal: [
    { empId: 'EMP-001', nombre: 'Dra. Sofía Martínez', cargo: 'Médico Especialista', dpto: 'Pediatría', salario: 'L. 42,000.00', estado: 'Activo' },
    { empId: 'EMP-002', nombre: 'Dr. Roberto Mendoza', cargo: 'Médico Especialista', dpto: 'Cardiología', salario: 'L. 46,000.00', estado: 'Activo' },
    { empId: 'EMP-003', nombre: 'Lic. Andrea Cáceres', cargo: 'Jefa de Farmacia', dpto: 'Farmacia', salario: 'L. 24,000.00', estado: 'Activo' },
    { empId: 'EMP-004', nombre: 'Lic. Mario Núñez', cargo: 'Bioquímico Clínico', dpto: 'Laboratorio', salario: 'L. 26,500.00', estado: 'Activo' },
    { empId: 'EMP-005', nombre: 'Lic. Karla Rivera', cargo: 'Coordinadora de Admisiones', dpto: 'Recepción', salario: 'L. 18,500.00', estado: 'Activo' }
  ],

  rolesAccesos: [
    { rol: 'Administrador del Sistema', usuarios: 2, descripcion: 'Acceso total y configuración de parámetros globales' },
    { rol: 'Médico Tratante', usuarios: 12, descripcion: 'Acceso a expedientes clínicos, consultas y recetas' },
    { rol: 'Farmacia / POS', usuarios: 4, descripcion: 'Control de inventario, dispensación y cobros' },
    { rol: 'Laboratorista', usuarios: 3, descripcion: 'Recepción de muestras y carga de resultados' },
    { rol: 'Recepción / Admisión', usuarios: 5, descripcion: 'Registro de pacientes y gestión de citas' }
  ]
};
