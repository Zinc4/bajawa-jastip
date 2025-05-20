// "use client";

// import { useEffect, useRef } from "react";
// import { TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import dynamic from "next/dynamic";

// export const runtime = "edge";

// const MapContainer = dynamic(
//   () => import("react-leaflet").then((mod) => mod.MapContainer),
//   {
//     ssr: false,
//   }
// );
// const redIcon = new L.Icon({
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });
// export default function ContactMap() {
//   // const mapRef = useRef<HTMLDivElement>(null);

//   // useEffect(() => {
//   //   // This is a placeholder for a real map implementation
//   //   // In a real application, you would use a library like Leaflet, Google Maps, or Mapbox
//   //   if (mapRef.current) {
//   //     const canvas = document.createElement("canvas");
//   //     canvas.width = mapRef.current.clientWidth;
//   //     canvas.height = mapRef.current.clientHeight;
//   //     mapRef.current.appendChild(canvas);

//   //     const ctx = canvas.getContext("2d");
//   //     if (ctx) {
//   //       // Draw a simple placeholder map
//   //       ctx.fillStyle = "#e5e7eb";
//   //       ctx.fillRect(0, 0, canvas.width, canvas.height);

//   //       // Draw roads
//   //       ctx.strokeStyle = "#9ca3af";
//   //       ctx.lineWidth = 2;

//   //       // Horizontal roads
//   //       for (let i = 1; i < 5; i++) {
//   //         ctx.beginPath();
//   //         ctx.moveTo(0, canvas.height * (i / 5));
//   //         ctx.lineTo(canvas.width, canvas.height * (i / 5));
//   //         ctx.stroke();
//   //       }

//   //       // Vertical roads
//   //       for (let i = 1; i < 5; i++) {
//   //         ctx.beginPath();
//   //         ctx.moveTo(canvas.width * (i / 5), 0);
//   //         ctx.lineTo(canvas.width * (i / 5), canvas.height);
//   //         ctx.stroke();
//   //       }

//   //       // Draw office location
//   //       const officeX = canvas.width * 0.6;
//   //       const officeY = canvas.height * 0.4;

//   //       // Office marker
//   //       ctx.fillStyle = "#ef4444";
//   //       ctx.beginPath();
//   //       ctx.arc(officeX, officeY, 10, 0, Math.PI * 2);
//   //       ctx.fill();

//   //       // Office label
//   //       ctx.fillStyle = "#111827";
//   //       ctx.font = "bold 14px Arial";
//   //       ctx.fillText("Bajawa Jastip Office", officeX + 15, officeY + 5);

//   //       // Add legend
//   //       ctx.fillStyle = "#111827";
//   //       ctx.font = "bold 16px Arial";
//   //       ctx.fillText("Our Location", 20, 30);

//   //       ctx.font = "12px Arial";
//   //       ctx.fillText("Jalan Utama No. 123, Jakarta Pusat", 20, 50);
//   //     }
//   //   }

//   //   return () => {
//   //     if (mapRef.current) {
//   //       while (mapRef.current.firstChild) {
//   //         mapRef.current.removeChild(mapRef.current.firstChild);
//   //       }
//   //     }
//   //   };
//   // }, []);

//   // return (
//   //   <div ref={mapRef} className="w-full h-full bg-gray-100 rounded-lg"></div>
//   // );
//   const position: [number, number] = [-7.3065348, 112.7955026];

//   return (
//     <div className="h-[400px] w-full rounded-md overflow-hidden">
//       <MapContainer
//         center={position}
//         zoom={13}
//         scrollWheelZoom={false}
//         style={{ height: "100%", width: "100%" }}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position} icon={redIcon}>
//           <Popup>
//             <b>Bajawa Jastip Office</b>
//             <br />
//             Jalan Utama No. 123, Jakarta Pusat
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// }

"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Komponen MapContainer akan di-load secara dinamis
const MapWithNoSSR = dynamic(() => import("./map"), { ssr: false });

export default function ContactMap() {
  return (
    <div className="h-[400px] w-full rounded-md overflow-hidden">
      <MapWithNoSSR />
    </div>
  );
}
