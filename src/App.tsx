function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 1.5c.8 5.3 3.4 7.9 8.7 8.7-5.3.8-7.9 3.4-8.7 8.7-.8-5.3-3.4-7.9-8.7-8.7 5.3-.8 7.9-3.4 8.7-8.7z" />
    </svg>
  );
}

function Chevron() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5 shrink-0 transition-transform group-open:rotate-180"
    >
      <path d="m5 7.5 5 5 5-5" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5 rotate-90 md:rotate-0"
      aria-hidden="true"
    >
      <path d="M4 12h16m0 0-5-5m5 5-5 5" />
    </svg>
  );
}

/* ── header / hero / liked sections (faithful to the live site) ─────── */

function Header() {
  return (
    <header className="border-b border-[#e4e4e7]">
      <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-x-6 px-4 sm:px-6">
        <a className="inline-flex min-h-12 items-center text-lg font-semibold tracking-tight" href="#">
          LogoFade
        </a>
        <nav className="flex gap-x-5 text-sm">
          <a className="inline-flex min-h-12 items-center" href="#">Privacy</a>
          <a className="inline-flex min-h-12 items-center" href="#">Terms</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="mx-auto w-full max-w-[1220px] px-2 pt-4 sm:px-4 sm:pt-6">
      <section className="relative isolate overflow-hidden rounded-2xl border border-[#dce5e3] bg-card-lf px-3 pt-12 pb-8 sm:px-6 sm:pt-16 sm:pb-12">
        <div aria-hidden="true" className="grid-texture absolute inset-0 -z-10" />
        <div
          aria-hidden="true"
          className="gradient-teal-blob absolute -right-32 -bottom-40 -z-10 size-[28rem] rounded-full opacity-20 blur-3xl sm:size-[44rem]"
        />
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
            Gemini Watermark Remover
          </h1>
          <p className="mt-4 text-base leading-relaxed font-medium text-muted-lf sm:mt-5 lg:text-lg">
            Remove the Gemini watermark from your images for free. Your image is processed 100% in your
            browser: it is never uploaded, and you don&apos;t need to sign up or log in.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-4xl rounded-3xl bg-teal-18 p-1.5 sm:mt-10 sm:p-2">
          <div className="flow-root rounded-2xl bg-card-lf px-3 pb-6 shadow-lg sm:px-6">
            <div className="mt-6">
              <div className="flex min-h-44 cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#d4d4d8] px-4 py-8 text-center transition-colors hover:border-[#9f9fa9]">
                <span className="text-lg font-medium">Drop your Gemini image here</span>
                <span className="rounded-full bg-[#111d1a] px-5 py-2.5 text-base font-medium text-[#f9fbfa]">
                  Choose an image
                </span>
                <span className="text-sm text-muted-lf">
                  PNG, JPEG or WebP. Processed in your browser, never uploaded.
                </span>
              </div>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-muted-lf">
          Works on original downloads from Gemini. Screenshots and images that were resized or re-saved
          can&apos;t be restored exactly, so the tool tells you why and gives you nothing rather than a
          damaged image.
        </p>
      </section>
    </div>
  );
}

const steps = [
  {
    title: "Step 1 — Drop your exported image",
    body: [
      "Download the image from Gemini, then drag that file onto the box at the top of this page, or tap Choose an image and pick it from your photos or files. PNG, JPEG and WebP are accepted.",
      "Use the file exactly as Gemini gave it to you. A screenshot of the image, or a copy that was resized or sent through a chat app, has had its pixels changed and will be turned down.",
    ],
  },
  {
    title: "Step 2 — It runs in your browser (nothing is uploaded)",
    body: [
      "The moment you pick a file, the page finds the watermark in the bottom-right corner and works out the pixels underneath it. This happens on your own device and takes about a second for most images. A 4K image on a phone can take several seconds.",
      "There is no progress bar for an upload because there is no upload. The only thing fetched after you pick a file is the removal code itself; your image stays where it is.",
    ],
  },
  {
    title: "Step 3 — Download the clean image",
    body: [
      "Drag the divider across the picture to compare before and after, or switch to Zoom in to look closely at the corner where the star was. When you are happy with it, press the download button.",
      "The file is saved in the format you brought: a PNG comes back as a PNG at the same size, with every pixel outside the small watermark square left exactly as it was. JPEG and WebP files keep their format too, and you can tick a box to save them as PNG instead.",
    ],
  },
];

