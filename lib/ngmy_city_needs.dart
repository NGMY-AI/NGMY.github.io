import 'package:flutter/material.dart';

/// What the person in the city needs to keep going: energy for walking and gas for the car. Nothing is shown as a number,
/// only as a long battery-like bar.
class CityNeeds extends ChangeNotifier {
  /// The city keeps one set of needs for the whole session, so leaving and coming back does not refill anybody.
  static final CityNeeds session = CityNeeds();

  /// About a minute and a half of straight walking uses all the energy. Then the person crawls on the ground for [crawlSeconds]: if
  /// they have not found a shop and eaten by then they lose [crawlPenalty] stars, rest three minutes and come back at half.
  static const double walkSeconds = 90, crawlSeconds = 20, restSeconds = 180, restEnergy = 0.5;
  static const int crawlPenalty = 5;

  /// Water lasts about two and a half minutes of walking; without it the energy drains much faster.
  static const double thirstSeconds = 150;

  /// About one minute of driving uses a whole tank.
  static const double driveSeconds = 60;

  double energy = 1.0;
  double fuel = 1.0;
  double restLeft = 0;

  /// How long the person has left to crawl to a shop, how much water is left, whether they are unwell (medicine cures it), and the
  /// stars to take off because the crawl ran out (the page takes them and clears this).
  double crawlLeft = 0;
  double thirst = 1.0;
  bool sick = false;
  int penaltyDue = 0;

  /// The Uber licence, bought at the licence office.
  bool uberLicence = false;

  bool get resting => restLeft > 0;
  bool get crawling => crawlLeft > 0;
  bool get thirsty => thirst < 0.3;
  bool get outOfGas => fuel <= 0;
  bool get lowEnergy => energy < 0.25 && !resting;
  bool get lowFuel => fuel < 0.25;

  /// Time passes: [walking] on foot or [driving] in the car, for [dt] seconds. Returns a message when something just ran out.
  String? tick(double dt, {bool walking = false, bool driving = false}) {
    String? said;
    if (crawling) {
      crawlLeft -= dt;
      if (crawlLeft <= 0) {
        crawlLeft = 0;
        restLeft = restSeconds;
        penaltyDue += crawlPenalty;
        said = 'You did not reach a shop in time: you lost $crawlPenalty stars. You must rest for three minutes, or eat something.';
      }
      notifyListeners();
      return said;
    }
    if (resting) {
      restLeft -= dt;
      if (restLeft <= 0) {
        restLeft = 0;
        energy = restEnergy;
        said = 'You have rested. Your energy is back to half. Find some food in a shop to keep going.';
      }
      notifyListeners();
      return said;
    }
    if (walking) {
      final before = energy;
      final beforeThirst = thirst;
      thirst = (thirst - dt / thirstSeconds).clamp(0.0, 1.0);
      final drain = (thirst <= 0 ? 1.8 : 1.0) * (sick ? 1.5 : 1.0);
      energy = (energy - dt * drain / walkSeconds).clamp(0.0, 1.0);
      if (energy <= 0) {
        crawlLeft = crawlSeconds;
        said = 'You have no energy left: you crawl on the ground. Get to a shop and buy food within 20 seconds, or you lose $crawlPenalty stars.';
      } else if (before >= 0.25 && energy < 0.25) {
        said = 'You are getting tired. Find a shop and buy some food.';
      } else if (beforeThirst >= 0.3 && thirst < 0.3) {
        said = 'You are thirsty. Buy some water or juice at a shop, or you will tire much faster.';
      }
      notifyListeners();
    }
    if (driving) {
      final before = fuel;
      fuel = (fuel - dt / driveSeconds).clamp(0.0, 1.0);
      if (fuel <= 0 && before > 0) {
        said = 'The car is out of gas. Get to a gas station (walk, then buy gas) to carry on.';
      } else if (before >= 0.25 && fuel < 0.25) {
        said = 'The gas is low. Drive to a gas station.';
      }
      notifyListeners();
    }
    return said;
  }

  /// Food: gives energy back, and ends a rest once there is enough to carry on.
  void eat(double amount) {
    energy = (energy + amount).clamp(0.0, 1.0);
    if (energy >= 0.3) {
      restLeft = 0;
      crawlLeft = 0;
    }
    notifyListeners();
  }

  void drink(double amount) {
    thirst = (thirst + amount).clamp(0.0, 1.0);
    notifyListeners();
  }

  /// A headache or a cold: walking costs more energy until the person takes medicine.
  void fallSick() {
    sick = true;
    notifyListeners();
  }

  void cure() {
    sick = false;
    notifyListeners();
  }

  void fill(double amount) {
    fuel = (fuel + amount).clamp(0.0, 1.0);
    notifyListeners();
  }
}

