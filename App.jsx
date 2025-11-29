import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AddVehicleForm from "./components/AddVehicleForm";
import VehicleList from "./components/VehicleList";
import initialVehicles from "./data/initialVehicles";

export default function App() {
  const [vehicles, setVehicles] = useState(() => {
    return JSON.parse(localStorage.getItem("fleet")) || initialVehicles;
  });

  const [categoryFilter, setCategoryFilter] = useState("All");
  const [availabilityFilter, setAvailabilityFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("fleet", JSON.stringify(vehicles));
  }, [vehicles]);

  function addVehicle(newVehicle) {
    setVehicles([...vehicles, newVehicle]);
  }

  function updateDriver(id, newDriver) {
    setVehicles(
      vehicles.map((v) =>
        v.id === id ? { ...v, driver: newDriver } : v
      )
    );
  }

  function toggleAvailability(id) {
    setVehicles(
      vehicles.map((v) =>
        v.id === id
          ? {
              ...v,
              availability:
                v.availability === "Available"
                  ? "Unavailable"
                  : "Available",
            }
          : v
      )
    );
  }

  function deleteVehicle(id) {
    if (confirm("Are you sure you want to delete this vehicle?")) {
      setVehicles(vehicles.filter((v) => v.id !== id));
    }
  }

  function clearFilters() {
    setCategoryFilter("All");
    setAvailabilityFilter("All");
  }

  const filteredVehicles = vehicles.filter((v) => {
    const categoryOk =
      categoryFilter === "All" || v.category === categoryFilter;

    const availabilityOk =
      availabilityFilter === "All" ||
      v.availability === availabilityFilter;

    return categoryOk && availabilityOk;
  });

  return (
    <div>
      <Navbar
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        availabilityFilter={availabilityFilter}
        setAvailabilityFilter={setAvailabilityFilter}
        clearFilters={clearFilters}
      />

      <AddVehicleForm onAdd={addVehicle} />

      <VehicleList
        vehicles={filteredVehicles}
        updateDriver={updateDriver}
        toggleAvailability={toggleAvailability}
        deleteVehicle={deleteVehicle}
      />
    </div>
  );
}