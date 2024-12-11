"use client";

import { CheckCircle, Info, AlertTriangle } from 'lucide-react';
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

export default function TypeSRV({ domain }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [hasAnswer, setHasAnswer] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://dns.google/resolve?name=${domain}&type=SRV`
        );
        const result = await response.json();
        setData(result);
        setIsSuccessful(result?.Status === 0);
        setHasAnswer(result?.Answer && result?.Answer.length > 0);
      } catch (err) {
        setError("Failed to fetch DNS records");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [domain]);

  if (loading) return <div>Please wait...</div>;
  if (error)
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-bold text-3xl">SRV Records</CardTitle>
        <CardDescription>
          Specifies the location of servers for specified services
        </CardDescription>
      </CardHeader>
      <CardContent>
        {data?.Answer ? (
          <div className="grid md:grid-cols-2">
            <div className="overflow-x-auto col-span-1">
              <h1 className="text-xl font-bold my-3">Response</h1>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px]">Property</TableHead>
                    <TableHead>Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Status</TableCell>
                    <TableCell>{data?.Status}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">TC (Truncated)</TableCell>
                    <TableCell>{data?.TC.toString()}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">RD (Recursion Desired)</TableCell>
                    <TableCell>{data?.RD.toString()}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">RA (Recursion Available)</TableCell>
                    <TableCell>{data?.RA.toString()}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">AD (Authenticated Data)</TableCell>
                    <TableCell>{data?.AD.toString()}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">CD (Checking Disabled)</TableCell>
                    <TableCell>{data?.CD.toString()}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Question</TableCell>
                    <TableCell>
                      {data?.Question.map((q, index) => (
                        <div key={index}>
                          Name: {q.name}, Type: {q.type}
                        </div>
                      ))}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Answer</TableCell>
                    <TableCell>
                      {data.Answer.map((a, index) => (
                        <div key={index}>
                          Name: {a.name}, Type: {a.type}, TTL: {a.TTL}, Data: {a.data}
                        </div>
                      ))}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Comment</TableCell>
                    <TableCell>{data?.Comment}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="mt-6 space-y-4 col-span-1">
              <h1 className="text-xl font-bold">Analysis</h1>
              <Alert variant={isSuccessful ? "default" : "destructive"}>
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>DNS Lookup Status</AlertTitle>
                <AlertDescription>
                  {isSuccessful
                    ? "The DNS lookup was successful."
                    : "The DNS lookup failed."}
                </AlertDescription>
              </Alert>

              {hasAnswer ? (
                <>
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>SRV Records</AlertTitle>
                    <AlertDescription>
                      The domain {domain} has the following SRV records:
                      <ul className="list-disc list-inside mt-2">
                        {data.Answer.map((a, index) => {
                          const [priority, weight, port, target] = a.data.split(' ');
                          return (
                            <li key={index}>
                              Priority: {priority}, Weight: {weight}, Port: {port}, Target: {target}
                            </li>
                          );
                        })}
                      </ul>
                    </AlertDescription>
                  </Alert>
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>SRV Record Analysis</AlertTitle>
                    <AlertDescription>
                      <ul className="list-disc list-inside mt-2">
                        <li>SRV records specify the location of servers for specific services.</li>
                        <li>Priority determines the order in which servers should be used (lower values are tried first).</li>
                        <li>Weight allows load distribution among servers with the same priority.</li>
                        <li>Port indicates the port number for the service on the target host.</li>
                        <li>Target is the hostname of the machine providing the service.</li>
                      </ul>
                    </AlertDescription>
                  </Alert>
                </>
              ) : (
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>No SRV Records</AlertTitle>
                  <AlertDescription>
                    No SRV records were found for {domain}. This means the domain may not have any specific service configurations set up using SRV records.
                  </AlertDescription>
                </Alert>
              )}

              {hasAnswer && (
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>TTL (Time to Live)</AlertTitle>
                  <AlertDescription>
                    The TTL for these SRV records is {data.Answer[0].TTL} seconds (
                    {(data.Answer[0].TTL / 3600).toFixed(2)} hours). This
                    indicates how long the records can be cached before they need to
                    be refreshed.
                  </AlertDescription>
                </Alert>
              )}

              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>DNS Server</AlertTitle>
                <AlertDescription>
                  The response was received from the DNS server with IP:{" "}
                  {data?.Comment ? data?.Comment.split(" ").pop() : ""}
                </AlertDescription>
              </Alert>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Additional Information</AlertTitle>
                <AlertDescription>
                  <ul className="list-disc list-inside">
                    <li>
                      Recursion was {data?.RD ? "desired" : "not desired"} and{" "}
                      {data?.RA ? "available" : "not available"}.
                    </li>
                    <li>
                      The response was {data?.TC ? "truncated" : "not truncated"}.
                    </li>
                    <li>
                      DNSSEC: Authentication was {data?.AD ? "performed" : "not performed"} and checking
                      was {data?.CD ? "disabled" : "not disabled"}.
                    </li>
                  </ul>
                </AlertDescription>
              </Alert>
            </div>
          </div>
        ) : (
          <Alert>
            <AlertTitle>No SRV records found</AlertTitle>
            <AlertDescription>
              This domain does not have any SRV records or they are not publicly
              accessible. This means the domain may not have any specific service configurations set up using SRV records.
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}

