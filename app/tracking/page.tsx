import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineTitle,
  TimelineBody,
} from "@/components/ui/timeline"
import { CheckCircle, TruckIcon, PackageIcon, WarehouseIcon, MapPinIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Track Your Package",
  description:
    "Track your Bajawa Jastip package in real-time. Get updates on your delivery status and estimated arrival time.",
}

export default function TrackingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Track Your Package</h1>

      <div className="max-w-3xl mx-auto mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Enter Tracking Information</CardTitle>
            <CardDescription>Track your package by entering your tracking number or order ID.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="tracking" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="tracking">Tracking Number</TabsTrigger>
                <TabsTrigger value="order">Order ID</TabsTrigger>
              </TabsList>
              <TabsContent value="tracking" className="mt-4">
                <div className="flex space-x-2">
                  <Input placeholder="Enter tracking number (e.g., BJ12345678ID)" />
                  <Button>Track</Button>
                </div>
              </TabsContent>
              <TabsContent value="order" className="mt-4">
                <div className="flex space-x-2">
                  <Input placeholder="Enter order ID (e.g., ORD-12345)" />
                  <Button>Track</Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Tracking Results</CardTitle>
            <CardDescription>Tracking Number: BJ12345678ID</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Origin</h3>
                <p className="font-medium">Jakarta, Indonesia</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Destination</h3>
                <p className="font-medium">Surabaya, Indonesia</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Estimated Delivery</h3>
                <p className="font-medium">April 7, 2025</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="relative">
                <div className="flex justify-between mb-2">
                  <div className="text-center">
                    <div className="text-primary">
                      <PackageIcon className="h-6 w-6 mx-auto" />
                    </div>
                    <p className="text-xs mt-1">Picked Up</p>
                  </div>
                  <div className="text-center">
                    <div className="text-primary">
                      <WarehouseIcon className="h-6 w-6 mx-auto" />
                    </div>
                    <p className="text-xs mt-1">Processing</p>
                  </div>
                  <div className="text-center">
                    <div className="text-primary">
                      <TruckIcon className="h-6 w-6 mx-auto" />
                    </div>
                    <p className="text-xs mt-1">In Transit</p>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">
                      <MapPinIcon className="h-6 w-6 mx-auto" />
                    </div>
                    <p className="text-xs mt-1">Out for Delivery</p>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">
                      <CheckCircle className="h-6 w-6 mx-auto" />
                    </div>
                    <p className="text-xs mt-1">Delivered</p>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: "60%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                  ></div>
                </div>
              </div>
            </div>

            <Timeline>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon className="bg-primary">
                    <TruckIcon className="h-4 w-4" />
                  </TimelineIcon>
                  <TimelineTitle>Package in transit to Surabaya</TimelineTitle>
                </TimelineHeader>
                <TimelineBody>
                  <p className="text-sm text-gray-500">April 5, 2025 - 10:30 AM</p>
                  <p className="text-sm">
                    Your package has left our Jakarta distribution center and is on its way to Surabaya.
                  </p>
                </TimelineBody>
              </TimelineItem>

              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon className="bg-primary">
                    <WarehouseIcon className="h-4 w-4" />
                  </TimelineIcon>
                  <TimelineTitle>Arrived at Jakarta distribution center</TimelineTitle>
                </TimelineHeader>
                <TimelineBody>
                  <p className="text-sm text-gray-500">April 4, 2025 - 8:45 PM</p>
                  <p className="text-sm">Your package has arrived at our Jakarta distribution center for processing.</p>
                </TimelineBody>
              </TimelineItem>

              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon className="bg-primary">
                    <PackageIcon className="h-4 w-4" />
                  </TimelineIcon>
                  <TimelineTitle>Package picked up</TimelineTitle>
                </TimelineHeader>
                <TimelineBody>
                  <p className="text-sm text-gray-500">April 4, 2025 - 2:15 PM</p>
                  <p className="text-sm">Your package has been picked up from the sender in Jakarta.</p>
                </TimelineBody>
              </TimelineItem>

              <TimelineItem>
                <TimelineHeader>
                  <TimelineIcon className="bg-primary">
                    <PackageIcon className="h-4 w-4" />
                  </TimelineIcon>
                  <TimelineTitle>Shipping information received</TimelineTitle>
                </TimelineHeader>
                <TimelineBody>
                  <p className="text-sm text-gray-500">April 3, 2025 - 11:20 AM</p>
                  <p className="text-sm">We have received the shipping information for your package.</p>
                </TimelineBody>
              </TimelineItem>
            </Timeline>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