/// A long battery-like frame that fills with the amount [value] (0 to 1). Green, then amber, then red when it is nearly empty.
class NeedBar extends StatelessWidget {
  const NeedBar({super.key, required this.value, this.height = 14, this.icon, this.pulse = false});
  final double value;
  final double height;
  final String? icon;
  final bool pulse;

  @override
  Widget build(BuildContext context) {
    final v = value.clamp(0.0, 1.0);
    final col = v > 0.5 ? const Color(0xFF22C55E) : (v > 0.25 ? const Color(0xFFFACC15) : const Color(0xFFEF4444));
    return Row(mainAxisSize: MainAxisSize.min, children: [
      if (icon != null) Padding(padding: const EdgeInsets.only(right: 4), child: Text(icon!, style: TextStyle(fontSize: height))),
      Expanded(
        child: Container(
          height: height,
          padding: const EdgeInsets.all(2),
          decoration: BoxDecoration(color: Colors.black54, borderRadius: BorderRadius.circular(height / 3), border: Border.all(color: Colors.white70, width: 1.5)),
          child: Align(
            alignment: Alignment.centerLeft,
            child: FractionallySizedBox(
              widthFactor: v,
              heightFactor: 1,
              child: DecoratedBox(decoration: BoxDecoration(color: col, borderRadius: BorderRadius.circular(height / 4))),
            ),
          ),
        ),
      ),
      // The little knob at the end of a battery.
      Container(width: 3, height: height * 0.45, margin: const EdgeInsets.only(left: 1), decoration: BoxDecoration(color: Colors.white70, borderRadius: BorderRadius.circular(1))),
    ]);
  }
}

/// The energy bar (and the gas bar while driving) that listens to the needs.
class NeedsBars extends StatelessWidget {
  const NeedsBars({super.key, required this.needs, this.driving = false, this.height = 14});
  final CityNeeds needs;
  final bool driving;
  final double height;

  @override
  Widget build(BuildContext context) {
    return ListenableBuilder(
      listenable: needs,
      builder: (_, __) => Column(mainAxisSize: MainAxisSize.min, children: [
        NeedBar(value: needs.crawling ? 0 : (needs.resting ? needs.restProgress : needs.energy), height: height, icon: needs.crawling ? '🐛' : (needs.resting ? '😴' : '⚡')),
        if (needs.thirsty || needs.sick) ...[
          SizedBox(height: height / 4),
          NeedBar(value: needs.sick ? 0.2 : needs.thirst, height: height * 0.7, icon: needs.sick ? '🤒' : '💧'),
        ],
        if (driving) ...[
          SizedBox(height: height / 3),
          NeedBar(value: needs.fuel, height: height, icon: '⛽'),
        ],
      ]),
    );
  }
}

extension on CityNeeds {
  /// While resting the bar slowly fills towards half.
  double get restProgress => (1 - restLeft / CityNeeds.restSeconds) * CityNeeds.restEnergy;
}

/// One thing for sale in a shop: food gives energy back, gas fills the tank, the rest goes into the town's stores.
class ShopItem {
  const ShopItem(this.id, this.emoji, this.name, this.price, this.note, {this.energy = 0, this.fuel = 0, this.thirst = 0, this.cure = false});
  final String id, emoji, name, note;
  final int price;
  final double energy, fuel, thirst;

  /// Medicine for yourself: cures being unwell.
  final bool cure;
}

const List<ShopItem> kShopFood = [
  ShopItem('apple', '🍎', 'Apple', 3, 'A little energy', energy: 0.12, thirst: 0.1),
  ShopItem('water', '💧', 'Water', 2, 'Quenches your thirst', thirst: 0.8),
  ShopItem('juice', '🥤', 'Juice', 4, 'Some energy and a drink', energy: 0.18, thirst: 0.5),
  ShopItem('sandwich', '🥪', 'Sandwich', 6, 'A good bit of energy', energy: 0.30),
  ShopItem('meal', '🍔', 'Burger meal', 10, 'Lots of energy', energy: 0.55),
];

const List<ShopItem> kShopTown = [
  ShopItem('pills', '🩹', 'Pain pills', 8, 'Cures a headache or a cold: you walk normally again', cure: true),
  ShopItem('bread', '🍞', 'Food for the town', 10, '5 portions for the people who live here'),
  ShopItem('medicine', '💊', 'Medicine', 12, '3 doses for the sick'),
];

const List<ShopItem> kShopGas = [
  ShopItem('can', '🛢', 'Gas can', 8, 'Half a tank of gas', fuel: 0.5),
  ShopItem('tank', '⛽', 'Fill the tank', 12, 'A full tank', fuel: 1.0),
];

/// What a full tank costs when [fuel] is what is left in it (the more it needs, the more it costs).
int fillPrice(double fuel) => ((1 - fuel.clamp(0.0, 1.0)) * 12).ceil();
