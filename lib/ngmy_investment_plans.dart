/// Official NGMY Growth Income investment tiers ($5 – $100). $100 is the most expensive plan.
const List<double> kNgmyInvestmentPlanPrices = [
  5,
  20,
  30,
  50,
  100,
];

/// No plan above this price is ever offered, even if an old copy of the plan list still has one.
const double kNgmyInvestmentPlanMaxPrice = 100;

const double kNgmyInvestmentPlanRoi = 0.0286;

String ngmyInvestmentPlanNameForPrice(double price) {
  if (price <= 20) return 'Starter Plan';
  if (price <= 30) return 'Basic Plan';
  if (price <= 100) return 'Bronze Plan';
  if (price <= 400) return 'Silver Plan';
  if (price <= 500) return 'Gold Plan';
  if (price <= 700) return 'Platinum Plan';
  return 'Diamond Plan';
}

List<Map<String, dynamic>> get kNgmyInvestmentPlansMaps => kNgmyInvestmentPlanPrices
    .map(
      (p) => {
        'name': ngmyInvestmentPlanNameForPrice(p),
        'price': p,
        'roi': kNgmyInvestmentPlanRoi,
      },
    )
    .toList();
