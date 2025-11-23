import React from 'react'

// Using the uploaded image from the local path as the logo (you can move it to public/ later)
const logoUrl = "/mnt/data/17f78e73-493a-4a82-9597-89f68c2d0fb0.png";

function Nav() {
  return (
    <header className="bg-white/75 backdrop-blur sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logoUrl} alt="logo" className="w-10 h-10 rounded-md object-cover" />
          <span className="font-semibold text-lg">MyModernUI</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a className="hover:underline" href="#features">Features</a>
          <a className="hover:underline" href="#pricing">Pricing</a>
          <a className="hover:underline" href="#contact">Contact</a>
          <button className="ml-2 btn bg-primary text-white shadow-sm">Get Started</button>
        </nav>

        <div className="md:hidden">
          <button className="btn bg-primary text-white">Menu</button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="pt-12 pb-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Build modern UIs, fast.
          </h1>
          <p className="mt-4 text-slate-600 max-w-xl">
            A minimal starter UI built with React + Tailwind. Clean components, accessible markup, and
            clear structure so you can adapt it to a dashboard, product site or landing page.
          </p>

          <div className="mt-6 flex gap-3">
            <a className="btn bg-primary text-white" href="#features">Explore</a>
            <a className="btn border border-slate-200" href="#contact">Docs</a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-sm text-slate-500">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="text-xs uppercase text-slate-400">Speed</div>
              <div className="font-semibold">Fast setup</div>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="text-xs uppercase text-slate-400">Design</div>
              <div className="font-semibold">Modern look</div>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="text-xs uppercase text-slate-400">Custom</div>
              <div className="font-semibold">Easy to theme</div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-100 rounded-2xl p-6 shadow-lg">
            <img src={logoUrl} alt="preview" className="w-full h-48 object-cover rounded-md" />
            <div className="mt-4">
              <h3 className="font-semibold">Preview Card</h3>
              <p className="text-sm text-slate-600 mt-1">This is a simple card you can reuse across pages.</p>
              <div className="mt-4 flex gap-2">
                <button className="btn bg-primary text-white">Primary</button>
                <button className="btn border border-slate-200">Secondary</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const items = [
    { title: 'Responsive', desc: 'Mobile-first and responsive layouts.' },
    { title: 'Accessible', desc: 'Semantic HTML and keyboard-friendly controls.' },
    { title: 'Composable', desc: 'Small components that compose easily.' }
  ]

  return (
    <section id="features" className="py-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold">Features</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {items.map(i => (
            <div key={i.title} className="bg-white p-5 rounded-lg shadow-sm">
              <div className="text-slate-700 font-medium">{i.title}</div>
              <p className="text-sm text-slate-500 mt-2">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="py-8">
      <div className="max-w-6xl mx-auto px-6 text-sm text-slate-500">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} MyModernUI — Built with React & Tailwind</div>
          <div className="flex gap-4">
            <a className="hover:underline" href="#">Privacy</a>
            <a className="hover:underline" href="#">Terms</a>
            <a className="hover:underline" href="#">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App(){
  return (
    <div className="min-h-screen text-slate-900">
      <Nav />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
