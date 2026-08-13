# 🏥 Hospital del Bosque - Sistema Integral Hospitalario

Prototipo web funcional e interactivo para la gestión médica, expedientes clínicos, registro de pacientes, directorio de médicos, punto de venta de farmacia (POS), laboratorio y administración hospitalaria del **Hospital del Bosque**.

---

## 🌟 Características del Sistema

- **Autenticación / Login**: Pantalla de inicio de sesión con validación visual y diseño institucional.
- **Dashboard Principal**: Tarjetas de indicadores clave (Pacientes atendidos, Citas pendientes, Recetas emitidas, Ventas de farmacia) y panel de actividad reciente.
- **Registro de Pacientes**: Módulo de consulta con tabla de pacientes y modal interactivo para registrar nuevos pacientes.
- **Módulo de Expedientes Clínicos**: Formulario completo de consulta médica con generación dinámica de recetas médicas multilínea e historial de últimos expedientes.
- **Punto de Venta de Farmacia (POS)**: Catálogo visual de medicamentos con fotografías de alta resolución (Pexels), control de stock, carrito interactivo y cálculo de impuestos (15% ISV) y totales en Lempiras (*L.*).
- **Directorio de Médicos**: Especialistas hospitalarios con horarios y estado en tiempo real (*Disponible*, *En Consulta*, *En Procedimiento*).
- **Control de Laboratorio**: Registro y seguimiento del estado de órdenes y análisis clínicos.
- **RRHH y Planillas**: Gestión de personal hospitalario y estructura salarial.
- **Roles y Permisos**: Matriz de seguridad y niveles de acceso.
- **Branding Oficial**: Logotipo vectorial oficial (SVG) con la identidad visual de *Hospital del Bosque*.

---

## 🚀 Estructura del Proyecto

```
hospital-del-bosque/
├── index.html              # Estructura principal de la aplicación (SPA)
├── README.md               # Documentación del proyecto
├── Abrir_Hospital.bat      # Lanzador rápido para Windows
├── assets/
│   └── logo.svg            # Logotipo vectorial oficial
├── css/
│   └── styles.css          # Sistema de diseño, layout responsive y estilos
└── js/
    ├── app.js              # Controlador principal, navegación y eventos
    └── data.js             # Base de datos local / Mock Data Store
```

---

## 💻 Instrucciones de Uso

1. Clona o descarga este repositorio:
   ```bash
   git clone https://github.com/CarlosMatute/protipo_hosipital_bosque.git
   ```
2. Abre el archivo `index.html` en cualquier navegador web moderno (Chrome, Edge, Firefox, Opera, etc.) o ejecuta `Abrir_Hospital.bat` en Windows.
3. En la pantalla de login, haz clic en **"Iniciar Sesión"** para ingresar al sistema.
