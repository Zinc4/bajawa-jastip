import { Card, CardContent } from "@/components/ui/card";
export const runtime = "edge";
export default function SocialProof() {
  const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "1M+", label: "Packages Delivered" },
    { value: "98%", label: "On-Time Delivery" },
    { value: "24/7", label: "Customer Support" },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
