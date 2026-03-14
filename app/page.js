export default function Home() {
  return (
    <main style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>DevOps Next.js App</h1>
      <h2>Hello from Adnan's CI/CD Project 🚀</h2>
      <p>This Next.js application is deployed using Jenkins and Vercel.</p>
      <button style={{
        padding: "10px",
        background: "black",
        color: "white",
        borderRadius: "5px",
        cursor: "pointer"
      }}>
        DevOps Pipeline Running
      </button>
    </main>
  );
}