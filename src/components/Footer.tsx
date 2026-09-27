interface Props {
  address: string;
  phone: string;
  instagram: string;
}

export default function Footer({
  address,
  phone,
  instagram,
}: Props) {
  return (
    <footer className="mt-20 bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-serif text-2xl text-white">
              Cardamom House
            </p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-stone-400">
              Slow brunch, strong coffee and good things made carefully.
            </p>
          </div>

          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-amber-500">
              Find us
            </p>
            <address className="mt-3 not-italic text-sm leading-6 text-stone-400">
              {address}
            </address>
          </div>

          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-amber-500">
              Say hello
            </p>

            <div className="mt-3 space-y-2 text-sm">
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="block text-stone-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                {phone}
              </a>

              <a
                href={`https://instagram.com/${instagram.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
                className="block text-stone-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                {instagram}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-5 text-xs text-stone-500">
          © {new Date().getFullYear()} Shubham Nishad.
        </div>
      </div>
    </footer>
  );
}