function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "2rem",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          maxWidth: "500px",
        }}
      >
        <h1
          style={{
            color: "#333",
            marginBottom: "1rem",
            fontSize: "2.5rem",
          }}
        >
          🚧 Under Construction 🚧
        </h1>
        <p
          style={{
            color: "#666",
            fontSize: "1.2rem",
            marginBottom: "1.5rem",
          }}
        >
          This page is currently being built. Check back soon!
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            color: "#888",
          }}
        >
          <span>⚒️</span>
          <span>Building something awesome...</span>
          <span>⚒️</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
