/// Official NGMY Growth Income investment tiers ($5 – $1,000).
const List<double> kNgmyInvestmentPlanPrices = [
  5,
  20,
  30,
  50,
  100,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  1000,
];

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
