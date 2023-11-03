"use client";
import React, { useState } from "react";

function EventManagementComponent() {
  const [events, setEvents] = useState<any>([]);
  const [newEvent, setNewEvent] = useState<any>({ name: "", date: "" });
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const handleCreateEvent = () => {
    // Implement functionality to create a new event
    // You would typically send a request to your backend to save the event data
    // For this example, we're just updating the state
    setEvents([...events, newEvent]);
    setNewEvent({ name: "", date: "" });
  };

  const handleEditEvent = () => {
    // Implement functionality to edit the selected event
    // You would typically open an edit modal or form for this purpose
    // For this example, we're not implementing the edit function
  };

  const handleDeleteEvent = () => {
    // Implement functionality to delete the selected event
    // You would typically ask for confirmation and send a request to your backend
    // For this example, we're just updating the state
    setEvents(events.filter((event: any) => event !== selectedEvent));
    setSelectedEvent(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Event Management</h2>

      {/* Create Event Form */}
      <div className="border p-4 mb-4">
        <h3 className="text-xl font-semibold mb-2">Create Event</h3>
        <input
          type="text"
          placeholder="Event Name"
          value={newEvent.name}
          onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
          className="w-full p-2 rounded mb-2"
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          className="w-full p-2 rounded mb-2"
        />
        <button
          onClick={handleCreateEvent}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Create Event
        </button>
      </div>

      {/* Event List */}
      <div className="border p-4 mb-4">
        <h3 className="text-xl font-semibold mb-2">Events</h3>
        <ul>
          {events.map((event: any, index: any) => (
            <li
              key={index}
              onClick={() => setSelectedEvent(event)}
              className="bg-gray-100 p-2 rounded mb-2 cursor-pointer"
            >
              <p className="text-lg">{event.name}</p>
              <p className="text-sm">Date: {event.date}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Event Details and Actions */}
      {selectedEvent && (
        <div className="border p-4">
          <h3 className="text-xl font-semibold mb-2">Event Details</h3>
          <p className="text-lg">Name: {selectedEvent.name}</p>
          <p className="text-lg">Date: {selectedEvent.date}</p>
          <button
            onClick={handleEditEvent}
            className="bg-blue-500 text-white p-2 rounded mr-2"
          >
            Edit Event
          </button>
          <button
            onClick={handleDeleteEvent}
            className="bg-red-500 text-white p-2 rounded"
          >
            Delete Event
          </button>
        </div>
      )}
    </div>
  );
}

export default EventManagementComponent;
