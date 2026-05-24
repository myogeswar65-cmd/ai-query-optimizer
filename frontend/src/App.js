import { useState } from "react";
import axios from "axios";
import Editor from "@monaco-editor/react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Database,
  Zap,
  ShieldCheck
} from "lucide-react";

function App() {

  const [query, setQuery] = useState(
`SELECT * FROM users
WHERE LOWER(email)='abc@gmail.com';`
  );

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);

  const optimizeQuery = async () => {

    try {

      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/optimize",
        {
          query: query
        }
      );

      setResult(response.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Navbar */}
      <div className="border-b border-zinc-800 px-10 py-6 flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            AI Query Optimizer
          </h1>

          <p className="text-zinc-400 mt-1">
            Intelligent SQL Performance Analyzer
          </p>
        </div>

        

      </div>

      <div className="grid grid-cols-12 gap-6 p-8">

        {/* LEFT PANEL */}
        <div className="col-span-7">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl"
          >

            <div className="px-6 py-4 border-b border-zinc-800 flex justify-between">

              <h2 className="text-xl font-semibold">
                SQL Query Editor
              </h2>

              <div className="text-zinc-400 text-sm">
                PostgreSQL
              </div>

            </div>

            <Editor
              height="400px"
              defaultLanguage="sql"
              theme="vs-dark"
              value={query}
              onChange={(value) => setQuery(value)}
            />

            <div className="p-6">

              <button
                onClick={optimizeQuery}
                className="bg-blue-600 hover:bg-blue-700 transition-all px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg"
              >

                {loading ? "Analyzing..." : "Optimize Query"}

              </button>

            </div>

          </motion.div>

        </div>

        {/* RIGHT PANEL */}
        <div className="col-span-5 space-y-6">

          {/* SCORE CARD */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 shadow-2xl"
          >

            <div className="text-sm uppercase tracking-widest opacity-80">
              Query Health Score
            </div>

            <div className="text-6xl font-bold mt-4">
              72
              <span className="text-2xl opacity-70">/100</span>
            </div>

            <div className="mt-4 text-lg">
              Optimization Recommended
            </div>

          </motion.div>

          {/* METRICS */}
          <div className="grid grid-cols-2 gap-4">

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">

              <Zap className="text-yellow-400 mb-3" />

              <div className="text-zinc-400 text-sm">
                Speed Gain
              </div>

              <div className="text-2xl font-bold mt-2">
                85%
              </div>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">

              <Database className="text-blue-400 mb-3" />

              <div className="text-zinc-400 text-sm">
                Index Impact
              </div>

              <div className="text-2xl font-bold mt-2">
                High
              </div>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">

              <AlertTriangle className="text-red-400 mb-3" />

              <div className="text-zinc-400 text-sm">
                Bottlenecks
              </div>

              <div className="text-2xl font-bold mt-2">
                {result?.issues?.length || 0}
              </div>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">

              <ShieldCheck className="text-green-400 mb-3" />

              <div className="text-zinc-400 text-sm">
                Confidence
              </div>

              <div className="text-2xl font-bold mt-2">
                91%
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* RESULTS SECTION */}
      {result && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-8 pb-10"
        >

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-8">
              Optimization Results
            </h2>

            {/* ISSUES */}
            <div className="mb-8">

              <h3 className="text-xl font-semibold mb-4 text-red-400">
                Issues Detected
              </h3>

              <div className="space-y-3">

                {result.issues.map((issue, index) => (

                  <div
                    key={index}
                    className="bg-zinc-800 px-4 py-3 rounded-xl"
                  >
                    {issue}
                  </div>

                ))}

              </div>

            </div>

            {/* OPTIMIZED QUERY */}
            <div className="mb-8">

              <h3 className="text-xl font-semibold mb-4 text-green-400">
                Optimized Query
              </h3>

              <pre className="bg-black p-6 rounded-2xl overflow-auto text-green-400">
                {result.optimized_query}
              </pre>

            </div>

            {/* INDEX */}
            <div className="mb-8">

              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Suggested Index
              </h3>

              <pre className="bg-black p-6 rounded-2xl overflow-auto text-blue-300">
                {result.suggested_index}
              </pre>

            </div>

            {/* PERFORMANCE */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl p-6 text-2xl font-bold">

              🚀 {result.performance_gain}

            </div>

          </div>

        </motion.div>

      )}

    </div>
  );
}

export default App;