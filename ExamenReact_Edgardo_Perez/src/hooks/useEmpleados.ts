import { useState, useEffect,type ChangeEvent, type FormEvent} from "react";
import type { Empleado } from "../types/Empleado"
import type { EmpleadoFormData } from "../types/EmpleadoFormData"
import axios from "axios";
import Swal from "sweetalert2";


export const useEmpleados = () => {
  const API_URL = "https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado";

  const DEFAULT_FORM: EmpleadoFormData = {
    nombreCompleto: "",
    numeroCuenta: "",
    direccion: "",
    email: "",
  };

  const [Empleados, setEmpleados] = useState<Empleado[]>([]);
  const [formData, setFormData] = useState<EmpleadoFormData>(DEFAULT_FORM);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchEmpleados = async () => {
    setLoading(true);
    try {
      const res = await axios.get<Empleado[]>(API_URL);
      setEmpleados(res.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se cargaron los empleados",
        background: "#1a1d27",
        color: "#f1f2f6",
        confirmButtonColor: "#6c63ff"
      });
    } finally {
      setLoading(false);
    }

  }
  useEffect(() => {
    fetchEmpleados();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.nombreCompleto ||
      !formData.numeroCuenta ||
      !formData.direccion ||
      !formData.email
    ) {
      Swal.fire({
        icon: "warning",
        title: "Campos obligatorios",
        text: "Todos los campos son obligatorios",
        background: "#1a1d27",
        color: "#f1f2f6",
        confirmButtonColor: "#6c63ff",
      });

      return;
    }

    setLoading(true);

    try {
      await axios.post(API_URL, formData);

      Swal.fire({
        icon: "success",
        title: "Empleado registrado",
        text: "El empleado se registró correctamente",
        background: "#1a1d27",
        color: "#f1f2f6",
        confirmButtonColor: "#6c63ff",
      });

      setFormData(DEFAULT_FORM);
      fetchEmpleados();

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo registrar el empleado",
        background: "#1a1d27",
        color: "#f1f2f6",
        confirmButtonColor: "#6c63ff",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    Empleados,
    formData,
    loading,
    fetchEmpleados,
    handleChange,
    handleSubmit
  }

}















