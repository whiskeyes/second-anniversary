import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Home,
  Heart,
  Image as ImageIcon,
  Mail,
  Gift,
  Star,
  BookOpen,
  ArrowRight,
  Minus,
  Square,
  X,
} from "lucide-react";

import FlipBook from "@/components/FlipBook";
import home1 from "@/assets/home-1.jpg";
import home2 from "@/assets/home-2.jpg";
import home3 from "@/assets/home-3.jpg";
import home4 from "@/assets/home-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy 2 Years, My Love" },
      {
        name: "description",
        content:
          "A scrapbook of us, our story, our memories, and a little piece of the life we’re building together.",
      },
      { property: "og:title", content: "Happy 2 Years, My Love" },
      {
        property: "og:description",
        content: "Two years of us, and all the little things that made it beautiful.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  { label: "Home", icon: Home },
  { label: "Our Story", icon: Heart },
  { label: "Photo Gallery", icon: ImageIcon },
  { label: "Reasons I Love You", icon: Heart },
  { label: "A Letter For You", icon: Mail },
  { label: "My Little Love Notes", icon: Gift },
  { label: "Our Future", icon: Star },
];

// Backup of the previous wording in case we want to revert:
// const storyMoments = [
//   { time: "the beginning", title: "the day we met", text: "A small hello turned into something I never wanted to let go of, and somehow I knew you were going to mean a lot to me." },
//   { time: "our favorite days", title: "all the little moments", text: "It was never just the big milestones — it was the jokes, the late-night calls, the little check-ins, and the comfort of knowing you were there." },
//   { time: "now", title: "still becoming us", text: "Two years later, I still feel that same warmth with you, and every new day feels like another chapter in the life we’re building together." },
// ];

// Backup of the earlier shorter summary:
// const storyMoments = [
//   { time: "the beginning", title: "the day we met", text: "..." },
//   { time: "our favorite days", title: "the little things", text: "..." },
//   { time: "now", title: "still becoming us", text: "..." },
// ];

const storyMoments = [
  {
    time: "the beginning",
    title: "the day we met",
    text: "I still remember the first time you felt like more than just someone new in my life. That tiny spark turned into something I never wanted to lose, and somehow it felt instantly right.",
  },
  {
    time: "the first spark",
    title: "the hello that stayed",
    text: "It was the kind of connection that made me want to know more, talk more, and smile more. I didn’t even realize it was turning into something real until it already had.",
  },
  {
    time: "the growing",
    title: "the little things",
    text: "It wasn’t just the big milestones, it was the messages, the laughs, the late-night talks, and the quiet comfort of knowing you were there. That’s when I started falling for you in a deeper way.",
  },
  {
    time: "the turning point",
    title: "the comfort of you",
    text: "Somewhere along the way, I realized being with you didn’t just feel good, it felt like home. You made ordinary days softer, brighter, and easier to carry.",
  },
  {
    time: "the sweet part",
    title: "the part that felt like love",
    text: "It was the small moments I kept replaying in my head: your voice, your jokes, the way you made me feel seen, and how naturally you fit into my life.",
  },
  {
    time: "now",
    title: "still becoming us",
    text: "Two years later, I still feel that same warmth, that same happiness, and that same certainty. Every new day with you feels like another beautiful page in the life we’re building together.",
  },
];

