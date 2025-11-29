import { useState } from "react";

export default function AddVehicleForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    driver: "",
    category: "Car",
    availability: "Available",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.driver.trim()) {
      alert("All fields are required!");
      return;
    }

    onAdd({
      id: Date.now(),
      ...form
    });

    setForm({
      name: "",
      driver: "",
      category: "Car",
      availability: "Available"
    });
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Add Vehicle</h3>

      <input
        name="name"
        placeholder="Vehicle Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="driver"
        placeholder="Driver Name"
        value={form.driver}
        onChange={handleChange}
      />

      <select
        name="category"
        value={form.category}
        onChange={handleChange}
      >
        <option>Auto</option>
        <option>Car</option>
        <option>Truck</option>
        <option>Bus</option>
      </select>

      <select
        name="availability"
        value={form.availability}
        onChange={handleChange}
      >
        <option>Available</option>
        <option>Unavailable</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
}