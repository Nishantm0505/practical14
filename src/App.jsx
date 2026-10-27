
import { useState } from "react";
import {
  GraduationCap, UserRound, Mail, Phone, BookOpen,
  CalendarDays, MapPin, IdCard, Sparkles, CheckCircle2,
  ArrowRight, RotateCcw
} from "lucide-react";

const initialForm = {
  name: "", email: "", phone: "", roll: "",
  dob: "", gender: "", course: "", semester: "", city: ""
};

const inputStyle =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100";

function App() {
  const [form, setForm] = useState(initialForm);
  const [student, setStudent] = useState(null);

  // Controlled components: React state manages input values.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Display submitted data without reloading the page.
  const handleSubmit = (e) => {
    e.preventDefault();
    setStudent({ ...form });
  };

  const resetForm = () => {
    setForm(initialForm);
    setStudent(null);
  };

  const fields = [
    { name: "name", label: "Full Name", icon: UserRound, placeholder: "Enter your name", type: "text" },
    { name: "email", label: "Email Address", icon: Mail, placeholder: "you@example.com", type: "email" },
    { name: "phone", label: "Mobile Number", icon: Phone, placeholder: "10-digit number", type: "tel" },
    { name: "roll", label: "Enrollment Number", icon: IdCard, placeholder: "Enter roll number", type: "text" },
  ];

  return (
    <main className="min-h-screen bg-[#f4f1ff] px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Premium hero */}
        <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-800 p-7 text-white shadow-2xl sm:p-10">
          <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl" />
          <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs text-violet-100">
                <Sparkles size={15} /> YOUR FUTURE STARTS HERE
              </div>
              <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
                Campus<span className="text-violet-300">Connect.</span>
              </h1>
              <p className="mt-4 max-w-lg text-sm leading-6 text-indigo-100 sm:text-base">
                One form. One new beginning. Build your student profile
                and take the next step in your academic journey.
              </p>
            </div>
            <div className="flex h-24 w-24 items-center justify-center self-start rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl sm:h-32 sm:w-32">
              <GraduationCap size={65} strokeWidth={1.3} />
            </div>
          </div>
          <div className="relative mt-7 flex flex-wrap gap-2 text-xs text-indigo-100">
            <span className="rounded-full bg-white/10 px-3 py-2">✦ Smart registration</span>
            <span className="rounded-full bg-white/10 px-3 py-2">✦ Instant student profile</span>
            <span className="rounded-full bg-white/10 px-3 py-2">✦ React controlled form</span>
          </div>
        </header>

        <div className="mt-7 grid items-start gap-7 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Registration form */}
          <section className="rounded-3xl bg-white p-5 shadow-xl shadow-indigo-900/5 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
              Admission portal / 2026
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
              Student Registration
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Enter your details in the fields below.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-6">
              <div>
                <h3 className="mb-4 text-sm font-bold text-slate-800">
                  01 / Personal Information
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {fields.map(({ name, label, icon: Icon, placeholder, type }) => (
                    <label key={name} className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate-700">
                        {label} *
                      </span>
                      <div className="relative">
                        <Icon size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          className={`${inputStyle} pl-10`}
                          name={name}
                          type={type}
                          placeholder={placeholder}
                          value={form[name]}
                          onChange={handleChange}
                          required
                          maxLength={name === "phone" ? 10 : undefined}
                          pattern={name === "phone" ? "[0-9]{10}" : undefined}
                          title={name === "phone" ? "Enter exactly 10 digits" : undefined}
                        />
                      </div>
                    </label>
                  ))}
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Date of Birth *</span>
                    <div className="relative">
                      <CalendarDays size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        className={`${inputStyle} pl-10`}
                        type="date"
                        name="dob"
                        value={form.dob}
                        onChange={handleChange}
                        max={new Date().toLocaleDateString("en-CA")}
                        required
                      />
                    </div>
                  </label>

                  <fieldset>
                    <legend className="mb-2 text-sm font-semibold text-slate-700">Gender *</legend>
                    <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3">
                      {["Male", "Female", "Other"].map((g) => (
                        <label key={g} className="flex cursor-pointer items-center gap-1.5 text-sm text-slate-600">
                          <input
                            type="radio"
                            name="gender"
                            value={g}
                            checked={form.gender === g}
                            onChange={handleChange}
                            required
                            className="accent-violet-600"
                          />
                          {g}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-5">
                <h3 className="mb-4 text-sm font-bold text-slate-800">
                  02 / Academic Details
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label>
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Course *</span>
                    <select className={inputStyle} name="course" value={form.course} onChange={handleChange} required>
                      <option value="">Select course</option>
                      <option>BCA</option>
                      <option>BCA (Honours)</option>
                      <option>BBA</option>
                      <option>B.Com</option>
                      <option>B.Sc IT</option>
                      <option>MCA</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label>
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Semester *</span>
                    <select className={inputStyle} name="semester" value={form.semester} onChange={handleChange} required>
                      <option value="">Select semester</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                        <option key={s} value={`Semester ${s}`}>Semester {s}</option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-5">
                <h3 className="mb-4 text-sm font-bold text-slate-800">
                  03 / Contact Information
                </h3>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">City *</span>
                  <div className="relative">
                    <MapPin size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input className={`${inputStyle} pl-10`} name="city" value={form.city} onChange={handleChange} placeholder="Enter your city" required />
                  </div>
                </label>
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-4 font-bold text-white shadow-lg shadow-violet-500/25 transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-violet-200"
              >
                Register Student
                <ArrowRight size={19} className="transition group-hover:translate-x-1" />
              </button>
              <p className="text-center text-xs text-slate-400">
                Complete all required fields before submitting.
              </p>
            </form>
          </section>

          {/* Student profile result */}
          <aside className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-indigo-900/5 lg:sticky lg:top-6">
            <div className="bg-gradient-to-br from-violet-700 to-indigo-950 p-6 text-white">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-200">Student profile</span>
                <IdCard size={24} />
              </div>
              <h2 className="mt-5 text-2xl font-extrabold">
                {student ? "Welcome aboard!" : "Your profile"}
              </h2>
              <p className="mt-2 text-sm leading-6 text-indigo-100">
                {student ? "Registration submitted successfully." : "Your submitted information will appear here."}
              </p>
              <div className="mt-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-2xl font-black">
                {student
                  ? student.name.trim().split(/\s+/).slice(0, 2).map((n) => n[0]).join("").toUpperCase()
                  : <GraduationCap size={34} />}
              </div>
            </div>

            <div className="p-6">
              {student ? (
                <>
                  <div className="mb-5 flex items-center gap-2 rounded-xl bg-emerald-50 p-3 text-sm font-semibold text-emerald-700">
                    <CheckCircle2 size={19} /> Registration successful
                  </div>
                  <div className="space-y-4">
                    {[
                      ["Full Name", student.name],
                      ["Email", student.email],
                      ["Mobile", student.phone],
                      ["Enrollment No.", student.roll],
                      ["Date of Birth", student.dob],
                      ["Gender", student.gender],
                      ["Course", student.course],
                      ["Semester", student.semester],
                      ["City", student.city],
                    ].map(([label, value]) => (
                      <div key={label} className="border-b border-slate-100 pb-3 last:border-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</p>
                        <p className="mt-1 break-words text-sm font-semibold text-slate-800">{value}</p>
                      </div>
                    ))}
                  </div>
                  <button type="button" onClick={resetForm} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-violet-200 px-4 py-3 text-sm font-bold text-violet-700 transition hover:bg-violet-50">
                    <RotateCcw size={16} /> Register Another Student
                  </button>
                </>
              ) : (
                <>
                  <div className="rounded-2xl border-2 border-dashed border-violet-200 bg-violet-50/60 p-6 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-violet-500 shadow-sm">
                      <UserRound size={28} />
                    </div>
                    <p className="mt-4 font-bold text-slate-800">Awaiting Registration</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Submit the form to reveal the student profile.
                    </p>
                  </div>
                  <div className="mt-5 space-y-3">
                    {["Personal information", "Academic details", "Contact information"].map((item, i) => (
                      <div key={item} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-xs font-bold text-violet-700">0{i + 1}</div>
                        <span className="text-sm font-medium text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </aside>
        </div>

        <footer className="mt-8 text-center text-sm text-slate-500">
          © 2026 CampusConnect · Learn. Grow. Achieve.
        </footer>
      </div>
    </main>
  );
}

export default App;
