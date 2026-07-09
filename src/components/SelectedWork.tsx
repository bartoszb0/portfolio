import SelectedProject from "./SelectedProject";

export default function SelectedWork() {
  return (
    <section className="pt-4 pb-14">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">
          01
        </p>
        <h2 className="text-3xl text-white font-semibold">Selected work</h2>
      </div>
      <div className="flex flex-col gap-5">
        <SelectedProject
          title="AI Interview Trainer"
          description="An AI-powered mock interview platform that pulls real job listings and generates tailored questions on the spot. Answer in a chat-style interface, get evaluated in real time, and finish with a scored debrief — overall rating, what you missed, and a question-by-question breakdown. Authorization and saving interview sessions for users done with NestJS."
          github="https://github.com/bartoszb0/ai-interview"
          demo="https://ai-interview-trainer-five.vercel.app/"
          technologies={["Next.js", "NestJS", "Typescript", "React"]}
        />
        <SelectedProject
          title="ePhotobooth (Album Chwil)"
          description="Live photo-sharing for weddings and events. Guests scan a QR code, open a mobile gallery, and upload straight from their phone — no app install needed. Currently live and in use at real events with real guests."
          website="https://albumchwil.pl/"
          technologies={["Vue", "Typescript"]}
        />
        <SelectedProject
          title="Quelly"
          description="Full-stack queue tracker for food vendors with shift-based order flow, real-time guest tracking over Socket.IO, QR flyer generator, and an analytics dashboard."
          github="https://github.com/bartoszb0/quelly"
          demo="https://quelly.vercel.app/"
          technologies={["Typescript", "React", "NestJS"]}
        />

        <SelectedProject
          title="Cleanly"
          description="A two-sided marketplace connecting customers with cleaning professionals. Browse and book via real-time availability, track bookings, leave reviews, and chat live — while cleaners manage their schedule, earnings, and double-booking protection from a dedicated dashboard."
          github="https://github.com/bartoszb0/cleanly"
          demo="https://cleanly-black.vercel.app/"
          technologies={["Next.js", "Typescript", "React", "Supabase"]}
        />
      </div>
    </section>
  );
}
