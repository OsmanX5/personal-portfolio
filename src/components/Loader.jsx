const Loader = () => (
  <div className="flex flex-col items-center gap-6">
    <span className="canvas-loader" />
    <p className="text-sm tracking-[0.3em] uppercase text-muted animate-pulse">
      Loading
    </p>
  </div>
);

export default Loader;
