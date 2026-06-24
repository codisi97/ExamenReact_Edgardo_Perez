import type { ChangeEvent, FormEvent } from "react";
import type { EmpleadoFormData } from "../types/EmpleadoFormData";

interface EmpleadoFormProps {
  formData: EmpleadoFormData;
  loading: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const EmpleadoForm = ({
  formData,
  loading,
  handleChange,
  handleSubmit,
}: EmpleadoFormProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 border border-white/10 rounded-xl p-5 mb-8"
    >
      <h2 className="text-xl font-bold text-white mb-5">
        Registrar empleado
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="nombreCompleto"
          placeholder="Nombre completo"
          value={formData.nombreCompleto}
          onChange={handleChange}
          className="bg-gray-900 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:border-violet-500"
        />

        <input
          type="text"
          name="numeroCuenta"
          placeholder="Número de cuenta"
          value={formData.numeroCuenta}
          onChange={handleChange}
          className="bg-gray-900 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:border-violet-500"
        />

        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          value={formData.direccion}
          onChange={handleChange}
          className="bg-gray-900 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:border-violet-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-900 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:border-violet-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-5 bg-violet-600 hover:bg-violet-700 disabled:opacity-50 px-5 py-2 rounded-lg text-sm font-semibold"
      >
        {loading ? "Guardando..." : "Guardar empleado"}
      </button>
    </form>
  );
};

export default EmpleadoForm;