export default function Navbar({
  categoryFilter,
  setCategoryFilter,
  availabilityFilter,
  setAvailabilityFilter,
  clearFilters
}) {
  return (
    <nav className="navbar">
      <h2>Fleet Manager</h2>

      <div className="filters">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option>All</option>
          <option>Auto</option>
          <option>Car</option>
          <option>Truck</option>
          <option>Bus</option>
        </select>

        <select
          value={availabilityFilter}
          onChange={(e) => setAvailabilityFilter(e.target.value)}
        >
          <option>All</option>
          <option>Available</option>
          <option>Unavailable</option>
        </select>

        <button className="clear-btn" onClick={clearFilters}>
          Clear Filter
        </button>
      </div>
    </nav>
  );
}