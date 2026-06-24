import { useEmpleados } from "../hooks/useEmpleados";
import EmpleadoList from "./EmpleadoList";

const GestionEmpleados = () => {
  const {
    Empleados,
    loading
  } = useEmpleados();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Usuarios Estudiantes
        </h1>

        <EmpleadoList
          empleados={Empleados}
          loading={loading}
        />

      </div>
    </div>
  );
};

export default GestionEmpleados;