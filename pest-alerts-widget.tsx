import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Bug, Shield } from "lucide-react"

export function PestAlertsWidget() {
  // In a real app, this would fetch from a pest monitoring API
  const pestAlerts = [
    {
      pest: "Fall Armyworm",
      crop: "Maize",
      severity: "High",
      location: "Central Kenya",
      description: "Increased activity reported in maize fields",
    },
    {
      pest: "Coffee Berry Borer",
      crop: "Coffee",
      severity: "Medium",
      location: "Mt. Kenya Region",
      description: "Monitor coffee plantations closely",
    },
    {
      pest: "Aphids",
      crop: "Vegetables",
      severity: "Low",
      location: "Nairobi County",
      description: "Minor infestations in greenhouse crops",
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          Pest Alerts
        </CardTitle>
        <CardDescription>Current pest and disease warnings</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {pestAlerts.map((alert, index) => (
            <div key={index} className="p-3 border rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Bug className="w-4 h-4 text-red-600" />
                  <span className="font-medium text-sm">{alert.pest}</span>
                </div>
                <Badge className={getSeverityColor(alert.severity)}>{alert.severity}</Badge>
              </div>
              <div className="text-sm text-gray-600 mb-1">
                <strong>Crop:</strong> {alert.crop}
              </div>
              <div className="text-sm text-gray-600 mb-2">
                <strong>Location:</strong> {alert.location}
              </div>
              <div className="text-xs text-gray-500">{alert.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-green-50 rounded-lg">
          <div className="flex items-center gap-2 text-green-800">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Prevention Tip</span>
          </div>
          <div className="text-xs text-green-600 mt-1">
            Regular field monitoring and early intervention are key to pest management.
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
