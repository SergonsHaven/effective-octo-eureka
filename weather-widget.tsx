import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CloudRain, Sun, Wind, Droplets } from "lucide-react"

export function WeatherWidget() {
  // In a real app, this would fetch from a weather API
  const weatherData = {
    location: "Nairobi, Kenya",
    temperature: 24,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    rainfall: 2.5,
    forecast: [
      { day: "Today", temp: 24, condition: "Partly Cloudy" },
      { day: "Tomorrow", temp: 26, condition: "Sunny" },
      { day: "Wed", temp: 22, condition: "Light Rain" },
    ],
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Sun className="w-5 h-5 text-yellow-500" />
              Weather Forecast
            </CardTitle>
            <CardDescription>{weatherData.location}</CardDescription>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{weatherData.temperature}°C</div>
            <div className="text-sm text-gray-600">{weatherData.condition}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <Droplets className="w-4 h-4 text-blue-500 mx-auto mb-1" />
            <div className="text-sm font-medium">{weatherData.humidity}%</div>
            <div className="text-xs text-gray-500">Humidity</div>
          </div>
          <div className="text-center">
            <Wind className="w-4 h-4 text-gray-500 mx-auto mb-1" />
            <div className="text-sm font-medium">{weatherData.windSpeed} km/h</div>
            <div className="text-xs text-gray-500">Wind</div>
          </div>
          <div className="text-center">
            <CloudRain className="w-4 h-4 text-blue-600 mx-auto mb-1" />
            <div className="text-sm font-medium">{weatherData.rainfall} mm</div>
            <div className="text-xs text-gray-500">Rainfall</div>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium text-sm">3-Day Forecast</h4>
          {weatherData.forecast.map((day, index) => (
            <div key={index} className="flex justify-between items-center text-sm">
              <span>{day.day}</span>
              <span className="text-gray-600">{day.condition}</span>
              <span className="font-medium">{day.temp}°C</span>
            </div>
          ))}
        </div>

        <Badge className="w-full mt-4 bg-green-100 text-green-800 hover:bg-green-200">
          Good conditions for planting
        </Badge>
      </CardContent>
    </Card>
  )
}
