// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom"; // React Router Link for navigation
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md sticky top-0">
      <div className="container mx-auto flex items-center justify-center">
        <div className="text-xl font-semibold">Healthrobo</div>
        {/* <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">
            <Button variant="link">HealthRobo</Button>
          </Link>
        </div> */}
      </div>
    </nav>
  );
}
