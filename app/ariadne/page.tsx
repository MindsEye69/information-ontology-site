export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">Ariadne</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Ariadne</h1>

        <div className="mt-6 text-black/75 leading-relaxed space-y-4">
          <p>
            Ariadne is an interactive assistant planned for a future update. Its role will be to help readers navigate
            the IO corpus without blurring the boundary between canonical text and explanatory material.
          </p>

          <div className="rounded-2xl border border-black/10 bg-white/60 p-5">
            <p className="font-medium">Status: Offline (coming soon)</p>
            <p className="mt-2 text-sm text-black/65">
              When Ariadne is released, this page will describe its constraints, safety posture, and how to use it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
