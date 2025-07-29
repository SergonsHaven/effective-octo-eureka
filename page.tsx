import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CloudRain, TrendingUp, Users, MessageSquare, BookOpen, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { WeatherWidget } from "@/components/weather-widget"
import { MarketPricesWidget } from "@/components/market-prices-widget"
import { PestAlertsWidget } from "@/components/pest-alerts-widget"
import { LanguageSelector } from "@/components/language-selector"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-green-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-xl">🌾</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">E-Agriculture Kenya</h1>
                <p className="text-green-100 text-sm">Empowering Smallholder Farmers</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageSelector />
              <Link href="/login">
                <Button variant="outline" className="text-green-600 border-white hover:bg-white bg-transparent">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-orange-500 hover:bg-orange-600">Register</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Grow Smarter with <span className="text-green-600">Digital Agriculture</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Access real-time weather data, market prices, expert advice, and connect with fellow farmers across Kenya.
            Available in English, Kiswahili, and local dialects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                Get Started Today
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Real-time Data Widgets */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Real-Time Agricultural Data</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Suspense fallback={<div className="h-64 bg-gray-100 rounded-lg animate-pulse" />}>
              <WeatherWidget />
            </Suspense>
            <Suspense fallback={<div className="h-64 bg-gray-100 rounded-lg animate-pulse" />}>
              <MarketPricesWidget />
            </Suspense>
            <Suspense fallback={<div className="h-64 bg-gray-100 rounded-lg animate-pulse" />}>
              <PestAlertsWidget />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Platform Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Agricultural Advisory</CardTitle>
                <CardDescription>Expert guidance on crops, livestock, and mixed farming practices</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/advisory">
                  <Button variant="outline" className="w-full bg-transparent">
                    Explore Advisory
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CloudRain className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Weather Forecast</CardTitle>
                <CardDescription>Localized, real-time weather data for better farming decisions</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/weather">
                  <Button variant="outline" className="w-full bg-transparent">
                    View Weather
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Market Prices</CardTitle>
                <CardDescription>Current commodity rates across counties with trend analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/market">
                  <Button variant="outline" className="w-full bg-transparent">
                    Check Prices
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Q&A Forum</CardTitle>
                <CardDescription>Connect with experts and fellow farmers for knowledge sharing</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/forum">
                  <Button variant="outline" className="w-full bg-transparent">
                    Join Discussion
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Pest Alerts</CardTitle>
                <CardDescription>Early warning system for pest outbreaks and disease management</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/alerts">
                  <Button variant="outline" className="w-full bg-transparent">
                    View Alerts
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>Community</CardTitle>
                <CardDescription>Build networks with farmers, extension officers, and experts</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/community">
                  <Button variant="outline" className="w-full bg-transparent">
                    Join Community
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-green-100">Registered Farmers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">47</div>
              <div className="text-green-100">Counties Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Expert Advisors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-green-100">Languages Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">E-Agriculture Kenya</h4>
              <p className="text-gray-300 text-sm">
                Empowering smallholder farmers with digital tools and knowledge for sustainable agriculture.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/advisory" className="text-gray-300 hover:text-white">
                    Agricultural Advisory
                  </Link>
                </li>
                <li>
                  <Link href="/weather" className="text-gray-300 hover:text-white">
                    Weather Forecast
                  </Link>
                </li>
                <li>
                  <Link href="/market" className="text-gray-300 hover:text-white">
                    Market Prices
                  </Link>
                </li>
                <li>
                  <Link href="/forum" className="text-gray-300 hover:text-white">
                    Q&A Forum
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/help" className="text-gray-300 hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="text-gray-300 hover:text-white">
                    Feedback
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-gray-300 hover:text-white">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Languages</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-white border-white">
                  English
                </Badge>
                <Badge variant="outline" className="text-white border-white">
                  Kiswahili
                </Badge>
                <Badge variant="outline" className="text-white border-white">
                  Local Dialects
                </Badge>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2024 E-Agriculture Kenya. All rights reserved. Built for Kenyan farmers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
