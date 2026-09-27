interface Props {
  closed: boolean;
}

export default function StatusBanner({ closed }: Props) {
  if (!closed) return null;

  return (
    <div className="border-b border-amber-200 bg-amber-50">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-700"
          />

          <div>
            <p className="font-semibold text-stone-900">
              We're closed today.
            </p> 
            <p className="mt-1 text-sm text-stone-600 ">
              Take it easy — we'll be back tomorrow at 08:00.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}