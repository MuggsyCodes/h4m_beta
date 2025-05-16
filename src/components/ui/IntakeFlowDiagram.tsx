import FlowDiagram from "@/components/flow-diagram/FlowDiagram";

export default function IntakeFlowDiagram() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-neutral-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Understanding Our Client Process
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Follow the interactive flow diagram below to learn about our client
            intake process based on whether you already have blood work results
            available.
          </p>
        </div>

        <FlowDiagram />
      </div>
    </main>
  );
}
