import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ChevronRight, Globe, Shield, Wifi } from "lucide-react";
import Layout from "../Layout/Layout";

export default function LandingPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 space-y-16">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Welcome to IP-DNS-SSL-Lookup
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering you with essential network diagnostics and information at
            your fingertips.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ToolCard
            title="DNS Lookup"
            description="Uncover the mysteries behind domain names. Our DNS lookup tool provides comprehensive information about any domain's DNS records."
            icon={<Globe className="h-8 w-8" />}
            link="/dns-lookup"
          />
          <ToolCard
            title="What's My IP"
            description="Instantly discover your current IP address and gain insights into your network configuration and geolocation."
            icon={<Wifi className="h-8 w-8" />}
            link="/whats-my-ip"
          />
          <ToolCard
            title="SSL/TLS Lookup"
            description="Ensure your connections are secure. Analyze SSL/TLS certificates for any domain and verify the encryption standards in use."
            icon={<Shield className="h-8 w-8" />}
            link="/ssl-tls-lookup"
          />
        </section>

        <section className="bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground rounded-lg p-8 md:p-16 space-y-6">
          <h2 className="text-3xl font-bold">Why Choose Our IP-DNS-SSL-Lookup?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside">
            <li>Fast and reliable results</li>
            <li>User-friendly interface</li>
            <li>Comprehensive data analysis</li>
            <li>Free to use, no registration required</li>
            <li>Regular updates and improvements</li>
            <li>Privacy-focused, we don't store your data</li>
          </ul>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#tools">Explore Our Tools</Link>
          </Button>
        </section>

        <section id="tools" className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Our IP-DNS-SSL-Lookup</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ToolFeature
              title="DNS Lookup"
              description="Retrieve comprehensive DNS records for any domain. Understand the infrastructure behind websites and email systems."
              link="/dns-lookup"
            />
            <ToolFeature
              title="What's My IP"
              description="Quickly find out your public IP address, local IP, and detailed network information. Useful for network diagnostics and configuration."
              link="/whats-my-ip"
            />
            <ToolFeature
              title="SSL/TLS Lookup"
              description="Analyze the security of websites by examining their SSL/TLS certificates. Ensure your connections are encrypted and trustworthy."
              link="/ssl-tls-lookup"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}

function ToolCard({ title, description, icon, link }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Button asChild>
          <Link href={link}>Try Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function ToolFeature({ title, description, link }) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <Button variant="link" asChild>
        <Link href={link} className="inline-flex items-center">
          Learn more <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
