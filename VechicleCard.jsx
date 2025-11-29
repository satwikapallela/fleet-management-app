export default function VehicleCard({
  vehicle,
  updateDriver,
  toggleAvailability,
  deleteVehicle
}) {
  function handleUpdateDriver() {
    const newName = prompt("Enter new driver name:");
    if (!newName || !newName.trim()) {
      alert("Driver name cannot be empty.");
      return;
    }
    updateDriver(vehicle.id, newName.trim());
  }

  return (
    <div className="vehicle-card">
      <h3>{vehicle.name}</h3>
      <p><b>Category:</b> {vehicle.category}</p>
      <p><b>Driver:</b> {vehicle.driver}</p>
      <p><b>Status:</b> {vehicle.availability}</p>

      <button onClick={handleUpdateDriver}>Update Driver</button>

      <button onClick={() => toggleAvailability(vehicle.id)}>
        {vehicle.availability === "Available"
          ? "Mark Unavailable"
          : "Mark Available"}
      </button>

      <button
        className="delete-btn"
        onClick={() => deleteVehicle(vehicle.id)}
      >
        Delete
      </button>
    </div>
  );
}