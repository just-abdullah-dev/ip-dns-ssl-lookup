import Link from 'next/link'
import { Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white/80 py-8 border-t">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">IP-DNS-SSL-Lookup</h3>
            <ul className="space-y-2">
              <li><Link href="/dns-lookup" className="hover:underline">DNS Lookup</Link></li>
              <li><Link href="/whats-my-ip" className="hover:underline">What's My IP</Link></li>
              <li><Link href="/ssl-tls-lookup" className="hover:underline">SSL/TLS Lookup</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Group Members</h3>
            <ul className="space-y-2">
              <li>Abdullah (B22F1020SE166)</li>
              <li>Abbas Mushtaq (B22F0259SE058)</li>
              <li>Syed Zaighum Ali (B22F1444SE114)</li>
              <li>Hasnain Ali (B22F1427SE157)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Project Information</h3>
            <p>This is a project for Computer Networking at <Link href="https://www.paf-iast.edu.pk/" className=" hover:underline hover:text-white">PAF-IAST</Link>.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <Link href="https://github.com/just-abdullah-dev/ip-dns-ssl-lookup" className="inline-flex items-center space-x-2 hover:text-white ">
              <Github className="h-5 w-5" />
              <span>GitHub Repository</span>
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-300">
          © {new Date().getFullYear()} IP-DNS-SSL-Lookup. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

