"use client";

import { useState } from "react";
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
import { Shield, Globe, Calendar, Hash } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Layout from "../Layout/Layout";

export default function SSLLookup() {
  const [domain, setDomain] = useState("");
  const [certInfo, setCertInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCertificateInfo = async () => {
    setLoading(true);
    setError(null);
    setCertInfo(null);

    try {
      const response = await fetch(`/api/ssl-lookup?domain=${domain}`);
      if (!response.ok) {
        throw new Error("Failed to fetch certificate information");
      }

      const data = await response.json();
      console.log(data);
      
      if (data?.data.length > 0) {
        setCertInfo(data?.data[0]);
      } else {
        setError("No certificate information found for this domain");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-4xl">SSL Certificate Checker</CardTitle>
          <CardDescription>
            Enter a domain to view its SSL/TLS certificate details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-6">
            <Input
              type="text"
              placeholder="Enter domain (e.g., example.com)"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
            <Button
              onClick={fetchCertificateInfo}
              disabled={loading || !domain}
            >
              Check
            </Button>
          </div>

          {loading && (
            <div className="space-y-2">
              <Skeleton className="w-full h-12" />
              <Skeleton className="w-full h-12" />
              <Skeleton className="w-full h-12" />
            </div>
          )}

          {error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {certInfo && (
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
                      <Shield className="mr-2 h-4 w-4" />
                      Issuer
                    </div>
                  </TableCell>
                  <TableCell>{certInfo?.issuer_name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <Globe className="mr-2 h-4 w-4" />
                      Common Name
                    </div>
                  </TableCell>
                  <TableCell>{certInfo?.common_name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <Globe className="mr-2 h-4 w-4" />
                      Subject Alternative Names
                    </div>
                  </TableCell>
                  <TableCell>{certInfo?.name_value}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      Valid From
                    </div>
                  </TableCell>
                  <TableCell>
                    {new Date(certInfo?.not_before).toLocaleString()}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      Valid To
                    </div>
                  </TableCell>
                  <TableCell>
                    {new Date(certInfo?.not_after).toLocaleString()}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <Hash className="mr-2 h-4 w-4" />
                      Serial Number
                    </div>
                  </TableCell>
                  <TableCell>{certInfo?.serial_number}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </Layout>
  );
}
