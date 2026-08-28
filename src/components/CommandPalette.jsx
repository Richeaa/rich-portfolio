import { Fragment, useEffect, useMemo, useState } from "react";
import { Dialog, Transition, Combobox } from "@headlessui/react";
import CV from "../assets/CV/RichEdrickAnthonios_CurriculumVitae.pdf";

const COMMANDS = [
  { id: "about", label: "About", hint: "Data analyst · President University", type: "section", target: "#about" },
  { id: "skills", label: "Skills & Technologies", hint: "Power BI, Python, SQL, ML", type: "section", target: "#skills" },
  { id: "projects", label: "Featured Projects", hint: "10 shipped projects", type: "section", target: "#projects" },
  { id: "certificate", label: "Certifications", hint: "Dicoding & achievements", type: "section", target: "#certificate" },
  { id: "contact", label: "Contact", hint: "Send a message", type: "section", target: "#contact" },
  { id: "cv", label: "Download CV", hint: "PDF · Curriculum Vitae", type: "download", target: CV },
  { id: "github", label: "Open GitHub", hint: "github.com/Richeaa", type: "link", target: "https://github.com/Richeaa" },
  { id: "linkedin", label: "Open LinkedIn", hint: "linkedin.com/in/richea", type: "link", target: "https://www.linkedin.com/in/richea/" },
];

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const openHandler = () => setOpen(true);
    window.addEventListener("open-command-palette", openHandler);

    const keyHandler = (e) => {
      const isK = e.key.toLowerCase() === "k";
      if ((e.metaKey || e.ctrlKey) && isK) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", keyHandler);

    return () => {
      window.removeEventListener("open-command-palette", openHandler);
      window.removeEventListener("keydown", keyHandler);
    };
  }, []);

  const filtered = useMemo(() => {
    if (!query) return COMMANDS;
    const q = query.toLowerCase();
    return COMMANDS.filter(
      (c) => c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q)
    );
  }, [query]);

  const runCommand = (cmd) => {
    if (!cmd) return;
    if (cmd.type === "section") {
      document.querySelector(cmd.target)?.scrollIntoView({ behavior: "smooth" });
    } else if (cmd.type === "link") {
      window.open(cmd.target, "_blank", "noopener,noreferrer");
    } else if (cmd.type === "download") {
      const a = document.createElement("a");
      a.href = cmd.target;
      a.download = "RichEdrickAnthonios_CurriculumVitae.pdf";
      a.click();
    }
    setOpen(false);
    setQuery("");
  };

  return (
    <Transition show={open} as={Fragment} afterLeave={() => setQuery("")}>
      <Dialog onClose={setOpen} className="relative z-[100]">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-ink-950/80 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-150"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-xl transform overflow-hidden rounded-3xl bg-surface-900 border border-surface-border shadow-bento">
              <Combobox onChange={runCommand}>
                <div className="flex items-center gap-3 px-5 border-b border-surface-border">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-slate-500 shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                  <Combobox.Input
                    autoFocus
                    placeholder="Query section, link, or action..."
                    className="w-full bg-transparent border-none py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-0 font-mono text-sm"
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <kbd className="text-[10px] text-slate-500 border border-surface-border rounded px-1.5 py-0.5">ESC</kbd>
                </div>

                <Combobox.Options static className="max-h-80 overflow-y-auto p-2">
                  {filtered.length === 0 && (
                    <p className="px-4 py-6 text-sm text-slate-500 text-center">
                      No results for &ldquo;{query}&rdquo;
                    </p>
                  )}
                  {filtered.map((cmd) => (
                    <Combobox.Option
                      key={cmd.id}
                      value={cmd}
                      className={({ active }) =>
                        `flex items-center justify-between gap-3 px-4 py-3 rounded-2xl cursor-pointer transition-colors ${
                          active ? "bg-brand-500/10 text-white" : "text-slate-300"
                        }`
                      }
                    >
                      {({ active }) => (
                        <>
                          <div>
                            <p className="text-sm font-medium">{cmd.label}</p>
                            <p className="text-xs text-slate-500 font-mono">{cmd.hint}</p>
                          </div>
                          <span
                            className={`text-[10px] uppercase tracking-wider font-mono ${
                              active ? "text-brand-400" : "text-slate-600"
                            }`}
                          >
                            {cmd.type}
                          </span>
                        </>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CommandPalette;