function Index() {
  const [active, setActive] = useState("Home");
  const [bookOpen, setBookOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const [reasonsOpen, setReasonsOpen] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);
  const [surpriseOpen, setSurpriseOpen] = useState(false);
  const [futureOpen, setFutureOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-background"
      style={{
        backgroundImage: "linear-gradient(rgba(250, 239, 243, 0.72), rgba(250, 239, 243, 0.72))",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="relative hidden w-72 shrink-0 flex-col px-6 py-8 md:flex">
          <div className="soft-card w-full px-4 py-5 text-center">
            <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-[26px] bg-[#f9e7ed] shadow-[var(--shadow-soft)]">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-lg font-semibold text-rose">
                <span>BS</span>
                <span className="absolute -right-1 -top-1 text-[10px]">♡</span>
                <span className="absolute -left-1 -bottom-1 text-[10px]">♡</span>
              </div>
            </div>
            <p className="text-sm tracking-[0.22em] text-muted-foreground">for us</p>
            <p className="mt-2 text-[10px] tracking-[0.28em] text-rose/80">bhargav + sourabhi</p>
          </div>

          <nav className="mt-8 space-y-1">
            {navItems.map(({ label, icon: Icon }) => {
              const isActive = active === label;
              return (
                <button
                  key={label}
                  onClick={() => {
                    setActive(label);
                    if (label === "Our Story") setStoryOpen(true);
                    if (label === "Photo Gallery") setBookOpen(true);
                    if (label === "Reasons I Love You") setReasonsOpen(true);
                    if (label === "A Letter For You") setLetterOpen(true);
                    if (label === "My Little Love Notes") setSurpriseOpen(true);
                    if (label === "Our Future") setFutureOpen(true);
                  }}
                  className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm transition-colors ${
                    isActive
                      ? "bg-accent text-accent-foreground shadow-[var(--shadow-soft)]"
                      : "text-muted-foreground hover:bg-blush/60"
                  }`}
                >
                  <Icon className="size-5 text-rose" strokeWidth={2.2} />
                  <span className="tracking-wide">{label}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-10 soft-card px-6 py-8 text-center text-sm leading-8 tracking-widest text-muted-foreground">
            <Heart className="mx-auto mb-3 size-5 text-rose" />
            together
            <br />
            forever
            <br />
            always
            <br />
            <span className="mt-2 inline-block text-rose">♡</span>
          </div>
        </aside>

        {/* Window */}
        <main className="flex-1 p-3 md:py-6 md:pr-6">
          <div className="soft-card overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center justify-between gap-4 border-b border-border/60 bg-blush/70 px-5 py-3 text-xs tracking-widest text-muted-foreground">
              <span className="flex items-center gap-2">
                <Heart className="size-3.5 text-rose" fill="currentColor" /> you + me = ♡
              </span>
              <span className="hidden sm:inline">
                more memories, more love, more us ♡
              </span>
              <span className="flex items-center gap-3 text-rose">
                <Minus className="size-3.5" />
                <Square className="size-3" />
                <X className="size-3.5" />
              </span>
            </div>

            {/* Hero */}
            <div className="grid gap-8 px-6 py-10 lg:grid-cols-[1.05fr_1fr] lg:px-10">
              <div className="relative text-center lg:text-left">
                <h1 className="font-display text-5xl leading-[1.05] text-deep-rose sm:text-6xl">
                  <span className="block text-4xl sm:text-5xl">Happy</span>
                  <span className="block text-6xl sm:text-7xl">2 Years</span>
                  <span className="block">My Love!</span>
                </h1>
                <p className="mt-5 text-sm leading-7 tracking-widest text-muted-foreground">
                  two years of us,
                  <br />and all the little things I’ll keep loving ♡
                </p>
                <button
                  onClick={() => setStoryOpen(true)}
                  className="mt-7 inline-flex items-center gap-3 rounded-full bg-rose px-8 py-3.5 text-sm tracking-widest text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
                >
                  explore our story <ArrowRight className="size-4" />
                </button>
              </div>

              {/* Polaroids */}
              <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
                <div className="polaroid -rotate-3">
                  <img
                    src={home2}
                    alt="Us resting together"
                    loading="lazy"
                    width={816}
                    height={816}
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <div className="polaroid rotate-2">
                  <img
                    src={home3}
                    alt="A cozy evening"
                    loading="lazy"
                    width={816}
                    height={816}
                    className="aspect-square w-full scale-x-[-1] object-cover"
                  />
                </div>
                <div className="polaroid rotate-2">
                  <img
                    src={home4}
                    alt="Sleepy morning"
                    loading="lazy"
                    width={816}
                    height={816}
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <div className="polaroid -rotate-2">
                  <img
                    src={home1}
                    alt="Our little plush cat"
                    loading="lazy"
                    width={816}
                    height={816}
                    className="aspect-square w-full object-cover"
                  />
                </div>

                <div className="sticky-note absolute -bottom-4 left-4 w-32 -rotate-6 p-3 text-center text-[11px] leading-5 tracking-widest text-muted-foreground">
                  my favorite part of the day is you ♡
                </div>
                <div className="absolute -right-2 top-6 hidden w-28 rotate-6 rounded-xl bg-accent p-4 text-center text-[11px] leading-5 tracking-widest text-accent-foreground shadow-[var(--shadow-soft)] xl:block">
                  still choosing you, still smiling with you ♡
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="grid gap-4 px-6 pb-8 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
              <Card
                title="Our Story"
                icon={BookOpen}
                caption={"how it all started\nand everything in between"}
                onClick={() => setStoryOpen(true)}
              />
              <Card
                title="Photo Gallery"
                icon={ImageIcon}
                caption={"all our favorite pictures\nopen the flip book ♡"}
                onClick={() => setBookOpen(true)}
              />
              <Card
                title="Reasons I Love You"
                icon={Heart}
                caption={"all the little reasons\nmy heart keeps choosing you"}
                note="you make everything softer ♡"
                onClick={() => setReasonsOpen(true)}
              />
              <Card
                title="A Letter For You"
                icon={Mail}
                caption={"from my heart\nto yours"}
                onClick={() => setLetterOpen(true)}
              />
              <Card
                title="My Little Love Notes"
                icon={Gift}
                caption={"all the little ways\nI fall for you ♡"}
                onClick={() => setSurpriseOpen(true)}
              />
              <Card
                title="Our Future"
                icon={Star}
                caption={"dreams, plans,\nand a whole lifetime worth of days with you ♡"}
                onClick={() => setFutureOpen(true)}
              />
            </div>

            {/* Footer */}
            <div className="border-t border-border/60 bg-blush/40 px-6 py-8 text-center">
              <p className="text-sm tracking-widest text-deep-rose">
                here's to many more years with you ♡
              </p>
              <p className="mt-3 text-xs tracking-[0.3em] text-muted-foreground">
                always, bhargav ♡
              </p>
              <Heart className="mx-auto mt-3 size-4 text-rose" fill="currentColor" />
            </div>
          </div>
        </main>
      </div>

      <StoryModal open={storyOpen} onClose={() => setStoryOpen(false)} />
      <ReasonsModal open={reasonsOpen} onClose={() => setReasonsOpen(false)} />
      <LetterModal open={letterOpen} onClose={() => setLetterOpen(false)} />
      <SurpriseModal open={surpriseOpen} onClose={() => setSurpriseOpen(false)} />
      <FutureModal open={futureOpen} onClose={() => setFutureOpen(false)} />
      <FlipBook open={bookOpen} onClose={() => setBookOpen(false)} />
    </div>
  );
}

function StoryModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  // Backup in case we want to revert to the shorter version:
  // const storyMoments = [
  //   { title: "the day we met", text: "I still remember that first moment with you..." },
  //   { title: "the little things", text: "It wasn’t just the big milestones..." },
  //   { title: "the growing", text: "As we kept learning each other..." },
  //   { title: "now and always", text: "Two years later..." },
  // ];

  const storyMoments = [
    {
      title: "the day we met",
      text: "I still remember that first moment with you and the way it somehow felt like everything changed in the gentlest way. It felt like the start of something I never wanted to lose.",
    },
    {
      title: "the hello that stayed",
      text: "It was the kind of connection that made me want to know more, talk more, and smile more. I didn’t realize it was turning into something real until it already had.",
    },
    {
      title: "the little things",
      text: "It wasn’t just the big milestones. It was the messages, the laughter, the late-night talks, and the quiet comfort of knowing you were there. That’s when I started falling for you in a deeper way.",
    },
    {
      title: "the comfort of you",
      text: "Somewhere along the way, I realized being with you didn’t just feel good, it felt like home. You made ordinary days softer, brighter, and easier to carry.",
    },
    {
      title: "the part that felt like love",
      text: "It was the small moments I kept replaying in my head: your voice, your jokes, the way you made me feel seen, and how naturally you fit into my life.",
    },
    {
      title: "now and always",
      text: "Two years later, I still feel that same warmth, that same happiness, and that same certainty. Every new day with you feels like another beautiful page in the life we’re building together.",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-deep-rose/40 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Our story"
    >
      <div
        className="relative mx-auto my-6 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-[32px] border border-border/60 bg-card p-6 shadow-[var(--shadow-soft)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close our story"
          className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-blush text-deep-rose shadow-[var(--shadow-soft)] transition-transform hover:scale-110"
        >
          <X className="size-4" />
        </button>

        <div className="mb-4 text-center">
          <div className="mb-3 flex items-center justify-center gap-3 text-rose">
            <Heart className="size-4" fill="currentColor" />
            <Heart className="size-4" fill="currentColor" />
          </div>
          <h2 className="font-display text-4xl text-deep-rose">Our Story <span className="align-middle text-2xl">♡</span></h2>
        </div>

        <div className="mx-auto mt-6 flex h-40 w-40 items-center justify-center rounded-[30px] bg-[#f3dfe7] shadow-[var(--shadow-soft)]">
          <BookOpen className="size-16 text-deep-rose" strokeWidth={1.8} />
        </div>

        <div className="mt-6 text-center text-[13px] uppercase tracking-[0.25em] text-deep-rose/80">
          <p>how it all started</p>
          <p className="mt-3">and everything in between</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {storyMoments.map((moment, index) => (
            <div key={moment.title} className="rounded-[22px] border border-rose/20 bg-[#fff8fa] p-4 text-left shadow-[0_12px_24px_rgba(212,107,139,0.08)]">
              <p className="text-[9px] tracking-[0.28em] text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-2xl text-deep-rose">{moment.title}</h3>
              <p className="mt-3 text-sm leading-6 tracking-[0.1em] text-muted-foreground">{moment.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[28px] bg-[#f9e7ed] p-5 text-center">
          <Heart className="mx-auto mb-3 size-5 text-rose" fill="currentColor" />
          <p className="text-sm leading-7 tracking-[0.2em] text-deep-rose">
            and somehow, every day since then has felt like a beautiful beginning ♡
          </p>
        </div>
      </div>
    </div>
  );
}

function ReasonsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  const reasons = [
    "Your laugh makes even ordinary days feel lighter.",
    "You make me feel calm, safe, and completely myself.",
    "The way you love me makes my heart feel at home.",
    "You are the kindest person I know, and it shows in everything you do.",
    "I love the way you make life feel softer, sweeter, and more beautiful.",
    "I love you in the little moments and in the big ones too.",
    "You make me want to be a better person every day.",
    "Your smile has a way of making my whole world feel brighter.",
    "You make me feel seen, heard, and deeply understood.",
    "I love how naturally you fit into my life and my heart.",
    "You have the kindest soul, and I admire that more than you know.",
    "Your love makes even my worries feel smaller.",
    "You make ordinary routines feel special and full of love.",
    "I love how much warmth and gentleness you bring into my life.",
    "Being with you feels like peace, comfort, and joy all at once.",
    "You are my favorite person, my safe place, and my happiest thought.",
  ];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-deep-rose/40 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Reasons I love you"
    >
      <div
        className="relative mx-auto my-6 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-[32px] border border-border/60 bg-card p-6 shadow-[var(--shadow-soft)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close reasons"
          className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-blush text-deep-rose shadow-[var(--shadow-soft)] transition-transform hover:scale-110"
        >
          <X className="size-4" />
        </button>

        <div className="mb-4 text-center">
          <div className="mb-3 flex items-center justify-center gap-3 text-rose">
            <Heart className="size-4" fill="currentColor" />
            <Heart className="size-4" fill="currentColor" />
          </div>
          <h2 className="font-display text-4xl text-deep-rose">Reasons I Love You</h2>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <div key={reason} className="rounded-[22px] border border-rose/20 bg-[#fff8fa] p-4 text-left shadow-[0_12px_24px_rgba(212,107,139,0.08)]">
              <p className="text-[9px] tracking-[0.28em] text-muted-foreground">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-3 text-base leading-7 tracking-[0.08em] text-muted-foreground">{reason}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[28px] bg-[#f9e7ed] p-5 text-center">
          <Heart className="mx-auto mb-3 size-5 text-rose" fill="currentColor" />
          <p className="text-sm leading-7 tracking-[0.2em] text-deep-rose">
            because loving you is the easiest, happiest thing I’ve ever done ♡
          </p>
        </div>
      </div>
    </div>
  );
}

function LetterModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-deep-rose/40 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="A letter from my heart"
    >
      <div
        className="relative mx-auto my-6 w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-[36px] border border-border/60 bg-[#fff5f7] p-6 shadow-[var(--shadow-soft)] md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close letter"
          className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-blush text-deep-rose shadow-[var(--shadow-soft)] transition-transform hover:scale-110"
        >
          <X className="size-4" />
        </button>

        <div className="mb-6 text-center">
          <div className="mb-3 flex items-center justify-center gap-3 text-rose">
            <Heart className="size-5" fill="currentColor" />
            <Heart className="size-5" fill="currentColor" />
          </div>
          <p className="text-[10px] tracking-[0.35em] text-rose">for you</p>
          <h2 className="mt-3 font-display text-4xl text-deep-rose md:text-5xl">A Letter For You <span className="align-middle text-3xl">♡</span></h2>
        </div>

        <div className="mb-7 flex justify-center">
          <div className="flex h-32 w-32 items-center justify-center rounded-[30px] bg-[#f4d8e4] shadow-[var(--shadow-soft)] md:h-40 md:w-40">
            <Mail className="size-16 text-deep-rose md:size-20" strokeWidth={1.8} />
          </div>
        </div>

        <div className="soft-card p-6 text-center md:p-8">
          <p className="text-sm leading-8 tracking-[0.18em] text-muted-foreground md:text-base md:leading-9">
            Sourabhi, two years with you has felt like a thousand little miracles. From the moment you became such a beautiful part of my life, everything started feeling softer, warmer, and more meaningful. I still fall for you in the small moments, in the way you smile, in the way you make my worries feel lighter, and in the way being with you feels like home.
          </p>
          <p className="mt-5 text-sm leading-8 tracking-[0.18em] text-muted-foreground md:text-base md:leading-9">
            Thank you for being my favorite person, my calm in the middle of chaos, and the love I never knew I needed so much. You make ordinary days feel special, and even the quietest moments with you become memories I want to keep forever. I love you more than words can fully say, and I am so grateful for every chapter we have shared and every one we still have ahead.
          </p>
          <p className="mt-5 text-sm leading-8 tracking-[0.18em] text-muted-foreground md:text-base md:leading-9">
            Bhargav loves you more than ever, and with every passing day, my love for you only grows deeper. Here’s to all the laughter, comfort, adventures, tenderness, and beautiful little things that make us us. I love you, Sourabhi, and I want to keep choosing you in every season of life.
          </p>
          <p className="mt-6 text-sm font-medium leading-8 tracking-[0.18em] text-deep-rose md:text-base md:leading-9">
            happy 2 years, my love, to more dreams, more love, and a thousand more beautiful reasons to stay close to you forever.
          </p>
        </div>
      </div>
    </div>
  );
}

function SurpriseModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-deep-rose/40 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="A little surprise"
    >
      <div className="relative w-full max-w-xl rounded-[32px] border border-border/60 bg-card p-6 text-center shadow-[var(--shadow-soft)]" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          aria-label="Close surprise"
          className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-blush text-deep-rose shadow-[var(--shadow-soft)] transition-transform hover:scale-110"
        >
          <X className="size-4" />
        </button>

        <Heart className="mx-auto mb-4 size-10 text-rose" fill="currentColor" />
        <p className="text-[10px] tracking-[0.35em] text-rose">my little love notes</p>
        <h2 className="mt-3 font-display text-4xl text-deep-rose">for you, my love ♡</h2>
        <div className="mt-6 space-y-3 text-sm leading-8 tracking-[0.18em] text-muted-foreground">
          <p>In every little moment with you,</p>
          <p>my heart learns a softer song.</p>
          <p>Your smile turns ordinary days</p>
          <p>into tiny pieces of home.</p>
          <p>I love the way you make life feel</p>
          <p>gentle, warm, and bright,</p>
          <p>like even the smallest seconds</p>
          <p>are full of love.</p>
          <p>With you, even silence feels sweet,</p>
          <p>and every day feels like a little miracle.</p>
          <p className="mt-4 text-deep-rose">You are my favorite little blessing,</p>
          <p className="text-deep-rose">and my forever home.</p>
        </div>
      </div>
    </div>
  );
}

function FutureModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  const futurePlans = [
    {
      title: "more adventures",
      text: "I want us to keep discovering new places, new memories, and new little joys together. Every trip, every detour, every quiet moment, I want them all to be with you.",
    },
    {
      title: "a home full of love",
      text: "A home where our laughter lives, where our rituals are gentle, and where comfort is simply being in each other’s presence. That’s the kind of life I want to build with you.",
    },
    {
      title: "more anniversaries",
      text: "I want a hundred more moments like this, birthdays, quiet celebrations, long hugs, and the kind of love that only grows deeper with time.",
    },
    {
      title: "dreams we share",
      text: "The future feels brighter when it includes you. I want to dream big with you, support each other, and grow into the kind of love that can hold everything beautifully.",
    },
    {
      title: "quiet happy days",
      text: "I want all the ordinary days too, the slow mornings, cozy evenings, and simple rituals that make life feel full and soft when we’re together.",
    },
    {
      title: "growing together",
      text: "I want us to keep learning each other, becoming softer and kinder, and building a love that keeps becoming more honest, deeper, and more beautiful.",
    },
    {
      title: "our little traditions",
      text: "I want us to keep making things that are only ours, the jokes, the rituals, the tiny comforts, and the memories that feel like home.",
    },
    {
      title: "forever, in the gentlest way",
      text: "Most of all, I want a future where love stays gentle, steady, and warm, where we keep choosing each other with the same joy we have now.",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-deep-rose/40 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Our future"
    >
      <div
        className="relative mx-auto my-6 w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-[32px] border border-border/60 bg-card p-6 shadow-[var(--shadow-soft)] md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close future"
          className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-blush text-deep-rose shadow-[var(--shadow-soft)] transition-transform hover:scale-110"
        >
          <X className="size-4" />
        </button>

        <div className="mb-6 text-center">
          <div className="mb-3 flex items-center justify-center gap-3 text-rose">
            <Star className="size-5" fill="currentColor" />
            <Heart className="size-5" fill="currentColor" />
          </div>
          <p className="text-[10px] tracking-[0.35em] text-rose">our future</p>
          <h2 className="mt-3 font-display text-4xl text-deep-rose md:text-5xl">all the beautiful things ahead ♡</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {futurePlans.map((plan, index) => (
            <div key={plan.title} className="rounded-[22px] border border-rose/20 bg-[#fff8fa] p-5 text-left shadow-[0_12px_24px_rgba(212,107,139,0.08)]">
              <p className="text-[9px] tracking-[0.28em] text-muted-foreground">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-display text-2xl text-deep-rose">{plan.title}</h3>
              <p className="mt-3 text-sm leading-7 tracking-[0.1em] text-muted-foreground">{plan.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[28px] bg-[#f9e7ed] p-5 text-center">
          <Heart className="mx-auto mb-3 size-5 text-rose" fill="currentColor" />
          <p className="text-sm leading-7 tracking-[0.2em] text-deep-rose">
            and no matter where life takes us, I want every step of it to be with you ♡
          </p>
        </div>
      </div>
    </div>
  );
}

function Card({
  title,
  icon: Icon,
  caption,
  note,
  onClick,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  caption: string;
  note?: string;
  onClick?: () => void;
}) {
  return (
    <article
      onClick={onClick}
      className={`soft-card group relative flex flex-col items-center gap-4 p-6 text-center transition-transform hover:-translate-y-1 ${onClick ? "cursor-pointer" : ""}`}
    >
      <h2 className="font-display text-xl text-deep-rose">{title} ♡</h2>
      <div className="relative grid size-24 place-items-center rounded-2xl bg-blush/60">
        <Icon className="size-12 text-rose" strokeWidth={1.6} />
        <Heart className="absolute -left-3 top-1 size-4 text-rose" />
        <Heart className="absolute -right-2 bottom-2 size-3 text-rose" />
      </div>
      {note ? (
        <span className="rounded-2xl bg-accent px-3 py-2 text-[11px] leading-5 tracking-widest text-accent-foreground">
          {note}
        </span>
      ) : null}
      <p className="whitespace-pre-line text-xs leading-6 tracking-widest text-muted-foreground">
        {caption}
      </p>
    </article>
  );
}
