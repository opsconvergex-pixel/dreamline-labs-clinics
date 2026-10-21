/** Illustrative product mock-ups. They show how the system looks; none of the names or numbers are real client data. */
import ClinicIcon from "@/components/ClinicIcons";

export function ChatMock() {
  return (
    <figure className="cl-mock">
      <div className="cl-phone">
        <div className="cl-phone-bar">
          <span className="cl-dot" />
          <strong>Your Clinic</strong>
          <small>Instant reply</small>
        </div>
        <div className="cl-chat">
          <p className="cl-time">Sunday 9:47 PM</p>
          <div className="cl-msg cl-in">Hi, I saw your ad. Do you have anything this week for an appointment?</div>
          <div className="cl-msg cl-out">
            Hi! Thanks for reaching out. Yes, we can fit you in. Two times are open: Thursday 4:30 PM or
            Friday 11:00 AM. Which works better?
          </div>
          <p className="cl-time cl-sent">Replied in under 1 minute</p>
          <div className="cl-msg cl-in">Friday 11 works!</div>
          <div className="cl-msg cl-out">Booked. We'll send a reminder the day before.</div>
        </div>
      </div>
      <figcaption>
        <ClinicIcon name="chat" size={18} /> Every lead gets a reply in minutes, even at night.
      </figcaption>
    </figure>
  );
}

export function CalendarMock() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const slots: Record<string, string[]> = {
    Mon: ["Booked", "", "Booked"],
    Tue: ["", "Booked", ""],
    Wed: ["Booked", "Booked", "Booked"],
    Thu: ["", "Booked", "Booked"],
    Fri: ["Booked", "", "Booked"],
  };
  return (
    <figure className="cl-mock">
      <div className="cl-cal-mock">
        <div className="cl-cal-top">
          <strong>This week</strong>
          <span>New-patient appointments</span>
        </div>
        <div className="cl-cal-grid">
          {days.map((d) => (
            <div key={d} className="cl-cal-col">
              <b>{d}</b>
              {slots[d].map((s, i) =>
                s ? (
                  <span key={i} className="cl-slot cl-slot-on">
                    <ClinicIcon name="check" size={14} /> New patient
                  </span>
                ) : (
                  <span key={i} className="cl-slot">
                    Open
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
        <div className="cl-remind">
          <ClinicIcon name="bell" size={16} /> Reminder sent to 8 patients for tomorrow
        </div>
      </div>
      <figcaption>
        <ClinicIcon name="calendar" size={18} /> A fuller calendar, with reminders so people show up.
      </figcaption>
    </figure>
  );
}

export function ReportMock() {
  const rows = [
    { l: "Leads", v: 240, w: 100 },
    { l: "Booked", v: 96, w: 62 },
    { l: "Attended", v: 72, w: 46 },
    { l: "Treated", v: 41, w: 28 },
  ];
  return (
    <figure className="cl-mock">
      <div className="cl-report">
        <div className="cl-cal-top">
          <strong>Weekly report</strong>
          <span>Lead to treatment</span>
        </div>
        <ul>
          {rows.map((r) => (
            <li key={r.l}>
              <span>{r.l}</span>
              <div className="cl-bar">
                <i style={{ width: `${r.w}%` }} />
              </div>
              <b>{r.v}</b>
            </li>
          ))}
        </ul>
        <p className="cl-report-note">Sample layout with illustrative numbers. Not client results.</p>
      </div>
      <figcaption>
        <ClinicIcon name="report" size={18} /> You see every lead tracked to a treated patient.
      </figcaption>
    </figure>
  );
}
