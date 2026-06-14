"use client";

import { useState } from "react";

interface AttendanceRecord {
  id: string;
  name: string;
  email: string;
  timestamp: string;
  eventId: string;
}

interface Event {
  id: string;
  name: string;
  date: string;
}

const defaultEvents: Event[] = [
  { id: "callout-sp26", name: "Spring Callout Meeting", date: "Jan 2026" },
  { id: "bouquet-sp26", name: "Make Your Own Bouquet", date: "Feb 2026" },
  { id: "beyond-code-sp26", name: "Beyond the Code", date: "Feb 2026" },
  { id: "chai-deas-sp26", name: "Chai-deas Social", date: "Mar 2026" },
  { id: "women-panel-sp26", name: "Women in Tech Panel", date: "Apr 2026" },
];

export default function AttendancePage() {
  const [selectedEvent, setSelectedEvent] = useState<string>(defaultEvents[0].id);
  const [records, setRecords] = useState<AttendanceRecord[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [added, setAdded] = useState(false);

  const [newEventName, setNewEventName] = useState("");
  const [newEventDate, setNewEventDate] = useState("");
  const [events, setEvents] = useState<Event[]>(defaultEvents);
  const [showAddEvent, setShowAddEvent] = useState(false);

  const currentEvent = events.find((e) => e.id === selectedEvent);
  const currentAttendees = records.filter((r) => r.eventId === selectedEvent);

  function handleCheckIn(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const duplicate = currentAttendees.find(
      (r) => r.email.toLowerCase() === email.toLowerCase()
    );
    if (duplicate) {
      alert("This email is already checked in for this event.");
      return;
    }

    const record: AttendanceRecord = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      eventId: selectedEvent,
    };

    setRecords((prev) => [...prev, record]);
    setName("");
    setEmail("");
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  function handleAddEvent(e: React.FormEvent) {
    e.preventDefault();
    if (!newEventName.trim()) return;
    const id = newEventName.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now();
    setEvents((prev) => [...prev, { id, name: newEventName.trim(), date: newEventDate.trim() || "—" }]);
    setNewEventName("");
    setNewEventDate("");
    setShowAddEvent(false);
    setSelectedEvent(id);
  }

  function handleRemove(id: string) {
    setRecords((prev) => prev.filter((r) => r.id !== id));
  }

  function handleExportCSV() {
    const rows = [
      ["Name", "Email", "Time", "Event"],
      ...currentAttendees.map((r) => [r.name, r.email, r.timestamp, currentEvent?.name ?? ""]),
    ];
    const csv = rows.map((r) => r.map((v) => `"${v}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `attendance-${selectedEvent}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-bg pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-3">
              Officers Only
            </span>
            <h1 className="text-2xl font-bold text-text">Attendance Tracker</h1>
            <p className="text-sm text-text-light mt-1">Check in members at CSWN events.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left — event select + check-in form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event selector */}
            <div className="bg-bg-card border border-border rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-semibold text-text">Event</h2>
                <button
                  onClick={() => setShowAddEvent(!showAddEvent)}
                  className="text-xs text-primary hover:text-primary-dark transition-colors"
                >
                  {showAddEvent ? "Cancel" : "+ Add event"}
                </button>
              </div>

              <select
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
                className="w-full px-3 py-2.5 bg-bg border border-border rounded-lg text-text text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors"
              >
                {events.map((ev) => (
                  <option key={ev.id} value={ev.id}>
                    {ev.name} ({ev.date})
                  </option>
                ))}
              </select>

              {showAddEvent && (
                <form onSubmit={handleAddEvent} className="mt-4 space-y-2">
                  <input
                    type="text"
                    placeholder="Event name *"
                    value={newEventName}
                    onChange={(e) => setNewEventName(e.target.value)}
                    required
                    className="w-full px-3 py-2 bg-bg border border-border rounded-lg text-text text-xs focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors placeholder:text-text-lighter"
                  />
                  <input
                    type="text"
                    placeholder="Date (e.g. Apr 2026)"
                    value={newEventDate}
                    onChange={(e) => setNewEventDate(e.target.value)}
                    className="w-full px-3 py-2 bg-bg border border-border rounded-lg text-text text-xs focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors placeholder:text-text-lighter"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 bg-primary text-bg text-xs font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    Create Event
                  </button>
                </form>
              )}
            </div>

            {/* Check-in form */}
            <div className="bg-bg-card border border-border rounded-xl p-5">
              <h2 className="text-sm font-semibold text-text mb-4">Check In Member</h2>
              <form onSubmit={handleCheckIn} className="space-y-3">
                <div>
                  <label className="block text-xs text-text-light mb-1">Full Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Jane Smith"
                    className="w-full px-3 py-2.5 bg-bg border border-border rounded-lg text-text text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors placeholder:text-text-lighter"
                  />
                </div>
                <div>
                  <label className="block text-xs text-text-light mb-1">Email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="jsmith@purdue.edu"
                    className="w-full px-3 py-2.5 bg-bg border border-border rounded-lg text-text text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors placeholder:text-text-lighter"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-primary text-bg font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm"
                >
                  {added ? "✓ Checked In!" : "Check In"}
                </button>
              </form>
            </div>
          </div>

          {/* Right — attendance list */}
          <div className="lg:col-span-3">
            <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <div>
                  <h2 className="text-sm font-semibold text-text">{currentEvent?.name}</h2>
                  <p className="text-xs text-text-lighter mt-0.5">
                    {currentAttendees.length} {currentAttendees.length === 1 ? "attendee" : "attendees"}
                  </p>
                </div>
                {currentAttendees.length > 0 && (
                  <button
                    onClick={handleExportCSV}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-text-light border border-border rounded-lg hover:border-primary/40 hover:text-text transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Export CSV
                  </button>
                )}
              </div>

              {currentAttendees.length === 0 ? (
                <div className="px-5 py-16 text-center">
                  <p className="text-text-lighter text-sm">No one checked in yet.</p>
                  <p className="text-text-lighter text-xs mt-1">Use the form to add attendees.</p>
                </div>
              ) : (
                <ul className="divide-y divide-border">
                  {currentAttendees.map((record, idx) => (
                    <li key={record.id} className="flex items-center justify-between px-5 py-3 hover:bg-white/3 transition-colors group">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="flex-shrink-0 w-6 text-xs text-text-lighter text-right">{idx + 1}</span>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-text truncate">{record.name}</p>
                          <p className="text-xs text-text-light truncate">{record.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0 ml-3">
                        <span className="text-xs text-text-lighter">{record.timestamp}</span>
                        <button
                          onClick={() => handleRemove(record.id)}
                          className="opacity-0 group-hover:opacity-100 text-text-lighter hover:text-red-400 transition-all text-xs"
                          aria-label="Remove attendee"
                        >
                          ✕
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {currentAttendees.length > 0 && (
              <p className="text-xs text-text-lighter mt-3 text-right">
                Data lives in memory — export before refreshing.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
