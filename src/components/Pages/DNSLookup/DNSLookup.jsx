"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TypeA from "./TypeA";
import TypeCNAME from "./TypeCNAME";
import TypeAAAA from "./TypeAAAA";
import TypeMX from "./TypeMX";
import TypeTXT from "./TypeTXT";
import TypeNS from "./TypeNS";
import TypePTR from "./TypePTR";
import TypeSRV from "./TypeSRV";
import TypeSOA from "./TypeSOA";
import TypeCAA from "./TypeCAA";
import Layout from "../Layout/Layout";

export default function DNSLookup() {
  const [domain, setDomain] = useState("");
  const [searchedDomain, setSearchedDomain] = useState("");

  const handleSearch = () => {
    setSearchedDomain(domain);
  };

  return (
    <Layout>
      <div className="container mx-auto max-w-7xl p-4">
        <Card>
          <CardHeader className="">
            <CardTitle className="text-4xl">DNS Lookup</CardTitle>
            <CardDescription>
              Enter a domain to view its DNS records
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2 mb-4 mx-auto max-w-4xl">
              <Input
                className=" outline-none border-none focus:outline-none focus:ring-0 bg-gray-300/70"
                type="text"
                placeholder="Enter domain (e.g., example.com)"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
              />
              <Button className="px-8" onClick={handleSearch}>
                Search
              </Button>
            </div>
            {searchedDomain && (
              <Tabs defaultValue="a">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10">
                  <TabsTrigger
                    className=" mx-2 border border-black rounded-lg hover:font-bold duration-300 transition-all"
                    value="a"
                  >
                    A
                  </TabsTrigger>
                  <TabsTrigger
                    className=" mx-2 border border-black rounded-lg hover:font-bold duration-300 transition-all"
                    value="cname"
                  >
                    CNAME
                  </TabsTrigger>
                  <TabsTrigger
                    className=" mx-2 border border-black rounded-lg hover:font-bold duration-300 transition-all"
                    value="aaaa"
                  >
                    AAAA
                  </TabsTrigger>
                  <TabsTrigger
                    className=" mx-2 border border-black rounded-lg hover:font-bold duration-300 transition-all"
                    value="mx"
                  >
                    MX
                  </TabsTrigger>
                  <TabsTrigger
                    className=" mx-2 border border-black rounded-lg hover:font-bold duration-300 transition-all"
                    value="txt"
                  >
                    TXT
                  </TabsTrigger>
                  <TabsTrigger
                    className=" mx-2 border border-black rounded-lg hover:font-bold duration-300 transition-all"
                    value="ns"
                  >
                    NS
                  </TabsTrigger>
                  <TabsTrigger
                    className=" mx-2 border border-black rounded-lg hover:font-bold duration-300 transition-all"
                    value="ptr"
                  >
                    PTR
                  </TabsTrigger>
                  <TabsTrigger
                    className=" mx-2 border border-black rounded-lg hover:font-bold duration-300 transition-all"
                    value="srv"
                  >
                    SRV
                  </TabsTrigger>
                  <TabsTrigger
                    className=" mx-2 border border-black rounded-lg hover:font-bold duration-300 transition-all"
                    value="soa"
                  >
                    SOA
                  </TabsTrigger>
                  <TabsTrigger
                    className=" mx-2 border border-black rounded-lg hover:font-bold duration-300 transition-all"
                    value="caa"
                  >
                    CAA
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="a">
                  <TypeA domain={searchedDomain} />
                </TabsContent>
                <TabsContent value="cname">
                  <TypeCNAME domain={searchedDomain} />
                </TabsContent>
                <TabsContent value="aaaa">
                  <TypeAAAA domain={searchedDomain} />
                </TabsContent>
                <TabsContent value="mx">
                  <TypeMX domain={searchedDomain} />
                </TabsContent>

                <TabsContent value="txt">
                  <TypeTXT domain={searchedDomain} />
                </TabsContent>
                <TabsContent value="ns">
                  <TypeNS domain={searchedDomain} />
                </TabsContent>
                <TabsContent value="ptr">
                  <TypePTR domain={searchedDomain} />
                </TabsContent>
                <TabsContent value="srv">
                  <TypeSRV domain={searchedDomain} />
                </TabsContent>
                <TabsContent value="soa">
                  <TypeSOA domain={searchedDomain} />
                </TabsContent>
                <TabsContent value="caa">
                  <TypeCAA domain={searchedDomain} />
                </TabsContent>
              </Tabs>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
