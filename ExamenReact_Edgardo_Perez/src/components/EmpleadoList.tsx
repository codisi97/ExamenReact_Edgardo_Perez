import type { Empleado } from "../types/Empleado";

interface EmpleadoListProps {
  empleados: Empleado[];
  loading: boolean;
}

const SkeletonCard = () => (
  <div className="rounded-xl overflow-hidden bg-gray-800 animate-pulse">
    <div className="p-4 space-y-3">
      <div className="h-3 bg-gray-700 rounded w-1/2" />
      <div className="h-3 bg-gray-700 rounded w-3/4" />
      <div className="h-3 bg-gray-700 rounded w-2/3" />
      <div className="h-3 bg-gray-700 rounded w-1/3" />
    </div>
  </div>
);

const EmpleadoList = ({ empleados, loading }: EmpleadoListProps) => {
  if (loading && empleados.length === 0) {
    return (
      <>
        <div className="flex items-center gap-2 mb-5">
          <div className="w-1 h-4 bg-violet-500 rounded-full" />
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
             Usuarios registrados
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </>
    );
  }

  if (!loading && empleados.length === 0) {
    return (
      <>
        <div className="flex items-center gap-2 mb-5">
          <div className="w-1 h-4 bg-violet-500 rounded-full" />
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
             Usuarios registrados
          </span>
        </div>

        <div className="text-center py-16 text-gray-600">
          <div className="text-5xl mb-3"></div>
          <p className="text-sm">No hay usuarios todavía.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-1 h-4 bg-violet-500 rounded-full" />
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
             Usuarios registrados
          </span>
        </div>

        <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full">
          {empleados.length} {empleados.length === 1 ? "empleado" : "empleados"}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {empleados.map((empleado) => (
          <div
            key={empleado.id}
            className="bg-gray-800 border border-white/10 rounded-xl p-4 hover:border-violet-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 transition-all duration-200"
          >
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-xs font-bold text-violet-400 bg-violet-500/15 px-2 py-0.5 rounded">
                ID #{empleado.id}
              </span>
            </div>

            <p className="text-sm font-bold text-white truncate mb-1">
              {empleado.nombreCompleto}
            </p>

            <p className="text-xs text-gray-400 truncate mb-1">
              Cuenta: {empleado.numeroCuenta}
            </p>

            <p className="text-xs text-gray-500 truncate mb-1">
              {empleado.direccion}
            </p>

            <p className="text-xs text-gray-500 truncate">
              {empleado.email}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default EmpleadoList;