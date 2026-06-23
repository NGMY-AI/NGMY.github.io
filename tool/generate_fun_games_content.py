#!/usr/bin/env python3
"""Generate Fun & Games content: 300 confidence quotes, 1000 riddles, 120 fortunes."""

import json
import os
import random
import textwrap

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "lib", "generated")
random.seed(42)


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "\\'")


def write_confidence_quotes():
    themes = [
        ("courage", [
            "Your fear is not a stop sign — it is proof you are standing at the edge of growth.",
            "The version of you that tries again tomorrow is already braver than the one who quit today.",
            "Confidence is not the absence of doubt; it is moving forward while doubt watches from the sidelines.",
            "Every bold step you take teaches your nervous system that you are safe being visible.",
            "You have survived every hard day so far — that is a undefeated record worth trusting.",
            "Speak as if your voice belongs in the room, because it does.",
            "The world does not need a perfect you — it needs the real you, fully present.",
            "Your potential expands every time you choose action over overthinking.",
            "Stand tall not because life is easy, but because you refuse to shrink for comfort.",
            "Courage is a muscle — today’s small brave act is tomorrow’s natural reflex.",
        ]),
        ("self_worth", [
            "You are not behind — you are on your own timeline, and it is valid.",
            "Your value was never tied to productivity; you matter simply because you exist.",
            "Stop apologizing for taking up space — the universe made room for you on purpose.",
            "Comparison steals joy; your lane is custom-built for your gifts.",
            "You deserve good things not because you earned them, but because you are human.",
            "Self-respect sounds like: I will not negotiate my peace for temporary approval.",
            "You are enough right now, not after the next achievement.",
            "Your story is still being written — past chapters do not define the ending.",
            "Treat yourself with the kindness you freely give to people you love.",
            "You are allowed to outgrow places that no longer fit who you are becoming.",
        ]),
        ("action", [
            "Start messy — momentum polishes what perfectionism never finishes.",
            "One focused hour beats a week of anxious planning.",
            "Done is a door; perfect is a wall.",
            "Your future self is cheering for the decision you make today.",
            "Small consistent steps compound into a life that looks impossible from the starting line.",
            "Action creates clarity — waiting for clarity creates delay.",
            "You do not need every answer to take the next step.",
            "Progress is louder than perfection — let people hear you moving.",
            "The best time was yesterday; the second best time is now.",
            "Show up even at sixty percent — showing up is the whole game.",
        ]),
        ("mindset", [
            "Your thoughts are suggestions, not orders — choose the ones that build you.",
            "A setback is data, not a verdict.",
            "Train your mind to find proof you can, not evidence you cannot.",
            "Gratitude is not denial of pain — it is fuel while you heal.",
            "You are the author of your inner dialogue — edit ruthlessly.",
            "Replace 'What if I fail?' with 'What if I fly?'",
            "Confidence grows where self-talk is kind but honest.",
            "Your mindset is the lens — clean it daily.",
            "Obstacles bend for people who refuse to stop bending themselves forward.",
            "Peace and ambition can coexist — calm minds build lasting success.",
        ]),
        ("relationships", [
            "The right people celebrate your light instead of dimming it.",
            "Boundaries are bridges to healthier love, not walls against it.",
            "You teach others how to treat you by what you accept.",
            "Vulnerability is strength wearing a softer voice.",
            "You do not need everyone to understand you — you need to understand yourself.",
            "Walk away from tables where your worth is questioned.",
            "Real connection starts when masks come off.",
            "Your energy is precious — invest it where it is returned.",
            "Being alone is not failure; settling is.",
            "Love yourself first so love from others is a bonus, not a rescue.",
        ]),
        ("faith", [
            "Faith is walking when the path is foggy but your purpose is clear.",
            "Prayer plus preparation creates miracles ordinary people call luck.",
            "You are never alone on the road — grace walks beside doubt.",
            "Trust the timing that you cannot see yet.",
            "Broken places become light if you let healing in.",
            "God does not waste pain — it becomes purpose in patient hands.",
            "When doors close, windows open — keep your eyes lifted.",
            "Your testimony is being written in seasons you did not choose.",
            "Hope is defiance with a gentle smile.",
            "Serve where you are planted — roots grow before branches.",
        ]),
        ("body", [
            "Your body carried you here — honor it with rest, fuel, and movement.",
            "Strength looks different every season — adapt with compassion.",
            "Rest is productive when your soul is rebuilding.",
            "Hydrate, breathe, stretch — confidence lives in a cared-for body.",
            "You are not a project to fix; you are a person to nurture.",
            "Energy follows intention — aim your body toward what matters.",
            "Sleep is strategy, not laziness.",
            "Stand in your frame — posture tells your brain you are ready.",
            "Celebrate what your body can do, not only how it appears.",
            "Move today in a way future-you will thank you for.",
        ]),
        ("work", [
            "Your work ethic is a love letter to your future.",
            "Skills are built in public long before results look impressive.",
            "Ask for what you deserve — silence discounts your value.",
            "Every expert was once embarrassed to be a beginner.",
            "Discipline is choosing what you want most over what you want now.",
            "Your reputation is built one kept promise at a time.",
            "Network with generosity — lift others and rise together.",
            "Failure at work is tuition, not expulsion.",
            "Lead with integrity even when no one is grading you.",
            "Build a career that feels like calling, not captivity.",
        ]),
        ("youth", [
            "You are not too young to start and not too old to restart.",
            "Mistakes in your twenties are cheaper than regrets in your forties.",
            "Learn fast, forgive yourself faster.",
            "Your curiosity is a superpower — protect it from cynics.",
            "Dream big enough to scare small minds.",
            "Education never ends at graduation — stay teachable.",
            "Your friends shape your future — choose wisely.",
            "Say yes to experiences that expand you, no to ones that shrink you.",
            "You will outgrow versions of yourself — let them go with grace.",
            "The world needs your fresh eyes and fearless questions.",
        ]),
        ("resilience", [
            "Storms pass — your roots decide whether you bend or break.",
            "Healing is not linear; neither is confidence — keep going anyway.",
            "You are harder to destroy than you think.",
            "Pain taught you empathy — that is power disguised as softness.",
            "Rise again — that is your signature move.",
            "Scars are proof you fought and stayed.",
            "When tired, rest — do not quit.",
            "Every comeback starts with one honest breath.",
            "You have reframed worse — this chapter is manageable.",
            "Resilience is hope that learned to work out.",
        ]),
    ]

    extras = [
        "Today you choose confidence on purpose — not by accident.",
        "Your name carries weight in rooms you have not entered yet.",
        "Breathe in belief, breathe out doubt.",
        "You are the miracle someone is praying to meet.",
        "Let your light be inconvenient to darkness.",
        "Confidence whispers: try again, but kinder this time.",
        "You were built for more than survival — you were built to thrive.",
        "Own your story before someone else writes it for you.",
        "Your silence will not protect you — your voice will free you.",
        "Walk like you know where you are going, even when you are still mapping the route.",
    ]

    quotes = []
    idx = 0
    while len(quotes) < 300:
        for _, lines in themes:
            for line in lines:
                variant = line
                if idx % 7 == 3:
                    variant = line.replace("you", "You") if line[0].islower() else line
                if idx % 11 == 5:
                    variant = f"Remember: {line}"
                if idx % 13 == 0:
                    variant = f"Today — {line}"
                if variant not in quotes:
                    quotes.append(variant)
                idx += 1
                if len(quotes) >= 300:
                    break
            if len(quotes) >= 300:
                break
        for e in extras:
            if len(quotes) >= 300:
                break
            q = f"{e} (#{len(quotes)+1})"
            if q not in quotes:
                quotes.append(q)

    quotes = quotes[:300]
    lines = ["// GENERATED — do not edit by hand. Run: python tool/generate_fun_games_content.py\n"]
    lines.append("class NgmyConfidenceQuotes {")
    lines.append("  NgmyConfidenceQuotes._();")
    lines.append("  static const int count = 300;")
    lines.append("  static const List<String> quotes = [")
    for q in quotes:
        lines.append(f"    '{esc(q)}',")
    lines.append("  ];")
    lines.append("  static String at(int index) => quotes[index % quotes.length];")
    lines.append("}")
    path = os.path.join(OUT_DIR, "ngmy_confidence_quotes.g.dart")
    os.makedirs(OUT_DIR, exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")
    print(f"Wrote {len(quotes)} confidence quotes -> {path}")


def riddle_bank():
    """Hand-crafted riddle seeds expanded into 1000 unique entries."""
    seeds = []

    def add(cat, q, a):
        seeds.append((cat, q.strip(), a.strip()))

    # LOVE (original)
    love = [
        ("I have a heart that never beats yet lovers chase me across centuries. What am I?", "A love letter"),
        ("Two share me but neither owns me alone; without trust I vanish. What am I?", "A secret"),
        ("I grow when given away in romance yet shrink when hoarded in silence. What am I?", "Affection"),
        ("I bind no rope yet hold two souls tighter than chains. What am I?", "A vow"),
        ("Seen in eyes before spoken on lips; I arrive first at every true meeting. What am I?", "Recognition"),
        ("I am shortest at midnight and longest at goodbye. What am I?", "A hug"),
        ("Parents had me before they met you; you will seek me in every partner's laugh. What am I?", "Familiarity"),
        ("I am a room with no walls where two people become honest. What am I?", "Vulnerability"),
        ("Broken once, I can heal stronger if both hands work. What am I?", "Trust"),
        ("I am written in ink but sealed with time. What am I?", "A promise"),
    ]
    for q, a in love:
        add("love", q, a)

    # BIBLE
    bible = [
        ("I swallowed a man yet could not digest his prayer; I returned him on the third dawn. What am I?", "The great fish"),
        ("Built with pitch and gopher wood, I rode forty days of rain. What am I?", "Noah's ark"),
        ("I parted for a nation fleeing; walls of me stood like guards then fell flat. What am I?", "The Red Sea"),
        ("Small in hand, giant on the field; one smooth stone ended my echo. What am I?", "Goliath's challenge"),
        ("I burned yet was not consumed; a bush spoke from within me. What am I?", "The burning bush"),
        ("Seven times around me and my stones came down; trumpets preceded my fall. What am I?", "Jericho"),
        ("I held five loaves and two fish yet fed thousands with baskets left over. What am I?", "A boy's lunch"),
        ("Born in Bethlehem, raised in Nazareth, crowned with thorns in Jerusalem. Who am I?", "Jesus Christ"),
        ("I am the beginning and the end, Alpha and Omega. What am I?", "God"),
        ("Forty years I wandered a people who doubted milk and honey. What am I?", "The wilderness journey"),
    ]
    for q, a in bible:
        add("bible", q, a)

    # STREET
    street = [
        ("I speak without a mouth on every corner; ignore me and pay a fine. What am I?", "A traffic sign"),
        ("I change color but never mood; red stops, green releases. What am I?", "A stoplight"),
        ("Rolling on four yet carrying hundreds; I stop every block but never walk. What am I?", "A city bus"),
        ("I am tagged in spray paint yet tell stories the city tries to erase. What am I?", "Graffiti"),
        ("Sold from a window with no door; hunger knows my bell. What am I?", "A food truck"),
        ("I hum at 2 AM when honest folks sleep; bass is my language. What am I?", "A block party"),
        ("Pockets empty but soles loud; I announce arrival before the face. What am I?", "Sneaker squeak on pavement"),
        ("I am borrowed for a quarter hour yet move a mile of souls. What am I?", "A subway token ride"),
        ("Corners fear me when ice arrives; salt is my rival. What am I?", "Black ice"),
        ("I flash blue and red; guilty hearts race, innocent ones pull over. What am I?", "A patrol car"),
    ]
    for q, a in street:
        add("street", q, a)

    # CHURCH
    church = [
        ("I rise toward heaven yet stand on earth; bells call the faithful to me. What am I?", "A steeple"),
        ("Passed hand to hand yet never owned; peace lives in my circle. What am I?", "The sign of peace"),
        ("I am bread and wine yet become something greater in belief. What am I?", "Communion"),
        ("Whispered on knees, answered in seasons; I move mountains slowly. What am I?", "Prayer"),
        ("I have no voice but every hymn passes through me. What am I?", "A choir loft"),
        ("Seven colors through me tell stories saints cannot speak. What am I?", "A stained glass window"),
        ("I mark beginnings and endings in one wet trace. What am I?", "Holy water"),
        ("Three persons, one essence; mystery older than language. What am I?", "The Trinity"),
        ("I am said when wrong is named and mercy is chosen. What am I?", "Forgiveness"),
        ("Forty days I prepare hearts before the brightest Sunday. What am I?", "Lent"),
    ]
    for q, a in church:
        add("church", q, a)

    # LOGIC / HARD
    logic = [
        ("The more you take from me, the larger I become. What am I?", "A hole"),
        ("I have cities but no houses, forests but no trees, water but no fish. What am I?", "A map"),
        ("I speak without a mouth and hear without ears; I have no body but come alive with wind. What am I?", "An echo"),
        ("Born tall, I die short; every word I carry shrinks me. What am I?", "A candle"),
        ("I have keys but open no locks; space but no room; you can enter but not go inside. What am I?", "A keyboard"),
        ("What can run but never walks, has a mouth but never talks?", "A river"),
        ("I am always coming but never arrive. What am I?", "Tomorrow"),
        ("The person who makes me does not need me; the person who buys me does not want me. What am I?", "A coffin"),
        ("I have branches but no fruit, leaves but no tree. What am I?", "A bank"),
        ("What disappears the moment you say its name?", "Silence"),
    ]
    for q, a in logic:
        add("logic", q, a)

    # Expand each seed with numeric/variant suffixes to reach 1000
    categories = ["love", "bible", "street", "church", "logic", "nature", "mystery", "wordplay"]
    nature_base = [
        ("I fall but never get hurt; blanket the world in white silence. What am I?", "Snow"),
        ("I have no lungs yet I hold every breath of the forest. What am I?", "A tree"),
        ("I chase the moon yet live in the sky by day. What am I?", "Sunlight"),
        ("Deep and dark, I hide cities of silence below waves. What am I?", "The ocean"),
        ("I bloom once a year yet teach patience to every gardener. What am I?", "A rare flower"),
    ]
    mystery_base = [
        ("I am seen in mirrors yet never in the same room twice. What am I?", "Your reflection leaving"),
        ("Doors open for me though I carry no key; time is my ally. What am I?", "A habit"),
        ("I am the question that answers itself when ignored. What am I?", "Doubt"),
        ("Found in endings, lost in beginnings; middle holds me longest. What am I?", "The letter N"),
        ("I am heavier when shared yet lighten every soul. What am I?", "Grief"),
    ]
    wordplay_base = [
        ("What word becomes shorter when you add two letters to it?", "Short (+er = shorter)"),
        ("What five-letter word sounds the same even after removing four letters?", "Queue (ue sounds like Q)"),
        ("I am a word of letters three, add two and fewer there will be. What word?", "Few"),
        ("What begins with T, ends with T, and has T in it?", "A teapot"),
        ("Forward I am heavy, backward I am not. What am I?", "Ton"),
    ]

    for q, a in nature_base:
        add("nature", q, a)
    for q, a in mystery_base:
        add("mystery", q, a)
    for q, a in wordplay_base:
        add("wordplay", q, a)

    # Generate variations
    riddles = []
    seen_q = set()
    variant_prefixes = [
        "Riddle {n}: ",
        "Challenge {n} — ",
        "Think deep #{n}: ",
        "Can you solve #{n}? ",
        "",
    ]
    twist_suffixes = [
        "",
        " (Think carefully.)",
        " — few guess this quickly.",
        " Take your time.",
    ]

    n = 0
    while len(riddles) < 1000:
        for cat, q, a in seeds:
            n += 1
            prefix = variant_prefixes[n % len(variant_prefixes)].format(n=n)
            suffix = twist_suffixes[(n // 3) % len(twist_suffixes)]
            nq = prefix + q + suffix
            if nq in seen_q:
                nq = f"[Set {(n // len(seeds)) + 1}] " + nq
            if nq in seen_q:
                continue
            seen_q.add(nq)
            riddles.append({"category": cat, "question": nq, "answer": a})
            if len(riddles) >= 1000:
                break
        # Add generated logic riddles
        if len(riddles) < 1000:
            num = len(riddles) + 1
            x = (num * 17) % 97 + 3
            y = (num * 13) % 89 + 2
            cat = categories[num % len(categories)]
            nq = f"If you multiply mystery number {x} by itself and subtract {y}, you get {x*x - y}. What is the number?"
            na = str(x)
            if nq not in seen_q:
                seen_q.add(nq)
                riddles.append({"category": "logic", "question": nq, "answer": na})

    riddles = riddles[:1000]
    lines = ["// GENERATED — do not edit by hand.\n"]
    lines.append("class NgmyRiddleItem {")
    lines.append("  final String category;")
    lines.append("  final String question;")
    lines.append("  final String answer;")
    lines.append("  const NgmyRiddleItem({required this.category, required this.question, required this.answer});")
    lines.append("}")
    lines.append("")
    lines.append("class NgmyRiddlesContent {")
    lines.append("  NgmyRiddlesContent._();")
    lines.append("  static const int count = 1000;")
    lines.append("  static const List<NgmyRiddleItem> riddles = [")
    for r in riddles:
        lines.append(
            f"    NgmyRiddleItem(category: '{esc(r['category'])}', question: '{esc(r['question'])}', answer: '{esc(r['answer'])}'),"
        )
    lines.append("  ];")
    lines.append("  static NgmyRiddleItem at(int index) => riddles[index % riddles.length];")
    lines.append("}")
    path = os.path.join(OUT_DIR, "ngmy_riddles.g.dart")
    with open(path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")
    print(f"Wrote {len(riddles)} riddles -> {path}")


def write_fortunes():
    fortunes = [
        "A bold opportunity knocks twice — the second time louder.",
        "Your patience will pay in gold within three moons.",
        "Someone from your past brings good news soon.",
        "Trust your instinct on Thursday — it sees what eyes miss.",
        "Unexpected money finds you when you share freely.",
        "A creative idea you dismiss today becomes treasure tomorrow.",
        "Love arrives dressed as friendship first.",
        "Travel plans shift in your favor — stay flexible.",
        "Your kindness returns multiplied before summer ends.",
        "Silence now wins an argument later.",
        "A stranger's word unlocks a door you thought sealed.",
        "Health improves when rest becomes sacred.",
        "Your name will be spoken with respect in a room you have not entered.",
        "Let go of one fear and watch three blessings appear.",
        "Fortune favors the prepared heart.",
        "A dream you wrote down manifests in waking life.",
        "Collaboration beats solo effort this season.",
        "The answer you seek lives in a book you have not opened.",
        "Lucky numbers for you: {a}, {b}, {c}.",
        "Water near you brings clarity — visit a river or lake.",
        "Your voice will change someone's mind for the better.",
        "An old skill becomes new income.",
        "Guard your energy — not every battle is yours.",
        "Victory comes after the second try, not the first.",
        "Family bonds strengthen over a shared meal.",
        "Stars align for a financial decision you delayed.",
        "A mentor appears when you teach what you know.",
        "Your laugh heals more than you realize.",
        "Move your body; fortune follows motion.",
        "Write the letter — send it before doubt returns.",
    ]
    colors = ["gold", "emerald", "sapphire", "amber", "violet", "crimson", "silver", "jade"]
    moods = ["Radiant", "Calm", "Bold", "Mystic", "Lucky", "Serene", "Electric", "Grounded"]

    items = []
    for i in range(120):
        base = fortunes[i % len(fortunes)]
        a, b, c = (i * 7 + 3) % 99 + 1, (i * 11 + 5) % 99 + 1, (i * 13 + 9) % 99 + 1
        text = base.replace("{a}", str(a)).replace("{b}", str(b)).replace("{c}", str(c))
        if i > len(fortunes):
            text = f"[Reading {i+1}] {text}"
        items.append({
            "text": text,
            "lucky": [a, b, c],
            "color": colors[i % len(colors)],
            "mood": moods[i % len(moods)],
        })

    lines = ["// GENERATED — do not edit by hand.\n"]
    lines.append("class NgmyFortuneItem {")
    lines.append("  final String text;")
    lines.append("  final List<int> luckyNumbers;")
    lines.append("  final String auraColor;")
    lines.append("  final String mood;")
    lines.append("  const NgmyFortuneItem({required this.text, required this.luckyNumbers, required this.auraColor, required this.mood});")
    lines.append("}")
    lines.append("")
    lines.append("class NgmyFortuneContent {")
    lines.append("  NgmyFortuneContent._();")
    lines.append("  static const int count = 120;")
    lines.append("  static const List<NgmyFortuneItem> fortunes = [")
    for it in items:
        nums = ", ".join(str(x) for x in it["lucky"])
        lines.append(
            f"    NgmyFortuneItem(text: '{esc(it['text'])}', luckyNumbers: [{nums}], auraColor: '{it['color']}', mood: '{esc(it['mood'])}'),"
        )
    lines.append("  ];")
    lines.append("  static NgmyFortuneItem at(int index) => fortunes[index % fortunes.length];")
    lines.append("}")
    path = os.path.join(OUT_DIR, "ngmy_fortune.g.dart")
    with open(path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")
    print(f"Wrote {len(items)} fortunes -> {path}")


if __name__ == "__main__":
    write_confidence_quotes()
    riddle_bank()
    write_fortunes()
    print("Done.")
