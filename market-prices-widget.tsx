import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

export function MarketPricesWidget() {
  // In a real app, this would fetch from a market data API
  const marketData = [
    { commodity: "Maize", price: 45, unit: "KSh/kg", change: 5.2, trend: "up" },
    { commodity: "Beans", price: 120, unit: "KSh/kg", change: -2.1, trend: "down" },
    { commodity: "Tomatoes", price: 80, unit: "KSh/kg", change: 0, trend: "stable" },
    { commodity: "Onions", price: 60, unit: "KSh/kg", change: 8.5, trend: "up" },
    { commodity: "Potatoes", price: 35, unit: "KSh/kg", change: -1.5, trend: "down" },
  ]

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-600" />
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-600" />
      default:
        return <Minus className="w-4 h-4 text-gray-600" />
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-green-600"
      case "down":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-orange-500" />
          Market Prices
        </CardTitle>
        <CardDescription>Current commodity rates in Nairobi</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {marketData.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
              <div>
                <div className="font-medium text-sm">{item.commodity}</div>
                <div className="text-lg font-bold">
                  {item.price} <span className="text-sm font-normal text-gray-600">{item.unit}</span>
                </div>
              </div>
              <div className="text-right">
                <div className={`flex items-center gap-1 ${getTrendColor(item.trend)}`}>
                  {getTrendIcon(item.trend)}
                  <span className="text-sm font-medium">
                    {item.change > 0 ? "+" : ""}
                    {item.change}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <div className="text-sm font-medium text-blue-800">Market Insight</div>
          <div className="text-xs text-blue-600 mt-1">
            Maize prices are rising due to seasonal demand. Consider selling stored produce.
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
