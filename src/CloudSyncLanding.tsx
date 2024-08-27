import { useState } from "react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { Card, CardFooter, CardHeader } from "@nextui-org/react";
import { Cloud, Share2, Zap } from "lucide-react";

export default function Component() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", { name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Cloud className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">CloudSync</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#testimonials"
          >
            Testimonials
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white bg-gradient-to-tr from-slate-900 via-sky-700 to-blue-700">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to CloudSync
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Seamless cloud storage and collaboration for teams of all
                  sizes. Store, sync, and share with ease.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button>Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Features
            </h2>
            <div className=" grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Cloud className="w-10 h-10 mb-2" />
                  <p className="m-2">Cloud Storage</p>
                </CardHeader>
                <div>
                  <p className="p-5">
                    Store your files securely in the cloud with unlimited
                    storage capacity.
                  </p>
                </div>
              </Card>
              <Card>
                <CardHeader>
                  <Share2 className="w-10 h-10 mb-2" />
                  <p className="m-2">Easy Sharing</p>
                </CardHeader>
                <div>
                  <p className="p-5">
                    Share files and folders with anyone, anywhere, with just a
                    few clicks.
                  </p>
                </div>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="w-10 h-10 mb-2" />
                  <p className="m-2">Real-time Sync</p>
                </CardHeader>
                <div>
                  <p className="p-5">
                    Keep your files up-to-date across all devices with real-time
                    synchronization.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Testimonials
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <div className="pt-4">
                  <p className="text-lg mb-2 p-5">
                    "CloudSync has revolutionized the way our team collaborates.
                    It's intuitive, fast, and secure."
                  </p>
                  <p className="font-semibold p-5">
                    - Sarah Johnson, CEO of TechCorp
                  </p>
                </div>
              </Card>
              <Card>
                <div className="pt-4">
                  <p className="text-lg mb-2 p-5">
                    "We've tried many cloud solutions, but CloudSync is by far
                    the best. It's a game-changer for our workflow."
                  </p>
                  <p className="font-semibold p-5">
                    - Mark Davis, CTO of InnovateCo
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Pricing
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="p-5">
                <CardHeader className="pl-5">
                  <p>Basic</p>
                  <p>For individuals</p>
                </CardHeader>
                <div className="pl-5">
                  <p className="text-4xl font-bold">$9.99/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li>100GB Storage</li>
                    <li>Basic Sharing</li>
                    <li>30-day version history</li>
                  </ul>
                </div>
                <CardFooter>
                  <Button className="w-full">Choose Plan</Button>
                </CardFooter>
              </Card>
              <Card className="p-5">
                <CardHeader className="pl-5">
                  <p>Pro</p>
                  <p>For small teams</p>
                </CardHeader>
                <div className="pl-5">
                  <p className="text-4xl font-bold">$24.99/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li>1TB Storage</li>
                    <li>Advanced Sharing</li>
                    <li>90-day version history</li>
                  </ul>
                </div>
                <CardFooter>
                  <Button className="w-full">Choose Plan</Button>
                </CardFooter>
              </Card>
              <Card className="p-5">
                <CardHeader className="pl-5">
                  <p>Enterprise</p>
                  <p>For large organizations</p>
                </CardHeader>
                <div className="pl-5">
                  <p className="text-4xl font-bold">Custom</p>
                  <ul className="mt-4 space-y-2">
                    <li>Unlimited Storage</li>
                    <li>Advanced Sharing & Controls</li>
                    <li>Unlimited version history</li>
                  </ul>
                </div>
                <CardFooter>
                  <Button className="w-full">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name">Name</label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2023 CloudSync Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
