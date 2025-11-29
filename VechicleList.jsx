import VehicleCard from "./VehicleCard";

export default function VehicleList({
  vehicles,
  updateDriver,
  toggleAvailability,
  deleteVehicle
}) {
  return (
    <div className="vehicle-list">
      {vehicles.map((v) => (
        <VehicleCard
          key={v.id}
          vehicle={v}
          updateDriver={updateDriver}
          toggleAvailability={toggleAvailability}
          deleteVehicle={deleteVehicle}
        />
      ))}
    </div>
  );
}