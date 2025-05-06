"use client";

import { useEffect, useRef } from "react";
export const runtime = "edge";
export default function ServiceMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This is a placeholder for a real map implementation
    // In a real application, you would use a library like Leaflet, Google Maps, or Mapbox
    if (mapRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = mapRef.current.clientWidth;
      canvas.height = mapRef.current.clientHeight;
      mapRef.current.appendChild(canvas);

      const ctx = canvas.getContext("2d");
      if (ctx) {
        // Draw a simple placeholder map of Indonesia
        ctx.fillStyle = "#e5e7eb";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#9ca3af";
        // Simplified Indonesia map shape
        ctx.beginPath();
        ctx.moveTo(canvas.width * 0.1, canvas.height * 0.4);
        ctx.lineTo(canvas.width * 0.3, canvas.height * 0.3);
        ctx.lineTo(canvas.width * 0.5, canvas.height * 0.4);
        ctx.lineTo(canvas.width * 0.7, canvas.height * 0.3);
        ctx.lineTo(canvas.width * 0.9, canvas.height * 0.5);
        ctx.lineTo(canvas.width * 0.8, canvas.height * 0.7);
        ctx.lineTo(canvas.width * 0.6, canvas.height * 0.6);
        ctx.lineTo(canvas.width * 0.4, canvas.height * 0.7);
        ctx.lineTo(canvas.width * 0.2, canvas.height * 0.6);
        ctx.closePath();
        ctx.fill();

        // Draw major cities
        const cities = [
          { name: "Jakarta", x: 0.3, y: 0.5 },
          { name: "Surabaya", x: 0.4, y: 0.55 },
          { name: "Makassar", x: 0.6, y: 0.5 },
          { name: "Medan", x: 0.15, y: 0.35 },
          { name: "Bali", x: 0.45, y: 0.6 },
          { name: "Jayapura", x: 0.85, y: 0.45 },
        ];

        cities.forEach((city) => {
          // Draw city point
          ctx.fillStyle = "#ef4444";
          ctx.beginPath();
          ctx.arc(
            canvas.width * city.x,
            canvas.height * city.y,
            5,
            0,
            Math.PI * 2
          );
          ctx.fill();

          // Draw city name
          ctx.fillStyle = "#111827";
          ctx.font = "12px Arial";
          ctx.fillText(
            city.name,
            canvas.width * city.x + 10,
            canvas.height * city.y + 5
          );
        });

        // Add legend
        ctx.fillStyle = "#111827";
        ctx.font = "bold 14px Arial";
        ctx.fillText("Service Coverage Map", 20, 30);

        ctx.fillStyle = "#ef4444";
        ctx.beginPath();
        ctx.arc(20, 50, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#111827";
        ctx.font = "12px Arial";
        ctx.fillText("Major Service Hubs", 30, 55);
      }
    }

    return () => {
      if (mapRef.current) {
        while (mapRef.current.firstChild) {
          mapRef.current.removeChild(mapRef.current.firstChild);
        }
      }
    };
  }, []);

  return (
    <div ref={mapRef} className="w-full h-96 bg-gray-100 rounded-lg"></div>
  );
}