function HowTo() {
  return (
    <section className="mx-auto mt-14 max-w-6xl">
      <h2 className="text-2xl font-semibold tracking-tight">How to remove the Gemini watermark</h2>
      <ol className="mt-6 grid gap-6 lg:grid-cols-3">
        {steps.map((s) => (
          <li key={s.title} className="rounded-2xl bg-teal-6 p-6 ring-teal-25">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            {s.body.map((p, i) => (
              <p key={i} className="mt-3 text-sm leading-6">{p}</p>
            ))}
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ── REDESIGNED middle sections ─────────────────────────────────────── */

function RedesignedTag() {
  return (
    <span className="font-mono-lf inline-flex items-center gap-1.5 rounded-full bg-teal-12 px-3 py-1 text-[11px] font-medium tracking-wide text-[#0b6e52] uppercase ring-teal-25">
      <Star className="size-3" />
      redesigned
    </span>
  );
}

function ReverseAlpha() {
  return (
    <section className="mx-auto mt-14 max-w-6xl">
      <div className="max-w-3xl">
        <RedesignedTag />
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
          Why the watermark comes off cleanly: reverse alpha
        </h2>
        <p className="mt-4 text-lg leading-8">
          Most watermark removers guess. They paint over the mark with whatever the surrounding area
          suggests should be there. This tool doesn&apos;t guess: it undoes the arithmetic Gemini used to
          put the star on, and gets back the pixels that were there before.
        </p>
      </div>

      {/* visual formula strip — the piece the old section was missing */}
      <div className="mt-8 rounded-2xl bg-card-lf p-6 shadow-sm ring-border-lf sm:p-8">
        <div className="grid items-stretch gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          <div className="flex flex-col justify-center rounded-xl bg-teal-6 p-5 ring-teal-25">
            <p className="font-mono-lf text-[11px] font-medium tracking-wide text-muted-lf uppercase">
              What Gemini writes
            </p>
            <p className="font-mono-lf mt-3 text-sm leading-6 sm:text-base">
              observed = α·white
              <br />+ (1−α)·original
            </p>
          </div>
          <div className="flex items-center justify-center text-muted-lf">
            <ArrowRight />
          </div>
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl bg-teal-6 p-5 text-center ring-teal-25">
            <div aria-hidden="true" className="grid-texture absolute inset-0 opacity-60" />
            <Star className="star-doodle relative size-10 text-[#0b6e52]" />
            <p className="font-mono-lf relative mt-3 text-[11px] font-medium tracking-wide text-muted-lf uppercase">
              α pattern is known
            </p>
            <p className="relative mt-1 text-sm leading-6">same star, every export</p>
          </div>
          <div className="flex items-center justify-center text-muted-lf">
            <ArrowRight />
          </div>
          <div className="flex flex-col justify-center rounded-xl bg-teal-6 p-5 ring-teal-25">
            <p className="font-mono-lf text-[11px] font-medium tracking-wide text-muted-lf uppercase">
              Solved backwards
            </p>
            <p className="font-mono-lf mt-3 text-sm leading-6 sm:text-base">
              original = (observed
              <br />− α·white) / (1−α)
            </p>
          </div>
        </div>
      </div>

      {/* three explainer cards — same card language as the step cards above */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl bg-teal-6 p-6 ring-teal-25">
          <p className="font-mono-lf text-xs font-medium text-[#0b6e52]">01</p>
          <h3 className="mt-2 text-lg font-semibold">What the Gemini watermark actually is</h3>
          <p className="mt-3 text-sm leading-6">
            The star is a white shape laid over the corner of the finished picture at partial
            transparency. Each pixel under it becomes a mix: part white, part the original colour. How
            much white goes into each pixel is the star&apos;s alpha, and it is the same pattern on every
            image Gemini exports.
          </p>
          <p className="mt-3 text-sm leading-6">
            Because that pattern is known, the mix can be solved backwards. Take away the white that was
            added, scale what is left back up, and you have the original pixel, give or take the rounding
            that happened when the file was saved. That is reverse alpha blending.
          </p>
        </div>
        <div className="rounded-2xl bg-teal-6 p-6 ring-teal-25">
          <p className="font-mono-lf text-xs font-medium text-[#0b6e52]">02</p>
          <h3 className="mt-2 text-lg font-semibold">Original exports vs. screenshots</h3>
          <p className="mt-3 text-sm leading-6">
            The calculation only holds while every pixel is still exactly what Gemini wrote. A
            screenshot, a resize, or a trip through an app that re-compresses pictures blends
            neighbouring pixels together, and the edge of the star gets smeared into the background in a
            way that can&apos;t be separated again.
          </p>
          <p className="mt-3 text-sm leading-6">
            So the tool checks first. If the star it finds is at a scaled size rather than one of
            Gemini&apos;s real sizes, it treats the image as resized and asks you for the original
            download instead of producing a result with a faint outline left in it.
          </p>
        </div>
        <div className="rounded-2xl bg-teal-6 p-6 ring-teal-25">
          <p className="font-mono-lf text-xs font-medium text-[#0b6e52]">03</p>
          <h3 className="mt-2 text-lg font-semibold">What happens when the alpha won&apos;t match</h3>
          <p className="mt-3 text-sm leading-6">
            After reversing the blend, the tool looks at the corner again and measures whether any trace
            of the star&apos;s shape or edge is still there. If there is, you get an explanation and no
            image. A result is only offered when that check comes back clean.
          </p>
          <p className="mt-3 text-sm leading-6">
            Very dark backgrounds are the hardest case, because small errors are magnified where the
            picture is nearly black. When the star sat on a dark area and the check still passes, you get
            the image along with a note asking you to zoom in on the corner before you use it.
          </p>
        </div>
      </div>
    </section>
  );
}

const guarantees = [
  {
    label: "Never uploaded",
    note: "read, processed and saved in this tab",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <path d="M17.5 19a4.5 4.5 0 0 0 .9-8.9 6 6 0 0 0-11.7 1.6A4 4 0 0 0 6.5 19h11z" />
        <path d="m4 4 16 16" />
      </svg>
    ),
  },
  {
    label: "No account, no email",
    note: "no sign-up, nothing to log into",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <circle cx="10" cy="8" r="3.5" />
        <path d="M4 20c.8-3.2 3.2-5 6-5 1 0 1.9.2 2.7.6" />
        <path d="m16 15 5 5m0-5-5 5" />
      </svg>
    ),
  },
  {
    label: "Anonymous result codes only",
    note: "success or failure type — never the image",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <path d="m8 8-4 4 4 4m8-8 4 4-4 4M14 5l-4 14" />
      </svg>
    ),
  },
];

function Privacy() {
  return (
    <section className="mx-auto mt-14 max-w-6xl">
      <div className="max-w-3xl">
        <RedesignedTag />
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
          Privacy: your images never leave your device
        </h2>
      </div>
      <div className="mt-6 grid gap-8 rounded-2xl bg-card-lf p-6 shadow-sm ring-border-lf sm:p-8 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="flex flex-col justify-center">
          <p className="text-lg leading-8">
            Your image is read, processed and saved by code running in this browser tab. It is not
            uploaded to our servers or to anyone else&apos;s, and no copy of it exists anywhere but on
            your device.
          </p>
          <p className="mt-3 leading-7">
            You don&apos;t need an account, and we never ask for your name or email address. The only
            thing the tool reports back is an anonymous result code for each attempt: success or the kind
            of failure, and which watermark size was matched. It lets us notice if Gemini changes its
            watermark. That report never includes the image, its file name or its dimensions. The full
            details are in our{" "}
            <a className="underline underline-offset-4" href="#">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <ul className="flex flex-col justify-center gap-3">
          {guarantees.map((g) => (
            <li key={g.label} className="flex items-center gap-4 rounded-xl bg-teal-6 p-4 ring-teal-25">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-teal-12 text-[#0b6e52]">
                {g.icon}
              </span>
              <span>
                <span className="block text-sm font-semibold">{g.label}</span>
                <span className="mt-0.5 block text-sm text-muted-lf">{g.note}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── remaining liked sections ───────────────────────────────────────── */

const worksWith = [
  {
    title: "Gemini app image exports",
    body: [
      "Images you download from the Gemini website or the Gemini mobile app are what this tool is built for. It knows the sizes Gemini produces, from small 512 pixel images up to 4K, in square, portrait, landscape and extra-wide shapes.",
      "The one condition is that the file is the original download. If the size or the pixels have changed since Gemini made it, the tool will say so and stop.",
    ],
  },
  {
    title: "Nano Banana generated images",
    body: [
      "Nano Banana is the nickname of the image model inside Gemini. Pictures you generate or edit with it in the Gemini app are stamped with the same star in the same corner, so they are handled in exactly the same way.",
      "If your Nano Banana image came from somewhere that adds no visible mark, there is nothing for this tool to do, and it will tell you no watermark was found.",
    ],
  },
  {
    title: "Star and logo overlays",
    body: [
      "The mark this tool removes is the pale four-pointed Gemini star, in the two sizes Gemini uses: 48 pixels on smaller images and 96 pixels on larger ones.",
      "It does not remove text labels, other companies' logos, or watermarks on video. It also does not touch SynthID, the invisible watermark Google embeds in the image itself. Only the visible star is taken off.",
    ],
  },
];

function WorksWith() {
  return (
    <section className="mx-auto mt-14 max-w-6xl">
      <h2 className="text-2xl font-semibold tracking-tight">Works with</h2>
      <ul className="mt-6 grid gap-6 lg:grid-cols-3">
        {worksWith.map((w) => (
          <li key={w.title} className="rounded-2xl bg-teal-6 p-6 ring-teal-25">
            <h3 className="text-lg font-semibold">{w.title}</h3>
            {w.body.map((p, i) => (
              <p key={i} className="mt-3 text-sm leading-6">{p}</p>
            ))}
          </li>
        ))}
      </ul>
    </section>
  );
}

const faqs = [
  {
    q: "Is it free? Do I need an account?",
    a: "It is free, and there is no account to create. The site has no sign-up, no login and no limit on how many images you clean. Open the page, drop an image, download the result.",
  },
  {
    q: "Do you store my images?",
    a: "No. Your image is never sent to us, so there is nothing for us to store. It is opened, processed and saved inside your browser, and it is gone from the page as soon as you close the tab or choose another image.",
  },
  {
    q: "What if the watermark doesn't come off?",
    a: "The tool tells you why instead of handing you a damaged picture. The usual cause is that the file is a screenshot or was resized after it left Gemini, and downloading it from Gemini again fixes that. Some original files also fail, mostly when the star is very faint over busy detail or sits on a very dark area, and for those there is no workaround yet.",
  },
  {
    q: "Does it work on mobile?",
    a: "We have tested it in Chrome and Firefox on a desktop computer. The page is built to run in a phone browser as well, with everything still happening on the phone itself, but we have not finished testing on real phones. Expect large images to be noticeably slower there: at phone-like speeds in our tests a 4K image took about five seconds, against one to two seconds on a desktop. An image that is too large for the phone's browser gets a message asking you to use a computer.",
  },
];

function Faq() {
  return (
    <section className="mx-auto mt-14 max-w-3xl">
      <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
      <div className="mt-6 space-y-4">
        {faqs.map((f) => (
          <details key={f.q} open className="group rounded-2xl bg-card-lf p-6 shadow-sm ring-border-lf">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
              <h3 className="text-lg font-semibold">{f.q}</h3>
              <Chevron />
            </summary>
            <p className="mt-4 leading-7">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-[#e4e4e7]">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-2 px-4 py-6 text-sm text-[#52525c] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <nav className="flex flex-wrap gap-x-5">
          <a className="inline-flex min-h-11 items-center underline underline-offset-4" href="#">Gemini Watermark Remover</a>
          <a className="inline-flex min-h-11 items-center underline underline-offset-4" href="#">Privacy Policy</a>
          <a className="inline-flex min-h-11 items-center underline underline-offset-4" href="#">Terms of Service</a>
        </nav>
        <p>LogoFade</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="w-full px-4 pb-10 sm:px-6 sm:pb-16">
          <HowTo />
          <ReverseAlpha />
          <Privacy />
          <WorksWith />
          <Faq />
        </div>
      </main>
      <Footer />
    </div>
  );
}
