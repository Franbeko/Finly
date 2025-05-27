import { Check, Diamond, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

function UpgradePage() {
  const tiers = [
    {
      name: "Starter",
      price: 0,
      description: "Perfect for getting started",
      features: [
        "Up to 3 budgets",
        "Basic expense tracking",
        "Standard reports",
        "Email support"
      ],
      buttonText: "Current Plan",
      featured: false
    },
    {
      name: "Pro",
      price: 9,
      description: "For serious budgeters",
      features: [
        "Unlimited budgets",
        "Advanced analytics",
        "Custom categories",
        "Data exports (CSV/PDF)",
        "Priority support"
      ],
      buttonText: "Upgrade to Pro",
      featured: true
    },
    {
      name: "Team",
      price: 29,
      description: "Collaborative budgeting",
      features: [
        "All Pro features",
        "Up to 5 team members",
        "Shared budget views",
        "Role-based permissions",
        "Dedicated account manager"
      ],
      buttonText: "Upgrade to Team",
      featured: false
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full mb-6">
          <Diamond className="h-4 w-4" />
          <span className="text-sm font-medium">PREMIUM PLANS</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Choose Your Perfect Plan
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Upgrade to unlock powerful budgeting tools and take control of your finances.
          Premium features coming soon! Here's what we're planning to offer.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {tiers.map((tier) => (
          <div 
            key={tier.name}
            className={`relative border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-all ${
              tier.featured ? 'ring-2 ring-blue-500 border-blue-500' : 'border-gray-200'
            }`}
          >
            {tier.featured && (
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                POPULAR
              </div>
            )}
            
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-1">{tier.name}</h2>
              <p className="text-muted-foreground">{tier.description}</p>
              <div className="my-4">
                <span className="text-4xl font-bold">
                  {tier.price === 0 ? 'Free' : `$${tier.price}`}
                </span>
                {tier.price > 0 && (
                  <span className="text-muted-foreground">/month</span>
                )}
              </div>
            </div>
            
            <ul className="space-y-3 mb-8">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              className="w-full" 
              size="lg"
              variant={tier.featured ? 'default' : 'outline'}
              disabled={tier.price === 0}
            >
              {tier.buttonText}
            </Button>
          </div>
        ))}
      </div>

      {/* Feature Comparison */}
      <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold mb-8 text-center">Plan Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left pb-4 font-medium">Features</th>
                <th className="text-center pb-4 font-medium">Starter</th>
                <th className="text-center pb-4 font-medium">Pro</th>
                <th className="text-center pb-4 font-medium">Team</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Budget Limit', '3', 'Unlimited', 'Unlimited'],
                ['Advanced Analytics', 'Basic', '✅ Full', '✅ Full +'],
                ['Data Export', 'PDF only', 'PDF/CSV', 'PDF/CSV/Excel'],
                ['Support', 'Email', 'Priority Email', '24/7 Dedicated'],
                ['Collaboration', '❌', '❌', 'Up to 5 users'],
                ['Custom Categories', '5 max', 'Unlimited', 'Unlimited'],
              ].map(([feature, ...values]) => (
                <tr key={feature} className="border-b hover:bg-gray-100/50">
                  <td className="py-4 font-medium">{feature}</td>
                  {values.map((value, i) => (
                    <td 
                      key={i} 
                      className={`py-4 text-center ${
                        i === 1 ? 'text-blue-600 font-semibold' : 
                        i > 1 ? 'text-purple-600 font-semibold' : ''
                      }`}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              question: "Can I switch plans later?",
              answer: "Yes, you can upgrade or downgrade at any time."
            },
            {
              question: "Is there a free trial?",
              answer: "We offer a 14-day money-back guarantee on all paid plans."
            },
            {
              question: "How does team billing work?",
              answer: "The Team plan is billed per organization, not per user."
            }
          ].map((item) => (
            <div key={item.question} className="border-b pb-6">
              <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
              <p className="text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UpgradePage;