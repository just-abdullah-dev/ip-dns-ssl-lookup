"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, Globe, Building, Clock } from "lucide-react";
import Layout from "../Layout/Layout";

export default function WhatIsMyIP() {
  const [ipInfo, setIpInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIPInfo = async () => {
      try {
        const response = await fetch("https://ipinfo.io/json");
        if (!response.ok) {
          throw new Error("Failed to fetch IP information");
        }

        const data = await response.json();
        console.log(data);
        setIpInfo(data);
      } catch (err) {
        setError(err ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchIPInfo();
  }, []);

  if (loading) {
    return (
      <Layout>
        <Card className="w-full max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-4xl ">What's My IP?</CardTitle>
            <CardDescription>Fetching your IP information...</CardDescription>
          </CardHeader>
          <CardContent>
            <Skeleton className="w-full h-12 mb-4" />
            <Skeleton className="w-full h-32" />
          </CardContent>
        </Card>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Alert  className="w-full max-w-3xl mx-auto" variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </Layout>
    );
  }

  if (!ipInfo) {
    return null;
  }

  return (
    <Layout>
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
        <CardTitle className="text-4xl ">What's My IP?</CardTitle>
          <CardDescription>
            Your current IP address and related information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold mb-6 text-center">
            {ipInfo?.ip}
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Property</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <Globe className="mr-2 h-4 w-4" />
                    Hostname
                  </div>
                </TableCell>
                <TableCell>{ipInfo?.hostname || "N/A"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    Location
                  </div>
                </TableCell>
                <TableCell>{`${ipInfo?.city}, ${ipInfo?.region}, ${ipInfo?.country}`}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    Coordinates
                  </div>
                </TableCell>
                <TableCell>{ipInfo?.loc}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <Building className="mr-2 h-4 w-4" />
                    Organization
                  </div>
                </TableCell>
                <TableCell>{ipInfo?.org}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    Postal Code
                  </div>
                </TableCell>
                <TableCell>{ipInfo?.postal}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    Timezone
                  </div>
                </TableCell>
                <TableCell>{ipInfo?.timezone}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Layout>
  );
}
