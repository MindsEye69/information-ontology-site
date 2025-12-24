import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * V — Value (IO)
 *
 * Intuition: "Value" is a persistence constraint — a boundary condition that must remain satisfied.
 * This is intentionally NOT an interactive toy: interactivity here tends to invite the wrong intuition
 * (goal-seeking in space). The diagram keeps focus on the boundary.
 */
export default function ValueConstraintDiagram() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Value as a persistence band</CardTitle>
          <CardDescription>
            A system persists only while a key variable remains within a safe range.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
            <svg
              viewBox="0 0 920 360"
              className="h-auto w-full"
              role="img"
              aria-label="A diagram showing an internal value moving within a safe band; leaving the band triggers failure and reset."
            >
              {/* Frame */}
              <rect x="20" y="20" width="880" height="320" rx="18" fill="rgba(2,6,23,0.35)" stroke="rgba(148,163,184,0.22)" />

              {/* Axis label */}
              <text x="52" y="64" fill="rgba(226,232,240,0.92)" fontSize="20" fontFamily="ui-sans-serif, system-ui">
                internal variable (e.g., energy, stability, integrity)
              </text>

              {/* Band */}
              <rect x="110" y="130" width="700" height="70" rx="14" fill="rgba(56,189,248,0.18)" stroke="rgba(56,189,248,0.35)" />

              {/* Label the band from the inside (legible at a glance) */}
              <rect x="132" y="144" width="360" height="34" rx="12" fill="rgba(2,6,23,0.62)" stroke="rgba(148,163,184,0.18)" />
              <text x="148" y="168" fill="rgba(226,232,240,0.94)" fontSize="20" fontFamily="ui-sans-serif, system-ui">
                safe band (persistence satisfied)
              </text>

              {/* Dangerous zones */}
              <rect x="110" y="90" width="700" height="35" rx="10" fill="rgba(248,113,113,0.10)" stroke="rgba(248,113,113,0.22)" />
              <rect x="110" y="205" width="700" height="35" rx="10" fill="rgba(248,113,113,0.10)" stroke="rgba(248,113,113,0.22)" />
              <text x="120" y="112" fill="rgba(248,113,113,0.85)" fontSize="20" fontFamily="ui-sans-serif, system-ui">
                failure region
              </text>
              <text x="120" y="227" fill="rgba(248,113,113,0.85)" fontSize="20" fontFamily="ui-sans-serif, system-ui">
                failure region
              </text>

              {/* Example trace */}
              {/* Example trajectory: mostly within the band, then a clear boundary-crossing event */}
              <path
                d="M 110 168
                   C 180 160, 220 172, 270 165
                   C 330 156, 370 182, 420 172
                   C 470 162, 520 164, 570 168
                   C 625 174, 670 156, 700 146
                   C 715 134, 720 118, 720 102
                   C 720 102, 730 150, 760 160
                   C 785 168, 800 168, 810 168"
                fill="none"
                stroke="rgba(226,232,240,0.68)"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Make the band violation visually unambiguous by coloring the excursion */}
              <path
                d="M 700 146
                   C 715 134, 720 118, 720 102
                   C 720 102, 730 150, 760 160"
                fill="none"
                stroke="rgba(248,113,113,0.9)"
                strokeWidth="6"
                strokeLinecap="round"
              />

              {/* Marker (inside band) */}
              <circle cx="270" cy="165" r="10" fill="rgba(56,189,248,0.95)" />

              {/* Callout label (avoid placing text on top of the trace) */}
              <path d="M 300 162 L 360 144" fill="none" stroke="rgba(148,163,184,0.7)" strokeWidth="3" markerEnd="url(#arrow)" />
              <rect x="365" y="124" width="270" height="40" rx="12" fill="rgba(2,6,23,0.72)" stroke="rgba(148,163,184,0.18)" />
              <text x="380" y="150" fill="rgba(226,232,240,0.92)" fontSize="20" fontFamily="ui-sans-serif, system-ui">
                trajectory stays inside → persists
              </text>

              {/* Disturbance arrow */}
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L7,3 z" fill="rgba(148,163,184,0.9)" />
                </marker>
                <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L7,3 z" fill="rgba(248,113,113,0.9)" />
                </marker>
              </defs>

              <path
                d="M 560 110 C 585 120, 595 135, 600 150"
                fill="none"
                stroke="rgba(148,163,184,0.8)"
                strokeWidth="3"
                markerEnd="url(#arrow)"
              />
              <text x="510" y="96" fill="rgba(148,163,184,0.92)" fontSize="20" fontFamily="ui-sans-serif, system-ui">
                environment + noise
              </text>

              {/* Boundary crossing example */}
              <circle cx="720" cy="102" r="10" fill="rgba(248,113,113,0.95)" />
              <path
                d="M 742 102 L 742 132"
                fill="none"
                stroke="rgba(248,113,113,0.9)"
                strokeWidth="3"
                markerEnd="url(#arrowRed)"
              />
              <rect x="758" y="84" width="170" height="36" rx="12" fill="rgba(2,6,23,0.72)" stroke="rgba(248,113,113,0.24)" />
              <text x="772" y="109" fill="rgba(248,113,113,0.94)" fontSize="20" fontFamily="ui-sans-serif, system-ui">
                exits band → fails
              </text>

              {/* Reset arrow back into band */}
              <path
                d="M 815 262 C 780 250, 765 228, 740 210"
                fill="none"
                stroke="rgba(226,232,240,0.55)"
                strokeWidth="3"
                markerEnd="url(#arrow)"
              />
              <text x="730" y="282" fill="rgba(226,232,240,0.78)" fontSize="18" fontFamily="ui-sans-serif, system-ui">
                after failure, a new attempt may start
              </text>

              {/* Caption */}
              <text x="52" y="318" fill="rgba(148,163,184,0.92)" fontSize="18" fontFamily="ui-sans-serif, system-ui">
                IO takeaway: “value” names the constraint, not the feeling.
              </text>
            </svg>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-950/35 p-4">
              <div className="text-sm font-semibold text-slate-100">What the system “cares about”</div>
              <p className="mt-2 text-sm text-slate-300">
                Only whether the variable is inside the band. Not the path, not the location, not the story.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/35 p-4">
              <div className="text-sm font-semibold text-slate-100">Why it can look “purposeful”</div>
              <p className="mt-2 text-sm text-slate-300">
                Feedback and regulation can mimic goals — but the primitive is still just persistence.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/35 p-4">
              <div className="text-sm font-semibold text-slate-100">What counts as failure</div>
              <p className="mt-2 text-sm text-slate-300">
                Crossing the boundary. The exact consequence depends on the model: reset, collapse, decay, etc.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How to read this</CardTitle>
          <CardDescription>Keep your attention on the boundary, not the narrative.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
            <li>
              The highlighted band is the <span className="font-semibold">persistence constraint</span>.
            </li>
            <li>
              External influences can push the internal state up or down; regulation can push back.
            </li>
            <li>
              If the state leaves the band, the system no longer satisfies its minimal “value” condition.
            </li>
            <li>
              This is conceptual: it shows the structure of the idea, not a claim about any specific biology or mind.
            </li>
          </ul>

          <div className="rounded-xl border border-slate-800 bg-slate-950/35 p-4 text-sm text-slate-300">
            <span className="font-semibold text-slate-100">Note:</span> We intentionally avoid spatial “agent movement”
            metaphors here. For V, those metaphors often imply preferences or goals, which is not what IO is claiming.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
