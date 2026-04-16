import { useEffect } from "react";
import { Link } from "react-router-dom";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import { Kicker } from "@/components/Editorial";
import storyHero from "@/assets/story-unfreeze.png";

const FeaturedStory = () => {
  useEffect(() => {
    document.title = "The Unfreeze — Featured Story · The Unlearning School";
  }, []);

  return (
    <article>
      {/* Hero */}
      <header className="bg-background border-b-2 border-paper/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-12 pb-10 md:pt-16 md:pb-14">
          {/* Masthead */}
          <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.3em] text-paper/50 border-b border-paper/15 pb-4 mb-10">
            <span>Vol. 01 / Feature 04</span>
            <span className="text-red">Long Read · 12 min</span>
          </div>

          {/* Eyebrow */}
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-red mb-6 text-center">
            — The Cover Story —
          </p>

          {/* Massive title */}
          <h1 className="font-display text-[56px] md:text-[120px] lg:text-[160px] leading-[0.85] text-paper text-center tracking-tighter mb-8">
            The <em className="text-red">Unfreeze.</em>
          </h1>

          <p className="font-display italic text-xl md:text-2xl lg:text-3xl text-paper/85 text-center max-w-3xl mx-auto leading-snug mb-10">
            Why every AI rollout fails at the same moment — and the 1947 model that explains how to get past it.
          </p>

          <div className="flex justify-center gap-8 font-mono text-[10px] uppercase tracking-[0.3em] text-paper/50">
            <span>By Răzvan Vâlceanu</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:inline">Filed Autumn 2025</span>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative w-full overflow-hidden bg-paper border-y-2 border-paper/10">
          <img
            src={storyHero}
            alt="An illustration of a human figure mid-step, made of breaking ice crystals with circuit lines emerging from the cracks."
            className="w-full max-h-[70vh] object-cover"
            width={1920}
            height={1080}
          />
          <p className="absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60 bg-paper/80 px-2 py-1">
            Illustration · The Unlearning School
          </p>
        </div>
      </header>

      {/* Body — magazine layout with sidebar */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          {/* Sidebar */}
          <aside className="md:col-span-3 md:sticky md:top-24 md:self-start space-y-8">
            <div>
              <Kicker variant="muted">In this story</Kicker>
              <ul className="font-display text-paper/80 text-lg leading-tight space-y-2 mt-2">
                <li>I. The pattern that repeats</li>
                <li>II. Why the second training fails</li>
                <li>III. Lewin, 1947</li>
                <li>IV. How to unfreeze a habit</li>
                <li>V. What sticks</li>
              </ul>
            </div>

            <div>
              <Kicker variant="muted">The author</Kicker>
              <p className="font-display text-paper text-xl leading-tight">Răzvan Vâlceanu</p>
              <p className="text-paper/60 text-sm mt-1">Founder, The Unlearning School. Former GM, Bitdefender.</p>
            </div>

            <div>
              <Kicker variant="muted">Reading time</Kicker>
              <p className="font-mono text-paper/80 text-sm">≈ 12 minutes</p>
            </div>

            <div>
              <Kicker variant="muted">Filed under</Kicker>
              <p className="font-mono text-paper/80 text-sm uppercase tracking-wider">
                Behaviour change · AI adoption
              </p>
            </div>

            <div className="border-t border-paper/15 pt-6">
              <Link
                to="/assessment"
                className="inline-flex items-center px-5 py-3 bg-red text-paper font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
              >
                Book Assessment →
              </Link>
            </div>
          </aside>

          {/* Article body */}
          <div className="md:col-span-9 max-w-[68ch]">
            {/* Section I */}
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-2">I. The pattern that repeats</h2>
            <h3 className="font-display text-3xl md:text-4xl text-paper leading-[1.05] mb-8">
              The week-five plateau is not a coincidence.
            </h3>

            <p className="text-paper/85 text-[16px] md:text-[17px] leading-[1.75] mb-5 first-letter:font-display first-letter:text-[120px] first-letter:leading-[0.78] first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:text-red">
              Every AI rollout we audit follows the same arc. In week one and two, the early adopters use the new tool every day. Slack channels fill with screenshots. The IT team reports glowing engagement metrics. Leadership tells the board the deployment is healthy.
            </p>

            <p className="text-paper/85 text-[16px] leading-[1.75] mb-5">
              By week three, the middle majority try it on familiar tasks — drafting an email, summarising a doc, asking it a question they could have Googled. Usage is irregular, polite, performative. By week five, the curve flattens. Most of the team has quietly returned to their previous workflows. The dashboard still shows "active licences." Productivity is unchanged.
            </p>

            <p className="text-paper/85 text-[16px] leading-[1.75] mb-12">
              This is the moment leadership usually books a second training session. It will not work.
            </p>

            {/* Pull quote */}
            <Blockquote attribution="From the field, every quarter">
              The dashboard says adoption. The team experiences nothing. Both are reporting the truth — about different things.
            </Blockquote>

            {/* Section II */}
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-2 mt-12">II. Why the second training fails</h2>
            <h3 className="font-display text-3xl md:text-4xl text-paper leading-[1.05] mb-8">
              You are not running a tool problem.
            </h3>

            <p className="text-paper/85 text-[16px] leading-[1.75] mb-5">
              The instinct to repeat training is reasonable. If usage is low, surely people need to learn the tool better. But the data does not support it. We've seen organisations run their third Copilot training in nine months and watch the same usage curve emerge.
            </p>

            <p className="text-paper/85 text-[16px] leading-[1.75] mb-12">
              The problem is not that staff don't know what the tool can do. The problem is that the surrounding workflow — the actual sequence of steps a person takes between Tuesday morning and Tuesday lunch — has not changed. Copilot is sitting in their sidebar, but the work is being done the same way it was in 2022.
            </p>

            {/* Inline image break */}
            <div className="my-12 -mx-4 md:mx-0">
              <div className="bg-paper p-4 card-shadow">
                <img
                  src={storyHero}
                  alt="Detail of illustration"
                  className="w-full aspect-[3/2] object-cover"
                  loading="lazy"
                  width={1536}
                  height={1024}
                />
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60 mt-3 text-center">
                  Fig. 01 — The unfreeze: ice fractures before motion is possible.
                </p>
              </div>
            </div>

            {/* Section III */}
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-2">III. Lewin, 1947</h2>
            <h3 className="font-display text-3xl md:text-4xl text-paper leading-[1.05] mb-8">
              The change model that predates the change industry.
            </h3>

            <p className="text-paper/85 text-[16px] leading-[1.75] mb-5">
              In 1947, the social psychologist Kurt Lewin published a short paper proposing that all behaviour change occurs in three stages: <em>unfreeze</em>, <em>change</em>, and <em>refreeze</em>. The idea is older than the transistor. It still describes every successful organisational shift we have observed since.
            </p>

            <p className="text-paper/85 text-[16px] leading-[1.75] mb-12">
              The trouble is that the modern change-management industry has compressed Lewin's three stages into one. Most "transformation" programmes start at <em>change</em> — a new tool, a new process, a new dashboard — and skip <em>unfreeze</em> entirely. Without explicit unfreezing, the old habit remains the default. The new tool becomes an option, not a workflow. Within five weeks, the option is ignored.
            </p>

            <Blockquote attribution="Kurt Lewin, 1947 — applied to AI adoption">
              Before a team can build new working habits, they must consciously let go of the old ones. This is the step most programmes skip — and the only one that determines whether anything sticks.
            </Blockquote>

            {/* Section IV */}
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-2 mt-12">IV. How to unfreeze a habit</h2>
            <h3 className="font-display text-3xl md:text-4xl text-paper leading-[1.05] mb-8">
              You name it, then you replace it.
            </h3>

            <p className="text-paper/85 text-[16px] leading-[1.75] mb-5">
              Unfreezing is not abstract. In a sprint, it looks like this: a team sits in a room with their actual weekly process — printed, mapped, on the wall. They walk through it step by step, out loud, and answer one question for each step: <em className="text-red not-italic">why do we do it this way?</em>
            </p>

            <p className="text-paper/85 text-[16px] leading-[1.75] mb-5">
              Most of the answers are inherited assumptions. Someone three managers ago decided this was the way. The tool that justified it was retired in 2019. The compliance reason no longer applies. The team has been performing a process whose original purpose dissolved years before AI showed up.
            </p>

            <p className="text-paper/85 text-[16px] leading-[1.75] mb-12">
              That moment of explicit recognition is the unfreeze. Once a team can articulate why the old process exists, they can let it go. Until they can, they will return to it the moment the trainer leaves the room.
            </p>

            {/* Section V */}
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-2">V. What sticks</h2>
            <h3 className="font-display text-3xl md:text-4xl text-paper leading-[1.05] mb-8">
              Teams keep what they built themselves.
            </h3>

            <p className="text-paper/85 text-[16px] leading-[1.75] mb-5">
              The other half of the formula is ownership. A workflow handed down from a consultant, a vendor, or even an internal change manager is treated as imposed. A workflow built by the team — in the room, on their actual work, by the people who will run it next week — is treated as theirs. They defend it. They iterate on it. They run it without prompting.
            </p>

            <p className="text-paper/85 text-[16px] leading-[1.75] mb-5">
              This is why the deliverable that matters at the end of a sprint is not the slide deck. It is the template. A document the team built themselves, owns, and understands. The AI is embedded in it — but the AI is not the point. The point is that the workflow has been redesigned to require the AI, with the team's full understanding of why.
            </p>

            <p className="text-paper/85 text-[16px] leading-[1.75] mb-12">
              <em className="text-red not-italic">Two weeks later, the team is still running it.</em> That is what AI adoption actually looks like. Not a dashboard turning green. A team running a process they could not have run a month ago, without anyone reminding them to.
            </p>

            {/* Closing */}
            <div className="border-t-2 border-paper/15 pt-8 mt-16">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/40 mb-4">— End of feature</p>
              <p className="font-display italic text-2xl md:text-3xl text-paper/85 leading-snug mb-8">
                If your AI rollout is sitting at the week-five plateau, the next move is not another training day.
              </p>
              <Link
                to="/assessment"
                className="inline-flex items-center px-7 py-4 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
              >
                Book the Assessment →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Related */}
      <Section variant="paper">
        <div className="flex justify-between items-end font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50 border-b border-ink/15 pb-4 mb-10">
          <span>Continue Reading</span>
          <span className="text-red">From this issue</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { kicker: "For Operations", title: "You're paying for tools your teams aren't using.", to: "/for-operations" },
            { kicker: "For HR & L&D", title: "Demonstrable AI literacy under EU AI Act Article 4.", to: "/for-hr" },
            { kicker: "Programmes", title: "Four programmes. One method. Four outcomes.", to: "/programmes" },
          ].map((r) => (
            <Link key={r.to} to={r.to} className="group block border-t-2 border-ink pt-4 hover:border-red transition-colors">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">— {r.kicker}</p>
              <h3 className="font-display text-2xl md:text-3xl text-ink leading-[1.05] group-hover:text-red transition-colors">
                {r.title}
              </h3>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 mt-4 group-hover:text-red transition-colors">
                Read story →
              </p>
            </Link>
          ))}
        </div>
      </Section>
    </article>
  );
};

export default FeaturedStory;
