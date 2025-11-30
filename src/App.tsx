
import React from "react";
import { Route, Switch } from "wouter";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { About } from "./pages/About";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About} />
        
        {/* Fallback for 404 */}
        <Route>
          <div className="flex flex-col items-center justify-center h-[60vh] bg-[#FFEB3B] border-b-4 border-black">
            <h1 className="text-9xl font-black mb-4 text-black">404</h1>
            <p className="text-2xl font-bold uppercase mb-8 text-black">Page not found</p>
            <a href="/" className="px-8 py-4 bg-black text-white font-black uppercase border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors">
              Go Home
            </a>
          </div>
        </Route>
      </Switch>
    </Layout>
  );
}
